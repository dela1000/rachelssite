import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/20/solid';

import { useState, useEffect } from 'react';

type ImageCarouselProps = {
  images: string[];
  onClose: () => void;
};

const ImageCarousel = ({ images, onClose }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const goToPrevious = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setIsVisible(true);
    }, 200);
  };

  const goToNext = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setIsVisible(true);
    }, 200);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      goToPrevious();
    } else if (event.key === 'ArrowRight') {
      goToNext();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, images.length]);

  return (
    <div className="font-sans fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative max-w-3xl max-h-full mx-4 p-2 bg-white shadow-lg flex justify-center items-center">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={`max-w-full max-h-full transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        />
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 opacity-70 text-white w-8 h-8 flex items-center justify-center rounded-full focus:outline-none hover:bg-gray-500 transition duration-300"
        >
          <ChevronLeftIcon />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 opacity-70 text-white w-8 h-8 flex items-center justify-center rounded-full focus:outline-none hover:bg-gray-500 transition duration-300"
        >
          <ChevronRightIcon />
        </button>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-red-400 opacity-70 text-white w-7 h-7 flex items-center justify-center rounded-full focus:outline-none hover:bg-red-500 transition duration-300 text-sm"
        >
          <XMarkIcon />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
