import React, { useEffect, useState } from 'react'
import { BiCart } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../Redux/cartSlice';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { selectProductByCatagory } from '../../Redux/productsSlice';

function Shop() {
  const { productCategory } = useParams();
  const dispatch = useDispatch();
  let product = useSelector(state => selectProductByCatagory(state, productCategory)); 


 
 
  return (
   
    <>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-4 my-8 mx-4" >
        {
          product.map((items, index) => {
            return (
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={items.id}>
                  <Link to="/product" className='flex justify-center'>
                    <img className="p-8 rounded-t-lg w-48 h-48" src={items.image} alt={items.title} />
                  </Link>
                  <div className="px-5 pb-5">
                    <a href="">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{items.title.length > 23 ? (items.title).substr(0, 23) + "..." : (items.title)}</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <FaStar className="text-yellow-300" />
                        <FaStar className="text-yellow-300" />
                        <FaStar className="text-yellow-300" />
                        <FaStar className="text-yellow-300" />
                        <FaRegStar />
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-900 dark:text-white">{items.price}$</span>
                      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => dispatch(addToCart(items))}>Add to cart</button>
                    </div>
                  </div>
                </div>

            )
          })
        }
    </div>
    </>
   
  )
}

export default Shop