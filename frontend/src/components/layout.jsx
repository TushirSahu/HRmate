import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Navbar from "./Navbar";

export const Layout = ({ children }) => {
  const { user, setUser } = useContext(AuthProvider);
  const navigate = useNavigate();
  return (
    <>
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
              <Link
                to='/'
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
                  <path
                    fill-rule='evenodd'
                    d='M3 5a1 1 0 011-1h12a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V5zm1 0v10h12V5H4z'
                    clip-rule='evenodd'
                  ></path>
                  <path
                    fill-rule='evenodd'
                    d='M8 7a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span class='ml-3'>Home</span>
              </Link>
            </li>
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
              <Link
                to='/profile'
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
                <span class='flex-1 ml-3 whitespace-nowrap'>Profile</span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setUser({
                    user: null,
                    token: null,
                    isAuthenticated: null,
                  });
                  window.location.href = "/";
                  localStorage.setItem("token", false);
                }}
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
                <span class='flex-1 ml-3 whitespace-nowrap'>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div class='p-4 sm:ml-64 mt-24'>{children}</div>
    </>
  );
};
