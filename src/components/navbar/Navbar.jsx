import React, { useEffect, useState } from 'react'
import { Input } from 'antd';
// import 'antd/dist/antd.css';

import './Navbar.css'
import { Link } from 'react-router-dom';
import { BiCartAdd, BiUser } from 'react-icons/bi';
import { useDispatch, useSelector } from "react-redux"
import { SiShopify } from 'react-icons/si';
import { fetchProducts, selectProducts } from '../../Redux/productsSlice';

function Navbar() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  const cartItems = useSelector((state) => state.cart.items);
  const { Search } = Input;
  const [activeNav, setActiveNav] = useState("Home")
  const [isOpen, setIsOpen] = useState(false)
  const [searchData, setSearchData] = useState([]);
  // const [selectData , setSelectData] = useState("");

  const filter = (event) => {
    setSearchData(products.filter((products) => (products.title.toLowerCase().includes(event.target.value))));
    { event.target.value === "" && setSearchData([]) }
  }





  const navItems = [
    { name: "Home", url: "/", icon: "" },
    { name: "Shop", url:`/shop/all `, icon: "" },
    { name: "Mens", url: "/men's/men's clothing", icon: "" },
    { name: "Womens", url: "/women's/women's clothing ", icon: "" },
    { name: "Jewelery", url: "/jewelery/jewelery", icon: "" },
    { name: "Electronics", url: "/electronics/electronics", icon: "" },
  ];


  const handleNavItemClick = (navItem) => {
    setActiveNav(navItem.name);
  };


  // console.log(selectData)
  return (
    <div>
      <nav className="bg-gray-300 shadow-lg text-black w-full">
        <div className=" w-full max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-14 mx-4 gap-2">
              <Link to="/">
            <div className="w-full flex items-center gap-1">
              <SiShopify size={25} className='text-red-500' />
              <span className="text-blue-500 font-bold hidden sm:block">BigDeal</span>
            </div>
              </Link>
            <div className=" md:flex items-center sm:ms-8">
              <Search
                placeholder="Search Products...."
                allowClear
                size="medium"
                onChange={filter}
              />
              {
                <ul className=' absolute top-[44px] bg-gray-300 shadow-lg w-[200px] rounded-md  max-h-[300px] overflow-y-scroll '>
                  {
                    searchData.map((items) => (
                      <li className='sm:[text-16px] text-[14px] cursor-pointer hover:bg-slate-300 p-1' key={items.id} >{items.title.length > 23 ? (items.title).substr(0, 23) + "..." : (items.title)}</li>
                    ))
                  }
                </ul>
              }
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
            <div className='flex items-center justify-between gap-0 sm:gap-2 sm:mx-2 '>
              <button className="addcart  cursor-pointer text-blue-400 hover:text-blue-500">
                <Link to="/cart" className='flex'>
                  <BiCartAdd size={25} />
                  <div className='flex items-center bg-red-500 relative bottom-3 right-2 rounded-full px-2'>

                    <span className=' font-semibold  text-[12px]'>{cartItems.length}</span>
                  </div>
                </Link>
              </button>
              <button className="user cursor-pointer text-blue-400 hover:text-blue-500">
                <Link to="/login">
                  <BiUser size={25} />
                </Link>
              </button>
            </div>

            <div className="flex md:hidden ">
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