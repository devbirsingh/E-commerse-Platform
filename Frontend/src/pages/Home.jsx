import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              The Future of <span className="text-blue-600">Intelligence</span> is Here.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Upgrade your lifestyle with our curated collection of next-gen smart gadgets. From wearable tech to automated home systems.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link to="/products" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Shop Gadgets
              </Link>
              <Link to="/wishlist" className="px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-full font-bold hover:bg-slate-50 transition-all">
                View Favorites
              </Link>
            </div>
            
            {/* Stats/Trust Badges */}
            <div className="mt-10 flex justify-center lg:justify-start gap-8 border-t border-slate-100 pt-8">
              <div>
                <span className="block text-2xl font-bold text-slate-900">15k+</span>
                <span className="text-sm text-slate-500">Happy Users</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-900">4.9/5</span>
                <span className="text-sm text-slate-500">Top Rated</span>
              </div>
            </div>
          </div>

          {/* Design/Image Element */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center">
            <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
              {/* This represents a placeholder for a high-quality product image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl rotate-6 opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=800" 
                alt="Smart Gadget" 
                className="rounded-3xl shadow-2xl relative z-20 object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;