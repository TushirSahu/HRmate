import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import AddDetails from "./pages/AddDetails";
import { Dashboard } from "./pages/Dashboard";
import { JobDetails } from "./pages/JobDetails";
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <div className='App dark:bg-[#121212] '>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/add-details' element={<AddDetails />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/test' element={<Dashboard />} />
          <Route path='/job/:id' element={<JobDetails />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;
