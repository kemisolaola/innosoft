import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
const Navbar = () => {
  return (
    <nav className="bg-primary py-5 grid grid-cols-3 items-center">
      <div className="pl-40 py-5 col-span-1">
        <img src={logo} alt="" className="w-40 " />
      </div >
      <input type="text" placeholder="Enter interests, keyword, company name, etc." className="col-span-1 px-2 bg-gray-50 rounded basis-1/2 h-10" />
      <ul className="col-span-1 pr-20 flex items-center basis-1/4 ml-10 justify-end">
        <li className="ml-4 text-gray-50 flex items-center">
        <Link to='/'><p>Main</p></Link>
        </li>
        <li className="ml-4 text-gray-50 flex items-center">
        <Link to='/product'><p>Products</p></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
