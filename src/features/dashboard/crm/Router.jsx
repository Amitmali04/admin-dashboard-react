import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Crm from './presenter/Index';


function Main(){
  return (
    <Routes>
      <Route path='/' element={<Crm />} />
    </Routes>
  )
}

export default Main
