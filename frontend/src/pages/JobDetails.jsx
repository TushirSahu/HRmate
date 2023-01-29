import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeCard from "../components/EmployeeCard";
import { Layout } from "../components/layout";
import { motion } from "framer-motion";

export const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [candidates, setCandidates] = useState(null);
  const getJob = async () => {
    try {
      const response = await axios.get(
        `https://backend-hrmate.onrender.com/api/v1/${id}/getJob`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setJob(response.data.data);
      setCandidates(response.data.data.selectedEmployee);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getJob();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100, transition: { duration: 0.5 } }}
    >
      <Layout>
        <div className='flex flex-col gap-4 h-full items-center justify-center rounded-lg mb-4 p-4 dark:bg-[#121212] border-[0.5px] dark:border-gray-800'>
          <div className='dark:bg-gray-800 bg-gray-50  w-full flex flex-col gap-3 justify-between px-5 py-4 rounded-md'>
            <div>
              <h3 className='font-bold text-[2rem] mt-px dark:text-white'>
                {job && job.title}
              </h3>
              <div className='flex items-center gap-3 mt-2'>
                <span className='text-slate-600 text-sm flex gap-1 items-center dark:text-[#9CA3AF]'>
                  {" "}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    stroke-width='2'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                  {job && job.location}
                </span>
                <span className='text-slate-600 text-sm flex gap-1 items-center dark:text-[#9CA3AF]'>
                  {" "}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    stroke-width='2'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  Rs. {job && job.salary}
                </span>
                {/* Posted */}
                <span className='text-slate-600 text-sm flex gap-1 items-center dark:text-[#9CA3AF]'>
                  {" "}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    stroke-width='2'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  {job && job.createdAt.slice(0, 10)}
                </span>
              </div>
              <p className='text-lg font-light mt-8 dark:text-white'>
                {job && job.description}
              </p>
              <div className='flex flex-wrap gap-3 mt-8'>
                {job &&
                  job.skills.split(",").map((item) => {
                    return (
                      <span className='bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm min-w-[2rem]'>
                        {item}
                      </span>
                    );
                  })}
              </div>
            </div>
            <div className='flex flex-col justify-start mt-12'>
              <h1 className='text-2xl mb-4 font-medium dark:text-white'>
                Recommended Candidates
              </h1>

              {candidates &&
                candidates.map((item) => {
                  return (
                    <EmployeeCard
                      key={item._id}
                      job_id={id}
                      getJob={getJob}
                      candidate={item}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </Layout>
    </motion.div>
  );
};
