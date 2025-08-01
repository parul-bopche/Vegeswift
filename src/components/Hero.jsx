import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image and Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://media.istockphoto.com/id/1373228449/photo/shot-of-freshly-picked-produce-in-a-crate-a-farmers-market.webp?a=1&b=1&s=612x612&w=0&k=20&c=r7wwANohVL9cjlOpOXZYuW6UpA4-zhOc5hmU_TzDdd0=')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white p-8">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wide drop-shadow-lg">
          Fresh, Healthy, and Delivered to Your Doorstep
        </h1>
        <p className="mt-4 text-lg md:text-xl font-medium max-w-2xl mx-auto drop-shadow">
          Explore our wide range of fresh vegetables and fruits. Order now and get them delivered to your home.
        </p>
        <Link 
          to="/products" 
          className="mt-8 inline-block bg-green-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl group relative overflow-hidden"
        >
          <span className="relative z-10">Order Now</span>
          <span className="absolute inset-0 bg-white opacity-20 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;