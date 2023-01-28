import React from "react";
import { useContext, useState } from "react";
import { themeProvider } from "../context/themeContext";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Box from "@mui/material/Box";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
export const Navbar = ({ styles }) => {
  const { theme, toggleTheme } = useContext(themeProvider);
  const { user } = useContext(AuthProvider);
  return (
    <nav
      style={styles}
      className='
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-2
          px-12
          md:mb-12
          text-lg text-gray-700
          bg-white
          dark:bg-[#121212]
          dark:text-gray-200
          h-12
        '
    >
      <div>
        <Link to='/'>
          <img src={logo} alt='' className='' />
        </Link>
      </div>
      <div
        className={`w-full p-4 md:flex md:items-center md:w-auto bg-white dark:bg-[#121212] z-10`}
        id='menu'
      >
        <ul
          className='
              pt-4
              text-base text-gray-700
              hidden
              md:flex
              md:justify-between 
              md:pt-0
              '
        >
          <Link
            to='/signup'
            className='md:p-4 py-2 block hover:text-purple-400 text-purple-500'
          >
            {user.isAuthenticated == true ? "My Dashboard" : "Get Started"}
          </Link>
          <li>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "start",
                bgcolor: theme == "dark" ? "#121212" : "#fff",
                color: theme == "dark" ? "#fff" : "#121212",
                marginLeft: "-0.5rem",
              }}
            >
              <IconButton
                onClick={toggleTheme}
                color='inherit'
                sx={
                  theme == "dark"
                    ? {
                        bgcolor: "#121212",
                        color: "#fff",
                        marginTop: "0.5rem",
                        "&:hover": {
                          bgcolor: "background.default",
                          color: "text.primary",
                        },
                      }
                    : {
                        bgcolor: "background.default",
                        color: "text.primary",
                        marginTop: "0.5rem",
                        "&:hover": {
                          bgcolor: "background.default",
                          color: "text.primary",
                        },
                      }
                }
              >
                {theme == "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
