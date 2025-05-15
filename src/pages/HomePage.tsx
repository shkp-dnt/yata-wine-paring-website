import React from 'react';
import { Link } from 'react-router-dom';
import { Wine, Utensils, Calendar } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(/images/hero-wine.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
              Discover Your Perfect Wine Pairing
            </h1>
            
            <p className="text-xl text-gray-200 mb-8">
              Expert wine recommendations tailored to your meal or occasion
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/food"
                className="bg-[#A5CD39] hover:bg-[#8DAF2D] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-center flex items-center justify-center gap-2"
              >
                <Utensils size={20} />
                Food Pairings
              </Link>
              
              <Link 
                to="/occasion"
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-center flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Occasions
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-[#A5CD39] mb-12">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#A5CD39] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Choose Your Category</h3>
              <p className="text-gray-600">
                Select between food pairings or occasions to find the perfect wine.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#A5CD39] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Select Your Option</h3>
              <p className="text-gray-600">
                Choose a specific food type or occasion from our curated selection.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#A5CD39] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Discover Wines</h3>
              <p className="text-gray-600">
                Get personalized wine recommendations with expert tasting notes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-[#A5CD39] mb-8">
            The Perfect Wine for Every Moment
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="/images/food-pairing.jpg"
                alt="Food pairings" 
                className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Food Pairings</h3>
                <p className="text-gray-200 mb-4">Find the perfect wine for your favorite dishes</p>
                <Link 
                  to="/food"
                  className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Explore Food Pairings
                </Link>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="/images/occasions.jpg"
                alt="Occasions" 
                className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Special Occasions</h3>
                <p className="text-gray-200 mb-4">Discover wines that elevate your celebrations</p>
                <Link 
                  to="/occasion"
                  className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Explore Occasions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage