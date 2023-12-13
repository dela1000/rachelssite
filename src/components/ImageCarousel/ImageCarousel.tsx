import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { CarouselImage } from 'src/components/Portfolio/PortfolioImages';

type ImageCarouselProps = {
  images: CarouselImage[];
  onClose: () => void;
};

const ImageCarousel = ({ images, onClose }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const changeImage = (newIndex: number) => {
    setIsImageLoading(true);
    setNextIndex(newIndex);
    const image = new Image();
    image.src = images[newIndex].image;
    image.onload = () => {
      setCurrentIndex(newIndex);
      setIsImageLoading(false);
    };
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    changeImage(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    changeImage(newIndex);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      goToPrevious();
    } else if (event.key === 'ArrowRight') {
      goToNext();
    } else if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, images.length]);

  const extraVerticalSpace = 50;
  const margin = 12;

  return (
    <div className="font-sans fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative mx-4 my-4 shadow-lg flex flex-col items-center overflow-hidden">
        <div className="flex flex-col items-center w-full h-full">
          <div className="mx-14 my-2">
            <img
              key={nextIndex}
              src={images[currentIndex].image}
              alt={`Slide ${currentIndex + 1}`}
              className={`transition-opacity duration-500 ease-in-out ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
              style={{
                maxHeight: `calc(100vh - ${extraVerticalSpace}px - ${margin * 2}px)`,
                maxWidth: `calc(100vw - ${margin * 2}px)`,
              }}
              onLoad={() => setIsImageLoading(false)}
            />
            <p className="font-garamond w-full mt-2 md:p-2 p-4 bg-white text-center">{images[currentIndex].title}</p>
          </div>
        </div>

        <button
          onClick={goToPrevious}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 opacity-70 text-white w-8 h-8 flex items-center justify-center rounded-full focus:outline-none hover:bg-gray-500 transition duration-300"
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
          className="absolute top-3 right-4 z-10 bg-red-400 opacity-70 text-white w-7 h-7 flex items-center justify-center rounded-full focus:outline-none hover:bg-red-500 transition duration-300 text-sm"
        >
          <XMarkIcon />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
