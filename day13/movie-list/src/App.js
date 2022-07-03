import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import MoviesPage from './components/MoviesPage';
import AddMoviePage from './components/AddMoviePage';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<MoviesPage />} />
          <Route path='/add-movie' element= {<AddMoviePage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

