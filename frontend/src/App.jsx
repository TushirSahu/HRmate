import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import AddDetails from "./pages/AddDetails";
import Test from "./pages/Test";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <div className='App dark:bg-[#121212] '>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/add-details' element={<AddDetails />} />
        <Route path='/test' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
