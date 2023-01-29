import React from "react";
import axios from "axios";

const EmployeeCard = ({ candidate, job_id, getJob }) => {
  const { name, email, degree, interview, skills } = candidate;
  const handleInterview = async () => {
    const data = {
      eid: candidate.id,
      interview: !interview,
    };
    try {
      const response = await axios.post(
        `https://backend-hrmate.onrender.com/api/v1/${job_id}/saveJobList`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      getJob();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='flex flex-col items-center sm:items-start mb-4'>
      <div className='dark:bg-gray-800 min-w-full md:grid grid-cols-11  justify-between sm:space-x-24 items-start sm:flex-row gap-2 sm:items-center px-5 py-4 rounded-lg shadow-lg'>
        <div className='flex flex-row space-x-20 sm:flex-col sm:space-x-0 col-span-2 mb-4 sm:mb-0'>
          <div className='text-md leading-5 font-medium text-gray-900 dark:text-white'>
            {name}
          </div>
          <div className='text-sm leading-5 text-gray-500'>
            {/* linkedin icon */}
            <a href={email} className='flex gap-1 sm:mt-2' target='_blank'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='rgb(107 114 128)'
                className='w-4 h-4'
              >
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
              </svg>
              Mail
            </a>
          </div>
        </div>
        <div className='flex flex-row space-x-8 sm:flex-col sm:space-x-0 col-span-4 mb-4 sm:mb-0'>
          <div className='text-md leading-5 text-gray-900 dark:text-white'>
            {degree.split("-")[0]}
          </div>
          <div className='text-sm leading-5 text-gray-500'>
            {skills.split(" ").slice(0, 6).join(" ")}
          </div>
        </div>
        <div className='flex flex-col col-span-2 mb-2 sm:mb-0'>
          <span
            className={`sm:px-2 inline-flex text-xs leading-5 min-w-full font-semibold rounded-full ${
              interview
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            } `}
          >
            {interview === true ? "Interviewing" : "Not Interviewed"}
          </span>
        </div>
        <div className='flex flex-col col-span-3'>
          <div className='sm:px-6 sm:py-4 whitespace-no-wrap sm:text-right text-sm leading-5 font-medium'>
            <a
              onClick={() => {
                handleInterview();
              }}
              className={`text-indigo-600 hover:text-indigo-900 cursor-pointer ${
                interview && "opacity-50"
              }`}
            >
              {interview === true ? "Interviewing" : "Mark as Interviewee"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
