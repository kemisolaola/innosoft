import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const DetailsSection = ({ product, setProduct }) => {
  // const [product, setProduct] = useState({})

  return (
    <>
      {product && <div className="grid grid-cols-3 mt-10 bg-white border-gray-200 border pa-10 rounded">
        <div className="relative col-span-3 border-r border-gray-200">
          <div className="p-4">
            <p className="text-gray-700 text-md font-semibold mb-2">
              Offer Details
            </p>
            <div className="grid grid-cols-12">
            <div className="col-span-4">
                <p className="text-gray-500 text-sm">Technology/Category</p>
                <div className="flex mt-2">
                  {
                    product.categories.map((category) => (
                      <p className="bg-gray-200 text-gray-500 text-xs rounded-full px-3 py-1 mr-2" key={category.id}>{category.name}</p>
                    ))}
                </div>
              </div>
              <div className="col-span-8">
              <p className="text-gray-500 text-sm">Business Model</p>
                <div className="flex mt-2">
                  {
                    product.businessModels.map((model) => (
                      <p className="bg-gray-200 text-gray-500 text-xs rounded-full px-3 py-1 mr-2" key={model.id}>{model.name}</p>
                    ))}
                </div>
              </div>
              <div className="col-span-4 mt-4">
              <p className="text-gray-500 text-sm">Investment Effort / Cost</p>
                <div className="flex mt-2">
                      <p className="bg-gray-200 text-gray-500 text-xs rounded-full px-3 py-1 mr-2">{product.investmentEffort}</p>
                    
                </div>
              </div>
              <div className="col-span-8 mt-4">
              <p className="text-gray-500 text-sm">TRL</p>
                <div className="flex mt-2">
                      <p className="bg-gray-200 text-gray-500 text-xs rounded-full px-3 py-1 mr-2">{product.trl.name}</p>
                    
                </div>
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
