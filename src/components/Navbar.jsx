import logo from "../img/logo.svg";
const Navbar = () => {
  return (
    <nav className="bg-primary px-40 py-5 flex items-center">
      <div className="basis-1/4">
        <img src={logo} alt="" className="w-40 " />
      </div>
      <input type="text" placeholder="Enter interests, keyword, company name, etc." className="px-2 bg-gray-50 rounded basis-1/2 h-10" />
      <ul className="flex items-center basis-1/4 ml-10 justify-end">
        <li className="ml-4 text-gray-50 flex items-center">
          <p>Main</p>
        </li>
        <li className="ml-4 text-gray-50 flex items-center">
          <p>Products</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
