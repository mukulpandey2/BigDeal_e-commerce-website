import { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
// import Hero from './components/hero/Hero'
import axios from 'axios'
import { BrowserRouter, Routes, Route, useParams  } from "react-router-dom"
import Home from './components/pages/Home'
// import ProductPage from './components/pages/ProductPage'
import Login from './components/pages/Login'
import SignUp from './components/pages/SignUp'
import Cart from './components/pages/Cart'
import Shop from './components/pages/Shop'
import Product from './components/pages/Product'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, selectProducts } from './Redux/productsSlice'
import Footer from './components/footer/Footer'



function App() {

  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // const [filteredProducts, setFilteredProducts] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState('');

  //   useEffect(() => {
  //     if (selectedCategory === '') {
  //       setFilteredProducts(products);
  //     } else {
  //       const filtered = products.filter(data => data.category === selectedCategory);
  //       setFilteredProducts(filtered);
  //     }
  //   }, [selectedCategory, products]);
   
  return (
    <> 
    <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products/:productId" element={<Product/>}/>
      <Route path="/shop/:productCategory" element={<Shop />} />
      <Route path="/men's/:productCategory" element={<Shop />} />
      <Route path="/women's/:productCategory" element={<Shop/> }/>
      <Route path="/jewelery/:productCategory" element={<Shop/>} />
      <Route path="/electronics/:productCategory" element={<Shop/>}/> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/signup" element={<SignUp />} /> 
      <Route path="/cart" element={<Cart />} /> 
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
