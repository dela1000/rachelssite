import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { CarouselVideo } from 'src/components/Portfolio/PortfolioData';

type VideoCarouselProps = {
  videos: CarouselVideo[];
  onClose: () => void;
};

const VideoCarousel = ({ videos, onClose }: VideoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoDimensions, setVideoDimensions] = useState({ width: 0, height: 0 });

  const updateVideoDimensions = () => {
    const screenWidth = window.innerWidth;

    const videoWidth = screenWidth - (screenWidth < 1280 ? 100 : 500);
    const aspectRatio = 16 / 9;
    const videoHeight = videoWidth / aspectRatio;
    setVideoDimensions({ width: videoWidth, height: videoHeight });
  };

  useEffect(() => {
    updateVideoDimensions();
    window.addEventListener('resize', updateVideoDimensions);

    return () => {
      window.removeEventListener('resize', updateVideoDimensions);
    };
  }, []);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? videos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === videos.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
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
  }, [currentIndex, videos.length]);

  return (
    <div className="font-sans fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="relative mx-4 my-4 flex flex-col items-center overflow-hidden">
        <div className="flex flex-col items-center w-full h-full">
          <div className="mx-14 my-2 shadow-lg">
            <div className="flex justify-center bg-black bg-opacity-60">
              <iframe
                width={videoDimensions.width}
                height={videoDimensions.height}
                src={videos[currentIndex].item}
                title={videos[currentIndex].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <p className="font-garamond w-full mt-2 xl:p-2 p-4 bg-white text-center">{videos[currentIndex].title}</p>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-full focus:outline-none opacity-70 z-10 text-white">
          <button
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-700 w-8 h-8 rounded-full hover:bg-gray-500"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-700 w-8 h-8 rounded-full hover:bg-gray-500"
          >
            <ChevronRightIcon />
          </button>

          <button onClick={onClose} className="absolute top-3 right-4 bg-red-400 w-7 h-7 rounded-full hover:bg-red-500">
            <XMarkIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
