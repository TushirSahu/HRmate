import React, {useContext} from "react";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
  const { user, setUser } = useContext(AuthProvider);
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <section className="relative h-fit w-screen overflow-hidden bg-purple-50 dark:bg-[#121212]">
        {/* Illustration behind hero content */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none visible dark:opacity-10  "
          aria-hidden="true"
        >
          <svg
            width="1360"
            height="578"
            viewBox="0 0 1360 578"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="illustration-01"
              >
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-26 md:pb-20">
            {/* Section header */}
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 dark:text-white"
                data-aos="zoom-y-out"
              >
                Filter Candidates For{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400">
                  Job
                </span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-xl text-gray-600 mb-8 dark:text-white opacity-75"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  AI-based candidate filtering uses machine learning to analyze resumes 
                  and identify the best fit for a job. This process can include analyzing 
                  text data, natural language processing and conducting initial interviews, 
                  providing efficient and unbiased results.
                </p>
                <div
                  className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  <div>
                    <Link
                      to = {user.isAuthenticated ? "/dashboard" : "/signup"}
                      className="btn text-white py-4 px-12 rounded  bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                    >
                      Get started
                    </Link>
                  </div>
                  <div className="hidden sm:block">
                    <a
                      className="btn text-white py-4 px-12 rounded bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                      href="#0"
                    >
                      About us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 16 }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <div
                className="relative flex justify-center mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="450"
              >
                <div className="flex flex-col justify-center">
                  <img
                    className="aspect-video rounded-lg shadow-xl"
                    src="https://cdn.dribbble.com/users/44302/screenshots/17704103/media/6a372737c10eefda90a062345d8f49ac.png?compress=1&resize=720x512&vertical=top"
                    width="768"
                    height="432"
                    alt="Hero"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
