import React, { useEffect } from 'react'
import { BiCart } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/cartSlice';

function Shop({ title, products, setSelectedCategory }) {

  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedCategory(title === 'All Categories' ? '' : title.toLowerCase());
  }, [title, setSelectedCategory]);
  return (
   
    <>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-4 my-8 mx-4" >
        {
          products.map((items, index) => {
            return (
              <div className="max-w-sm w-full mx-auto" key={index}>
                <div className="bg-white hover:shadow-md shadow-sm  rounded-lg overflow-hidden p-2 flex sm:block">
                  <img className="sm:w-full w-[150px] sm:h-48 h-[150px] object-fit" src={items.image} alt={items.title} />
                  <div className="p-6">
                    <h2 className="text-lg font-semibold text-gray-800">{(items.title).substr(0, 12)}</h2>
                    <p className="mt-2 text-gray-600">{(items.description).substr(0, 12)}</p>
                    <div className='flex mt-4 gap-3'>

                      <button
                        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Buy Now
                      </button>
                      <button
                        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => dispatch(addToCart(items))}
                      >
                        <BiCart size={30} />
                      </button>
                    </div>
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