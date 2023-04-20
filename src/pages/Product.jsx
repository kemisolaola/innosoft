import MainSection from '../components/MainSection';
import  Navbar  from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import React, { useState, useEffect } from "react";

const Product = () => {
       return (
    <div>
    <Navbar/>
    <div className='pr-20 bg-gray-50 grid grid-cols-3 h-screen'>
    <div className='col-span-1'>
      <Sidebar/>
    </div>
    <div className='col-span-2'>
      <MainSection className=''/>
    </div>
    </div>
    </div>
  )
}

export default Product