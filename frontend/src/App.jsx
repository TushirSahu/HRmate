import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Test from "./pages/Test";

function App() {
  return (
    <div className='App dark:bg-[#121212] '>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
