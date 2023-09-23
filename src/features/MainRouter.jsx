
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Analytics from './dashboard/Router'
import Layout from '../components/Layout'

const MainRouter = () => {
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
        <Route path='/dashboard/*' element={<Analytics />} />
    </Routes>
    </Layout>  
    </BrowserRouter>
  )
}

export default MainRouter
