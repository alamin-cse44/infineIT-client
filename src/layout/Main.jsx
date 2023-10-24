import React from 'react'
import Home from '../components/home/Home'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/home/header/Navbar'

const Main = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
    </div>
  )
}

export default Main
