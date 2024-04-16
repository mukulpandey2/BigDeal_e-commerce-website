import React, { useState ,useEffect } from 'react'
import Hero from '../hero/Hero'
import { BiCart } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts ,selectProducts } from '../../Redux/productsSlice'
import { addToCart } from '../../Redux/cartSlice';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Home() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <>
      <div>
        <Hero />
      </div>
      <div>
        <h1 className='sm:text-[50px] text-[30px] font-bold text-center border-b-2 my-2 py-2 tex'>Tranding Products</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-4 my-8 mx-4" >
          {
            products.map((items, index) => {
              return (
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={items.id}>
                  <Link to={`/products/${items.id}`} className='flex justify-center'>
                    <img className="p-8 rounded-t-lg w-48 h-48" src={items.image} alt={items.title} />
                  </Link>
                  <div className="px-5 pb-5">
                    <a href="#">
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

                // <div className="max-w-sm w-full mx-auto" key={index}>
                //   <div className="bg-white hover:shadow-md shadow-sm  rounded-lg overflow-hidden p-2 flex sm:block items-center">
                //     <img className="sm:w-full w-[100px] h-[100px] sm:h-48 object-fit" src={items.image} alt={items.title} />
                //     <div className="p-6">
                //       <h2 className="text-lg font-semibold text-gray-800">{(items.title).substr(0, 12)}</h2>
                //       <p className="mt-2 text-gray-600">{(items.description).substr(0, 12)}</p>
                //       <div className='flex mt-4 gap-3'>

                //         <button
                //           className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-[10px] sm:text-[15px]"
                //         >
                //           Buy Now
                //         </button>
                //         <button
                //           className=" bg-blue-500 hover:bg-blue-700 text-white font-bold sm:py-1 sm:px-3 px-2 rounded focus:outline-none focus:shadow-outline"
                //           onClick={() => dispatch(addToCart(items))}
                //         >
                //           <BiCart  className='w-5 h-5'  />
                //         </button>
                //       </div>
                //     </div>
                //   </div>
                // </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home