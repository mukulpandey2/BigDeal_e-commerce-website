import React, { useState } from 'react'
import Hero from '../hero/Hero'
import { BiCart } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/cartSlice';


function Home({ Products }) {
  const dispatch = useDispatch();

  return (
    <>
    <div>
       <Hero />
    </div>
    <div>
      <h1 className='sm:text-[50px] text-[30px] font-bold text-center border-b-2 my-2 py-2 tex'>Tranding Products</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-4 my-8 mx-4" >
        {
          Products.map((items, index) => {
            return (
              <div className="max-w-sm w-full mx-auto" key={index}>
                <div className="bg-white hover:shadow-md shadow-sm  rounded-lg overflow-hidden p-2 flex sm:block items-center">
                  <img className="sm:w-full w-[100px] h-[100px] sm:h-48 object-fit" src={items.image} alt={items.title} />
                  <div className="p-6">
                    <h2 className="text-lg font-semibold text-gray-800">{(items.title).substr(0, 12)}</h2>
                    <p className="mt-2 text-gray-600">{(items.description).substr(0, 12)}</p>
                    <div className='flex mt-4 gap-3'>

                      <button
                        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-[10px] sm:text-[15px]"
                      >
                        Buy Now
                      </button>
                      <button
                        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold sm:py-1 sm:px-3 px-2 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => dispatch(addToCart(items))}
                      >
                        <BiCart  className='w-5 h-5'  />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default Home