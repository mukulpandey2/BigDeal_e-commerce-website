import React from 'react';
import Banner from '/src/assets/HeroBanner.jpg'

const Hero = () => {
  return (
    <div className="hero-section bg-gray-900 text-white bg-[url('/src/assets/HeroBanner.jpg')] bg-cover bg-no-repeat">
      {/* Banner Image or Video */}
      <div className="hero-banner py-[100px] ps-[50px] z-10">
      <h1 className="font-bold  sm:text-[60px] text-[40px]  text-blue-600">Welcome to Our <span className='text-red-500'>BigDeal</span> Store</h1>
        <p className=" sm:mb-4 mb-2 sm:text-[22px] text-[16px] text-red-300">Discover amazing products at unbeatable prices.</p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold sm:py-2 sm:px-4 py-1 px-2  rounded-full">Shop Now</button>       
      </div>           
    </div>
  );
}

export default Hero;
