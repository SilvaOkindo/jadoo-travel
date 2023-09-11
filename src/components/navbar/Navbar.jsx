import Logo from '../../assets/Logo.png'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
import {LiaTimesSolid} from 'react-icons/lia'



const Navbar = () => {


  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav className='flex justify-between items-center container mx-auto pt-3 font-medium text-sm relative px-3 md:px-10'>
      <img src={Logo}  className='w-20'/>
        <ul className='items-center gap-10 flex-col hidden lg:flex-row lg:flex'>
          <li><a className='text-[#212832] text-base hover:text-red-400' href="">Destinations</a></li>
          <li><a className='text-[#212832] text-base hover:text-red-400' href="">Hotels</a></li>
          <li><a className='text-[#212832] text-base hover:text-red-400' href="">Flights</a></li>
          <li><a className='text-[#212832] text-base hover:text-red-400' href="">Bookings</a></li>
          <li><a className='text-[#212832] text-base hover:text-red-400' href="">Flights</a></li>
          <li><a className='text-[#212832] text-base hover:text-red-400' href="">Login</a></li>
          <li><button className='py-1 px-4 rounded-sm border-2 border-[#212832] text-[12px]'>Sign up</button></li>
          <li className='flex items-center gap-2 cursor-pointer'>EN <MdOutlineKeyboardArrowDown /> </li>
        </ul>
        {
          toggle? <LiaTimesSolid onClick={handleToggle} className='lg:hidden' size={24}/> : <AiOutlineMenu onClick={handleToggle} className='lg:hidden' size={24}/>
        }

        {toggle && <ul className='items-center flex-col absolute top-10 right-10 lg:hidden bg-[#fafafa] p-4 text-black animate-scale-up-tr text-[12px] w-[200px]'> 
          <li><a className='' href="">Destinations</a></li>
          <li><a className='' href="">Hotels</a></li>
          <li><a className='' href="">Flights</a></li>
          <li><a className='' href="">Bookings</a></li>
          <li><a className='' href="">Flights</a></li>
          <li><a className='' href="">Login</a></li>
          <li><button className='py-1 px-4 rounded-sm border-2 border-[#212832] text-[12px] my-3'>Sign up</button></li>
          <li className='flex items-center gap-2'>EN <MdOutlineKeyboardArrowDown /> </li>
        </ul>}
    </nav>
  );
}

export default Navbar