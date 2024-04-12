import React, { useState } from 'react'
import { Input } from 'antd';
// import 'antd/dist/antd.css';
import Logo from "/src/assets/react.svg"
import './Navbar.css'
import { Link } from 'react-router-dom';
import { BiCartAdd, BiUser } from 'react-icons/bi';
import {useSelector} from "react-redux"

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const { Search } = Input;
  const [activeNav, setActiveNav] = useState("Home")
  const [isOpen, setIsOpen] = useState(false)




  const navItems = [
    { name: "Home", url: "/", icon: "" },
    { name: "Shop", url: "/shop", icon: "" },
    { name: "Mens", url: "/men's", icon: "" },
    { name: "Womens", url: "/women's ", icon: "" },
    { name: "Jewelery", url: "/jewelery", icon: "" },
    { name: "Electronics", url: "/electronics", icon: "" },
  ];


  const handleNavItemClick = (navItem) => {
    setActiveNav(navItem.name);
  };

  return (
    <div>
      <nav className="bg-gray-300 shadow-lg text-black w-full">
        <div className="max-w-7xl mx-auto ">
          <div className="flex items-center justify-between h-14 mx-4 gap-3">
            <div className=" flex items-center justify-between gap-1">
              <img src={Logo} alt="" width={30} height={50} />
              <span className="text-black font-bold">BigDeal</span>
            </div>
            <div className=" md:flex items-center sm:ms-8">
              <Search
                placeholder="Search Products...."
                allowClear
                size="medium"
              />
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-2 ">
                {navItems.map((navItem, index) => (
                  <Link to={navItem.url}
                    onClick={() => handleNavItemClick(navItem)}
                    key={index}
                    className={` ${activeNav === navItem.name
                      ? "border-b-[2px] rounded-lg border-red-500 text-red-500"
                      : "hover:text-red-500 hover:border-b-[2px] border-red-500 "
                      } cursor-pointer px-[8px] py-[2px]  font-semibold text-[14px]`}
                  >
                    {navItem.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className='flex items-center justify-between gap-2 mx-2 '>
            <button className="addcart  cursor-pointer text-blue-400 hover:text-blue-500">
              <Link to="/cart" className='flex'>
                <BiCartAdd size={25}/>
              <span className=' relative rounded-full bg-red-500 px-[5px] font-semibold bottom-3 right-2'>{cartItems.length}</span>
              </Link>
            </button>
            <button className="user cursor-pointer text-blue-400 hover:text-blue-500">
              <Link to="/login">
                <BiUser size={25}/>
              </Link>
            </button>
            </div>
                
          <div className="-mr-2 flex md:hidden mx-3">
            <button onClick={() => setIsOpen(!isOpen)} className="text-red-400 hover:text-red-500 focus:outline-none focus:text-red-500 ">
              <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((navItem, index) => (
                <Link to={navItem.url}
                  key={index}
                  onClick={() => handleNavItemClick(navItem)}
                  className={` ${activeNav === navItem.name
                    ? "  rounded-[2px] bg-gray-50 border-gray-400 text-[#132146]"
                    : "  border-gray-50"
                    } cursor-pointer px-[8px] py-[6px] flex items-center font-semibold `}
                >
                  {navItem.icon}
                  <span>{navItem.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
             
      </nav>
    </div>
  )
}

export default Navbar