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



function App() {
  const [data, setData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

    
  useEffect(() => {
  
    const apiUrl = 'https://fakestoreapi.com/products';
    const fetchDataByAllCategories = async () => {
        try {
            
            const response = await axios.get(apiUrl);
          setData(response.data)
            
           
        } catch (error) {
            // Handle errors
            console.error('Error fetching data:', error);
          }
      } 
      fetchDataByAllCategories();
    }, []);


    useEffect(() => {
      if (selectedCategory === '') {
        setFilteredProducts(data);
      } else {
        const filtered = data.filter(data => data.category === selectedCategory);
        setFilteredProducts(filtered);
      }
    }, [selectedCategory, data]);
   
  return (
    <> 
    <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route path="/" element={<Home Products={data} />}/>
      <Route path="/shop" element={<Shop title="All Categories" products={filteredProducts} setSelectedCategory={setSelectedCategory} />} />
      <Route path="/men's" element={<Shop title="men's clothing" products={filteredProducts} setSelectedCategory={setSelectedCategory} />} />
      <Route path="/women's" element={<Shop title="women's clothing" products={filteredProducts} setSelectedCategory={setSelectedCategory} /> } />
      <Route path="/jewelery" element={<Shop title="jewelery" products={filteredProducts} setSelectedCategory={setSelectedCategory} />} />
      <Route path="/electronics" element={<Shop title="electronics" products={filteredProducts} setSelectedCategory={setSelectedCategory} />}/> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/signup" element={<SignUp />} /> 
      <Route path="/cart" element={<Cart />} /> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
