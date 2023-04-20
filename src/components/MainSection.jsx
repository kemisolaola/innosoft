import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setProduct } from "../redux/action";

const MainSection = ({ product, setProduct }) => {
  // const [product, setProduct] = useState({})
  const fetchInfo = async () => {
    const res = await fetch("https://api-test.innoloft.com/product/6781/");
    const response = await res.json();
    setProduct(response);
    console.log(response);
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="grid grid-cols-3 mt-10 bg-white border-gray-200 border pa-10 rounded">
        <div className="relative col-span-2 border-r border-gray-200">
          <p className="absolute top-0 left-0 bg-primary px-2 py-1 text-white">
            {product.name}
          </p>
          <img src={product.picture} alt="" className="h-60" />
          <div className="px-4">
            <p className="text-gray-700 text-md font-semibold mb-2">
              {product.type ? product.type.name : ""}
            </p>
            <p className="text-sm text-gray-500 font-normal ">
              {product.description}
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <img src={product.picture} alt="" />
        </div>
      </div>
    </>
  );
};
function mapStateToProps(state) {
    return {
      product: state.product,
    };
  }
  const mapDispatchToProps = {
    setProduct,
  };
  

  export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
