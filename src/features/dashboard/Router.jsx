import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Analytics from './analytics/Router';
import Crm from './crm/Router';


function Main(){
  return (
    <Routes>
      <Route path='/analytics/*' element={<Analytics />} />
      <Route path='crm/*' element={<Crm />} />
    </Routes>
  )
}

export default Main
