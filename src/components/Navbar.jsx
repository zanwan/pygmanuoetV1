import {useState} from 'react'

import {navLinks} from '../constants'
import {menu, close} from '../assets'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center'>
      
      <div className='flex items-center focus:cursor-pointer'>
        <a href="#home">
        <h1 className='font-notoSerifTC text-2xl font-bold text-black ml-2'>楊牧全集
        </h1>
        </a>
      </div>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li 
          key={nav.id} 
          className={`font-notoSerifTC font-normal cursor-pointer text-[16px] ${
            index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-black}`}>

          <a href={`#${nav.id}`}>
            {nav.title}
          </a>
          
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle((prev) => !prev)}
            /> 

            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] sidebar`}>
              
              <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((nav, index) => (
                <li 
                key={nav.id} 
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-black}`}>

                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
                
                </li>
              ))}
              </ul> 
              
            </div>
      </div>
      
    </nav>
  )
}

export default Navbar