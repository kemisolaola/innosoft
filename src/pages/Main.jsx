import  Navbar  from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Main = () => {
  return (
    <>
    <Navbar/>
    <div className='bg-gray-50 grid grid-cols-3 h-screen'>
    <div className='col-span-1'>
      <Sidebar/>
    </div>
    <div className='col-span-2'>
      <p>dsvnjk;cb</p>
    </div>
    </div>
    </>
  )
}

export default Main