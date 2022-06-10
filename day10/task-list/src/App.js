import React, { useEffect, useState } from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';

// import the bootstrap styles from node_modules folder
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import'./App.css'

//import page components
import TasksPage from './components/tasks/TasksPage'
import RegisterPage from './components/auth/RegisterPage'
import LoginPage from './components/auth/LoginPage'
import Navbar from './components/common/Navbar'

export default function App() {

  const[user, setUser] = useState(null);
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <BrowserRouter>
    {/* anything inside BrowserRouter but outside Routes will be displayed on ALL pages */}
      <Navbar user = {user} />

      <Routes>
        <Route path ="/" element={<TasksPage />} />
        <Route path ="/register" element={<RegisterPage />} />
        <Route path ="/login" element={<LoginPage />} /> 
      </Routes>
    </BrowserRouter>
    )
}
