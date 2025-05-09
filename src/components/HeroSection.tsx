'use client';

import Image from 'next/image';
import { FaImages, FaStar, FaBaby } from 'react-icons/fa';

export const HeroSection = () => {
  return (
    <section id="home" className="py-20 bg-gradient-to-r bg-blue-400">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-comic drop-shadow-lg">
            Welcome to Our <span className="text-yellow-300">Baby Boy</span> Shower!
          </h2>
          <p className="text-2xl text-white mb-8">
            We&apos;re so excited to celebrate our little superhero with you! 💙
          </p>
          <div className="flex space-x-4">
            <a
              href="#gallery"
              className="bg-white hover:bg-yellow-100 text-pink-500 px-8 py-4 rounded-full font-bold text-lg transition duration-300 shadow-lg hover:shadow-xl flex items-center"
            >
              <FaImages className="mr-2" /> View Photos
            </a>
            <a
              href="#wishes"
              className="border-4 border-white text-white hover:bg-pink-300 px-8 py-4 rounded-full font-bold text-lg transition duration-300 shadow-lg hover:shadow-xl flex items-center"
            >
              <FaStar className="mr-2" /> Leave a Wish
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl transform rotate-6">
            <Image
              src="https://images.unsplash.com/photo-1588495644868-1416d25d8b33?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80"
              alt="Baby smiling"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-0 right-0 bg-pink-500 text-white px-4 py-3 rounded-bl-xl shadow-lg font-comic">
              <FaStar className="mr-1 inline" /> Coming Soon!
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 bg-yellow-300 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
            <FaBaby className="text-3xl text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

