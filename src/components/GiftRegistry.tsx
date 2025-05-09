import React from 'react';
import Image from 'next/image';

export const GiftRegistry: React.FC = () => {
  return (
    <section id="registry" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16 font-comic">
          Gift Registry 🎁
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-pink-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 transform hover:-rotate-1">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=80"
                alt="Stuffed animals"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
              <div className="absolute top-4 right-4 bg-yellow-300 text-white px-3 py-1 rounded-full text-sm font-bold font-comic shadow-md">
                NEW
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-2xl text-gray-800 mb-3 font-comic">Cuddly Friends</h3>
              <p className="text-gray-600 text-lg mb-5">Soft plush toys for our little one to snuggle with</p>
              <a href="#" className="text-babyblue font-bold text-lg hover:text-blue-700 flex items-center">
                <i className="fas fa-gift mr-2"></i> View Item
              </a>
            </div>
          </div>

          <div className="bg-blue-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 transform hover:rotate-1">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507915135761-41a0a222c709?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=80"
                alt="Baby clothes"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
              <div className="absolute top-4 right-4 bg-pink-400 text-white px-3 py-1 rounded-full text-sm font-bold font-comic shadow-md">
                POPULAR
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-2xl text-gray-800 mb-3 font-comic">Adorable Outfits</h3>
              <p className="text-gray-600 text-lg mb-5">Cute clothes for our stylish little man</p>
              <a href="#" className="text-babyblue font-bold text-lg hover:text-blue-700 flex items-center">
                <i className="fas fa-gift mr-2"></i> View Item
              </a>
            </div>
          </div>

          <div className="bg-green-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 transform hover:-rotate-1">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=80"
                alt="Baby books"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
              <div className="absolute top-4 right-4 bg-mint text-white px-3 py-1 rounded-full text-sm font-bold font-comic shadow-md">
                ESSENTIAL
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-2xl text-gray-800 mb-3 font-comic">Storytime Books</h3>
              <p className="text-gray-600 text-lg mb-5">Bedtime stories for sweet dreams</p>
              <a href="#" className="text-babyblue font-bold text-lg hover:text-blue-700 flex items-center">
                <i className="fas fa-gift mr-2"></i> View Item
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

