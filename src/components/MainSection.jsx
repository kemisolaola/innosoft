import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setProduct } from "../redux/action";
import { Link } from "react-router-dom";

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
      <div className="flex justify-end">
        <Link to="/product/edit">
          <button className="bg-primary rounded text-white px-3 py-2 mt-3">
            {" "}
            Edit
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-3 mt-5 bg-white border-gray-200 border pa-10 rounded">
        <div className="relative col-span-2 border-r border-gray-200">
          <p className="absolute top-0 left-0 bg-primary px-2 py-1 text-white">
            {product.name}
          </p>
          <img src={product.picture} alt="" className="h-60" />
          <div className="p-4 mt-6">
            <p className="text-gray-700 text-md font-semibold mb-2">
              {product.type ? product.type.name : ""}
            </p>
            <p className="text-sm text-gray-500 font-normal ">
              {product.description}
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <div className=" border-r border-gray-200">
            <div className="p-4">
              <p className="text-gray-700 text-md font-semibold mb-2">
                Offered By
              </p>
              <div className="text-gray-500 text-sm ">
                <img src={product.company.logo} alt="logo" className="w-1/3" />
                <p className="mt-4">
                  {product.company.address.street}{" "}
                  {product.company.address.house}
                </p>
                <p>
                  {product.company.address.zipCode}{" "}
                  {product.company.address.country.name}
                </p>
              </div>
            </div>
          </div>
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
