
import cartReducer from '../Redux/cartSlice';
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers here if needed
  },
});

export default store;