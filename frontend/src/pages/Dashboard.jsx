import React from "react";
import Navbar from "../components/Navbar";
import ProtectedRoute from "../components/ProtectedRoute";

export const Dashboard = () => {
  return (
    <ProtectedRoute>
      <Navbar
        styles={{
          position: "fixed",
          top: "0",
          paddingBottom: "6rem",
        }}
      />
      <button
        data-drawer-target='default-sidebar'
        data-drawer-toggle='default-sidebar'
        aria-controls='default-sidebar'
        type='button'
        class='inline-flex items-center p-2 mt-2 ml-3 absolute top-0 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
      >
        <span class='sr-only'>Open sidebar</span>
        <svg
          class='w-6 h-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            clip-rule='evenodd'
            fill-rule='evenodd'
            d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
          ></path>
        </svg>
      </button>

      <aside
        id='default-sidebar'
        class='fixed top-[108px] left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
        aria-label='Sidebar'
      >
        <div class='h-full px-3 py-4 overflow-y-auto pt-8 bg-white dark:bg-[#121212]'>
          <ul class='space-y-2'>
            <li>
              <a
                href='#'
                class='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  aria-hidden='true'
                  class='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
                  <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
                </svg>
                <span class='ml-3'>Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                class='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  aria-hidden='true'
                  class='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'></path>
                </svg>
                <span class='flex-1 ml-3 whitespace-nowrap'>Kanban</span>
                <span class='inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300'>
                  Pro
                </span>
              </a>
            </li>
            <li>
              <a
                href='#'
                class='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  aria-hidden='true'
                  class='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z'></path>
                  <path d='M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z'></path>
                </svg>
                <span class='flex-1 ml-3 whitespace-nowrap'>Inbox</span>
                <span class='inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300'>
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href='#'
                class='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  aria-hidden='true'
                  class='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span class='flex-1 ml-3 whitespace-nowrap'>Users</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                class='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  aria-hidden='true'
                  class='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span class='flex-1 ml-3 whitespace-nowrap'>Products</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                class='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  aria-hidden='true'
                  class='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span class='flex-1 ml-3 whitespace-nowrap'>Sign In</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                class='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  aria-hidden='true'
                  class='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span class='flex-1 ml-3 whitespace-nowrap'>Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div class='p-4 sm:ml-64 mt-24'>
        <div class='p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700'>
          <div class='grid grid-cols-3 gap-4 mb-4 b-4'>
            <div class='flex items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800'>
              <div class='p-3 rounded-full bg-purple-600 bg-opacity-75'>
                <svg
                  class='h-8 w-8 text-white'
                  viewBox='0 0 28 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z'
                    fill='currentColor'
                  ></path>
                </svg>
              </div>

              <div class='mx-5'>
                <h4 class='text-2xl font-semibold text-gray-700 dark:text-white'>
                  8,282
                </h4>
                <div class='text-gray-500'>New Users</div>
              </div>
            </div>
            <div class='flex items-center justify-center rounded-lg h-24 col-span-2 bg-gray-50 dark:bg-gray-800'>
              <p class='text-2xl text-gray-400 dark:text-gray-500'>+</p>
            </div>
          </div>
          <h2 class='font-bold text-xl p-2 dark:text-white my-4 mt-12'>
            Your listed jobs
          </h2>
          <div class='flex flex-col gap-4 h-full items-center justify-center rounded-lg mb-4 p-4 dark:bg-[#121212] border-[0.5px] dark:border-gray-800'>
            <div class='dark:bg-gray-800 bg-gray-50  w-full flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md'>
              <div>
                <span class='text-purple-800 text-sm dark:text-[#9CA3AF]'>
                  Engineering
                </span>
                <h3 class='font-bold mt-px dark:text-white'>
                  Senior Full Stack Backend Engineer
                </h3>
                <div class='flex items-center gap-3 mt-2'>
                  <span class='bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm'>
                    Full-time
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
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>{" "}
                    Remote, UK
                  </span>
                </div>
              </div>
              <div>
                <button class='bg-purple-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center'>
                  View this job
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
                      d='M13 7l5 5m0 0l-5 5m5-5H6'
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class='dark:bg-gray-800 bg-gray-50  w-full flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md'>
              <div>
                <span class='text-purple-800 text-sm dark:text-[#9CA3AF]'>
                  Engineering
                </span>
                <h3 class='font-bold mt-px dark:text-white'>
                  Senior Full Stack Backend Engineer
                </h3>
                <div class='flex items-center gap-3 mt-2'>
                  <span class='bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm'>
                    Full-time
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
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>{" "}
                    Remote, UK
                  </span>
                </div>
              </div>
              <div>
                <button class='bg-purple-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center'>
                  View this job
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
                      d='M13 7l5 5m0 0l-5 5m5-5H6'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};
