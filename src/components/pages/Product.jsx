import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductById } from '../../Redux/productsSlice';
import { addToCart } from '../../Redux/cartSlice';

function Product() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector(state => selectProductById(state, productId));
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={product.id}>
                  <Link to={`/products/${product.id}`} className='flex justify-center'>
                    <img className="p-8 rounded-t-lg w-48 h-48" src={product.image} alt={product.title} />
                  </Link>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title.length > 23 ? (product.title).substr(0, 23) + "..." : (product.title)}</h5>
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
                      <span className="text-xl font-bold text-gray-900 dark:text-white">{product.price}$</span>
                      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => dispatch(addToCart(product))}>Add to cart</button>
                    </div>
                  </div>
                </div>
  );
};


export default Product