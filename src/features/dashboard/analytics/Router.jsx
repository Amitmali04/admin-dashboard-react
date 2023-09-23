import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Analytics from './presenter/Index';


function Main(){
  return (
    <Routes>
      <Route path='/' element={<Analytics />} />
    </Routes>
  )
}

export default Main
