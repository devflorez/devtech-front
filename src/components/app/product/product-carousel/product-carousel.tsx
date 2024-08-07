"use client";
import React, { useState, useEffect } from "react";
import { IProductImage } from "@/interfaces/products.interface";

interface ProductCarouselProps {
  images: IProductImage[];
}

const ProductCarousel = ({ images}: ProductCarouselProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const interval = 5000;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const imageInterval = setInterval(nextImage, interval);
    return () => clearInterval(imageInterval);
  }, [interval]);

  if (!images) return null;

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="relative">
        <img
          src={images[currentImage].url}
          alt={images[currentImage].altText}
          className="w-full h-full object-cover aspect-square"
        />
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-2 py-1"
          onClick={prevImage}
        >
          Anterior
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-2 py-1"
          onClick={nextImage}
        >
          Siguiente
        </button>
      </div>
      <div className="flex gap-4 justify-center items-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.altText}
            className={`w-12 h-12 object-cover aspect-square cursor-pointer ${
              index === currentImage ? "border-2 border-gray-800" : ""
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
