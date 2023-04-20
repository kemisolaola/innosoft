import { Link } from "react-router-dom";
import avatar from "../img/avatar.svg";

const Sidebar = () => {
  return (
    <nav className="pl-40 py-5">
        <div className='flex items-center'>
        <img src={avatar} alt="" className='w-11'/>
        <div className='pl-4'>
            <p> Sven Pitch</p>
            <small>innosoft</small>
        </div>
        </div>
        <ul className='mt-5'>
          
        <li><Link to='/'>Main</Link></li>
        <li className='mt-3'><Link to='/product'>Product</Link></li>
        </ul>
    </nav>
  )
}

export default Sidebar