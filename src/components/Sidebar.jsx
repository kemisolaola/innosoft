import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const Sidebar = ({ product }) => {
  return (
    <nav className="pl-40 py-5">
        <div className='flex items-center'>
        {product && <><img src={product ? product.user.profilePicture : ''} alt="" className='w-11' /><div className='pl-4 text-gray-700'>
          <p className="font-medium text-sm"> {product.user.firstName} {product.user.lastName}</p>
          <p className="font-normal text-xs  "> {product.company.name}</p>
          {/* <small className="font-normal text-xs  ">{product.name}</small> */}
        </div></>}
        </div>
        <ul className='mt-5'>
          
        <li className="text-gray-700 text-sm"><Link to='/'>Main</Link></li>
        <li className="text-gray-700 text-sm mt-5"><Link to='/product'>Product</Link></li>
        </ul>
    </nav>
  )
}
function mapStateToProps(state) {
  return {
    product: state.product,
  };
}
export default connect(mapStateToProps)(Sidebar);
