import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { SiShopify } from 'react-icons/si';
import { Link } from 'react-router-dom';
const Footer = () => {
    const menu = [
        { name: "Home", link: "#" },
        { name: "All Products", link: "#" },
        { name: "About us", link: "/about" },
        { name: "Contact us", link: "/contact" },
        { name: "Our Team", link: "/ourTeam" },
    ]
    return (
        <footer className="bg-gray-900 text-white pt-5 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaWhatsapp className="w-6 h-6 text-white hover:text-blue-600 cursor-pointer" />
            <FaFacebook className="w-6 h-6 text-white hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="w-6 h-6 text-white hover:text-blue-600 cursor-pointer" />
            <FaTelegram className="w-6 h-6 text-white hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="w-6 h-6 text-white hover:text-blue-600 cursor-pointer" />
          </div>
      
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 sm:py-0">
            <ul>
              {menu.map((item) => (
                <li key={item.name}>
                  <a
                    className="text-gray-400 hover:text-[#01ADEF] duration-300 text-[14px] cursor-pointer leading-6"
                    href="#"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between border-t-[1px] border-[#3e4143] px-8 py-2 gap-6">
          <div>
          <SiShopify className="w-8 h-8" />
          </div>
          <p className="sm:text-right text-center text-[14px] ps-2">
            © 2023 Appy. All rights reserved.
          </p>
        </div>
      </footer>
      
        // <footer className="bg-gray-900 text-white py-6">
        //   <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        //     <div className="text-center md:text-left mb-4 md:mb-0">
        //       <h3 className="text-lg font-bold text-blue-500">Big<span className='text-red-500'>Deal</span></h3>
        //     </div>
        //     <hr />
        //     <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
        //      <FaWhatsapp className='w-[30px] h-[25px] text-white hover:text-blue-600 cursor-pointer tra'/>
        //      <FaFacebook className='w-[30px] h-[25px] text-white hover:text-blue-600 cursor-pointer'/>
        //      <FaInstagram className='w-[30px] h-[25px] text-white hover:text-blue-600 cursor-pointer'/>
        //      <FaTelegram className='w-[30px] h-[25px] text-white hover:text-blue-600 cursor-pointer'/>
        //      <FaTwitter className='w-[30px] h-[25px] text-white hover:text-blue-600 cursor-pointer'/>
        //     </div>
        //   </div>
        //   <div>
        //     <ul className=" mx-5 my-5">
        //         {
        //             menu.map((items, index) => (
        //                 <li key={index}>
        //                     <a href="#" className="hover:text-gray-400">{items.name}</a>
        //                 </li>
        //             ))
        //         }

        //     </ul>
        //   </div>
        //   <hr />
        //   <div>

        //   </div>
        // </footer>
    );
};

export default Footer;
