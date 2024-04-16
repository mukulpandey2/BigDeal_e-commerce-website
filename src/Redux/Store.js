
import cartReducer from '../Redux/cartSlice';
import productsReducer from '../Redux/productsSlice';
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer ,
    // Add other reducers here if needed
  },
});

export default store;