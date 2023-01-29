import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout";
import Navbar from "../components/Navbar";
import ProtectedRoute from "../components/ProtectedRoute";

export const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const getjobs = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/getJobs", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setJobs(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getjobs();
  }, []);
  console.log(jobs);
  return (
    <ProtectedRoute>
      <Layout>
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 b-4">
            <div class="flex items-center justify-center col-span-2 md:col-span-1 rounded-lg bg-gray-50 dark:bg-gray-800 p-2 md:p-0">
              <div class="p-3 rounded-full bg-purple-600 bg-opacity-75">
                <svg
                  class="h-8 w-8 text-white"
                  viewBox="0 0 28 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>

              <div class="mx-5">
                <h4 class="text-2xl font-semibold text-gray-700 dark:text-white">
                  {jobs.length}
                </h4>
                <div class="text-gray-500">Active Jobs</div>
              </div>
            </div>
            <Link to="/add-details" className="col-span-2">
              <div class="flex items-center justify-center rounded-lg h-24 bg-gray-50 dark:bg-gray-800">
                <p class="text-2xl text-purple-700 dark:text-gray-500">
                  + Add Job
                </p>
              </div>
            </Link>
          </div>
          <h2 class="font-bold text-xl p-2 dark:text-white my-4 mt-12">
            Your listed jobs
          </h2>
          <div class="flex flex-col gap-4 h-full items-center justify-center rounded-lg mb-4 p-4 dark:bg-[#121212] border-[0.5px] dark:border-gray-800">
            {jobs.length == 0 && (
              <span className="text-lg text-gray-400">
                You Don't have any jobs.
              </span>
            )}
            {jobs.map((job) => (
              <div class="dark:bg-gray-800 bg-gray-50  w-full flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md">
                <div>
                  <span class="text-purple-800 text-sm dark:text-[#9CA3AF]">
                    {job.skills.trim().split(",").join(" ")}
                  </span>
                  <h3 class="font-bold mt-px dark:text-white">{job.title}</h3>
                  <div class="flex items-center gap-3 mt-2">
                    <span class="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">
                      Rs. {job.salary} CTC
                    </span>
                    <span class="text-slate-600 text-sm flex gap-1 items-center dark:text-[#9CA3AF]">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>{" "}
                      {job.location}
                    </span>
                  </div>
                </div>
                <div>
                  <Link to={`/job/${job._id}`}>
                    <button class="bg-purple-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center">
                      View this job
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
};
