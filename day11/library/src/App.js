import React, { useEffect, useState } from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import { onAuthStateChanged } from 'firebase/auth'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { auth } from './firebase/firebase'

import'./App.css'

//import page components
import LibraryPage from './components/library/LibraryPage'
import RegisterPage from './components/auth/RegisterPage'
import LoginPage from './components/auth/LoginPage'
import Navbar from './components/common/Navbar';
import RequireAuth from './components/common/RequireAuth'
import Spinner from './components/common/Spinner'

// import{ db } from './firebase/firebase'
// console.log(db);

export default function App() {


  const [user,setUser] = useState(null);
  const [isUserSet, setIsUserSet] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsUserSet(true);
    });

    return () => {unsub();}
  }, [])

  
  return (
    <BrowserRouter>
    <Navbar user={user}/>
    {
      isUserSet ?
      <Routes>
        <Route path ="/" element={
          <RequireAuth user={user}>
            <LibraryPage />
          </RequireAuth>
        }/>
        <Route path ="/register" element={<RegisterPage />} />
        <Route path ="/login" element={<LoginPage />} /> 
      </Routes>
      :
      <div className='text-center m-4'>
        <Spinner></Spinner>
      </div>
    }
      
    </BrowserRouter>
    )
}