import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { motion } from 'framer-motion';
import login1 from "../assets/login.svg";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthProvider);
  const navigate = useNavigate();
  const submitHandler = async () => {
    setLoading(true);
    const showAlert = (msg) => {
      toast.error(msg,{
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
        duration: 500,
      });
    }
    try {
      const response = await axios.post("http://localhost:8000/api/v1/login", {
        email,
        password,
      });
      setUser({
        user: response.data.user,
        token: response.data.token,
        isAuthenticated: true,
      });
      window.localStorage.setItem("token", response.data.token);
      console.log(response.data);
      setLoading(false);
      navigate("/dashboard");
    } catch (error) {
      showAlert(error.response.data.error);
      setLoading(false);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100, transition: { duration: 0.5 } }}
    >
      <Toaster />
      <Navbar />
      <div className='lg:flex'>
        <div className='lg:w-1/2 xl:max-w-screen-sm'>
          <div className='py-12 bg-purple-100 lg:bg-white flex justify-center lg:justify-start lg:px-12 dark:bg-[#121212]'>
            <div className='cursor-pointer flex items-center'>
              <div className='text-2xl text-purple-800 tracking-wide ml-2 font-semibold'>
                {/* blockify */}
              </div>
            </div>
          </div>
          <div className='mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl'>
            <h2
              className='text-center text-4xl text-purple-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold dark:text-white'
            >
              Log in
            </h2>
            <div className='mt-12'>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitHandler();
                }}
              >
                <div>
                  <div className='text-sm font-bold text-gray-700 tracking-wide dark:text-white'>
                    Email Address
                  </div>
                  <input
                    className='w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-purple-500 dark:bg-[#121212] dark:text-white'
                    type=''
                    placeholder='mike@gmail.com'
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className='mt-8'>
                  <div className='flex justify-between items-center'>
                    <div className='text-sm font-bold text-gray-700 tracking-wide dark:text-white'>
                      Password
                    </div>
                  </div>
                  <input
                    className='w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-purple-500 dark:bg-[#121212] dark:text-white'
                    type='password'
                    placeholder='Enter your password'
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <div className='mt-10'>
                  <button
                    className={`bg-purple-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-purple-600
                                shadow-lg ${loading ? "opacity-50" : ""}`}
                    type='submit'
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Log In"}
                  </button>
                </div>
              </form>
              <div className='mt-12 text-sm font-display font-semibold text-gray-700 text-center dark:text-white'>
                Don't have an account ?{" "}
                <Link
                  to='/signup'
                  className='cursor-pointer text-purple-600 hover:text-purple-800'
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden lg:flex items-center justify-center bg-purple-100 flex-1 h-[calc(100vh_-_5rem)] dark:bg-[#393E46]'>
          <div className='max-w-xs transform duration-200 hover:scale-110 cursor-pointer'>
            <img src={login1} alt='login' height="320px"/>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginPage;
