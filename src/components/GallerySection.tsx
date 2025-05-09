'use client';

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export const GallerySection = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [
    {
      src: 'https://images.unsplash.com/photo-1588410670460-cdab54625253?ixlib=rb-4.1.0&auto=format&fit=crop&w=1200&q=80',
      title: 'First Smile 😊',
    },
    {
      src: 'https://images.unsplash.com/photo-1510154221590-ff63e90a136f?ixlib=rb-4.1.0&auto=format&fit=crop&w=1200&q=80',
      title: 'Tiny Toes 👣',
    },
    {
      src: 'https://images.unsplash.com/photo-1587116215900-bb2bba7c7cff?ixlib=rb-4.1.0&auto=format&fit=crop&w=1200&q=80',
      title: 'Sweet Dreams 😴',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-lightblue">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16 font-comic">Our Little Superhero 🦸‍♂️</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 transform hover:-rotate-2 cursor-pointer"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={slide.src}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white font-comic">{slide.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg transition duration-300 shadow-lg hover:shadow-xl inline-flex items-center">
            <i className="fas fa-heart mr-2"></i> See More Photos
          </button>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </section>
  );
};

