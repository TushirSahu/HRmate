import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import EmployeeCard from "../components/EmployeeCard";
import { Layout } from "../components/layout";

export const JobDetails = () => {
  const { id } = useParams();
  const getJob = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/v1/${id}/getJob`
    );
  };
  return (
    <Layout>
      <div class='flex flex-col gap-4 h-full items-center justify-center rounded-lg mb-4 p-4 dark:bg-[#121212] border-[0.5px] dark:border-gray-800'>
        <div class='dark:bg-gray-800 bg-gray-50  w-full flex flex-col gap-3 justify-between px-5 py-4 rounded-md'>
          <div>
            <span class='text-purple-800 text-sm dark:text-[#9CA3AF]'>
              Engineering
            </span>
            <h3 class='font-bold text-[2rem] mt-px dark:text-white'>
              Senior Full Stack Backend Engineer
            </h3>
            <div class='flex items-center gap-3 mt-2'>
              <span class='text-slate-600 text-sm flex gap-1 items-center dark:text-[#9CA3AF]'>
                {" "}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-4 w-4'
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
                Remote, UK
              </span>
              <span class='text-slate-600 text-sm flex gap-1 items-center dark:text-[#9CA3AF]'>
                {" "}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-4 w-4'
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
                £50,000 - £60,000
              </span>
              {/* Posted */}
              <span class='text-slate-600 text-sm flex gap-1 items-center dark:text-[#9CA3AF]'>
                {" "}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-4 w-4'
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
                2 days ago
              </span>
            </div>
            <p className='text-lg font-light mt-8 dark:text-white'>
              We are looking for a Senior Full Stack Backend Engineer to join
              our team. You will be responsible for building and maintaining our
              backend services and APIs. You will be working closely with our
              frontend team to build a great user experience. You will also be
              working closely with our product team to build the best product
              possible. You will be working with a team of engineers who are
              passionate about building great products. We are a small team and
              you will have a lot of autonomy and ownership over your work. We
              are looking for someone who is passionate about building great
              products and is excited to work in a fast-paced environment. You
              will be working with a team of engineers who are passionate about
              building great products. We are a small team and you will have a
              lot of autonomy and ownership over your work. We are looking for
              someone who is passionate about building great products and is
              excited to work in a fast-paced environment.
            </p>
            <div class='flex flex-wrap gap-3 mt-8'>
              {[
                "React",
                "Node",
                "Express",
                "MongoDB",
                "GraphQL",
                "AWS",
                "Docker",
                "Kubernetes",
                "CI/CD",
                "Git",
              ].map((item) => {
                return (
                  <span class='bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm min-w-[2rem]'>
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
            <EmployeeCard />
            <EmployeeCard />
          </div>
        </div>
      </div>
    </Layout>
  );
};
