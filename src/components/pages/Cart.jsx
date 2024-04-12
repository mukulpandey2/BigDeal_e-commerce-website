import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../Redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className='text-center'>Your cart is empty.</p>
      ) : (
        <div>
        <ul className="divide-y divide-gray-200 mx-5 sm:mx-0">
          {cartItems.map((item, index) => (
            <li key={index} className="py-4 sm:flex justify-between items-center">
              <div className="flex items-center sm:my-0 my-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-fit rounded"
                />
                <div className="ml-4">
                  <p className="text-md font-semibold">{item.title}</p>
                  <p className="text-gray-600">{item.price} USD</p>
                </div>
              </div>
              <div className='flex items-center justify-between gap-4'>
              <button
                className="text-white font-semibold rounded  bg-blue-500 hover:bg-blue-600 px-4 py-2"
                onClick={() => handleRemove(item)}
              >
                Buy Now
              </button>
              <button
                className="text-red-600 hover:text-red-700"
                onClick={() => handleRemove(item)}
              >
                Remove
              </button>
              </div>
            </li>
          ))}
        </ul>
         <div className="mt-5 text-right">
         <p className="text-lg font-semibold">Subtotal: ${calculateSubtotal()}</p>
       </div>
       </div>
      )}
    </div>
  );
};

export default Cart