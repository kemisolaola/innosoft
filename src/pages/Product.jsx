import Details from '../components/Details';
import MainSection from '../components/MainSection';
import  Navbar  from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import React, { useState, useEffect } from "react";
import Video from '../components/Video';

const Product = () => {
       return (
    <div>
    <Navbar/>
    <div className='pr-20 bg-gray-50 grid grid-cols-3 h-full'>
    <div className='col-span-1'>
      <Sidebar/>
    </div>
    <div className='col-span-2'>
      <MainSection className=''/>
      <Video className=''/>
      <Details className=''/>
    </div>
    </div>
    </div>
  )
}

export default Product