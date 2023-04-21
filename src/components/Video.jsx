import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const DetailsSection = ({ product }) => {
  // const [product, setProduct] = useState({})

  return (
    <>
      {product && <div className=" mt-10 bg-white border-gray-200 border pa-10 rounded">
        <div className=" border-r border-gray-200">
          <div className="p-4">
            <p className="text-gray-700 text-md font-semibold mb-2">
              Video
            </p>
            <div className="flex justify-center">
            <div className=" w-2/3 h-80 ">
                <video controls className="w-full h-full">
                    <source src={product.video} type="" />
                    This format is not supported by your browser    
                    </video>                
              </div>
              
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};
function mapStateToProps(state) {
  return {
    product: state.product,
  };
}

export default connect(mapStateToProps)(DetailsSection);
