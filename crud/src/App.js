import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


// components
import AllAgenda from './Components/AllAgenda';
import AddAgenda from './Components/AddAgenda';
import Navbar from './Components/Navbar';
import Edit from './Components/Edit';


function App() {
  return (
    <div className='position-absolute top-0 start-50 translate-middle-x bg-secondary mt-2 w-75'>
      <BrowserRouter>
        <Navbar />
        <div className='m-2'>
          <Routes>
            <Route path='/' element={<AllAgenda />} />
            <Route path='/add' element={<AddAgenda />} />
            <Route path='/edit/:id' element={<Edit />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
