import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { CarouselItem, Variant } from 'src/components/Portfolio/PortfolioData';
import Loading from 'src/components/Loading/Loading';

type ItemCarouselProps = {
  items: CarouselItem[];
  variant: Variant;
  onClose: () => void;
};

type VideoDimensions = {
  width: number;
  height: number;
};

const ItemCarousel = ({ items, variant, onClose }: ItemCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [nextIndex, setNextIndex] = useState<number>(0);
  const [extraVerticalSpace, setExtraVerticalSpace] = useState<number>(50);
  const [videoDimensions, setVideoDimensions] = useState<VideoDimensions>({ width: 0, height: 0 });
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const margin = 12;

  const changeItem = (newIndex: number) => {
    setNextIndex(newIndex);
    if (variant === 'images') {
      const image = new Image();
      image.src = items[newIndex].item;
      image.onload = () => {
        setCurrentIndex(newIndex);
      };
    } else {
      setCurrentIndex(newIndex);
    }
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    changeItem(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    changeItem(newIndex);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      goToPrevious();
      setShowLoading(true);
    } else if (event.key === 'ArrowRight') {
      goToNext();
      setShowLoading(true);
    } else if (event.key === 'Escape') {
      onClose();
      setShowLoading(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, items.length]);

  const updateDimensions = () => {
    const screenWidth = window.innerWidth;
    if (variant === 'images') {
      const newExtraVerticalSpace = screenWidth < 1280 ? 150 : 50;
      setExtraVerticalSpace(newExtraVerticalSpace);
    } else {
      const videoWidth = screenWidth - (screenWidth < 1280 ? 100 : 500);
      const aspectRatio = 16 / 9;
      const videoHeight = videoWidth / aspectRatio;
      setVideoDimensions({ width: videoWidth, height: videoHeight });
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const hideLoading = () => {
    setShowLoading(false);
  };

  return (
    <div className="font-sans fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="relative mx-4 my-4 flex flex-col items-center overflow-hidden w-full" onClick={onClose}>
        <div className="flex flex-col items-center h-full" onClick={(e) => e.stopPropagation()}>
          <div className="mx-14 my-2 shadow-lg">
            <div className="flex justify-center bg-black bg-opacity-60">
              {variant === 'images' ? (
                <div className="relative xl:min-h-96 xl:min-w-96">
                  {showLoading && <Loading />}
                  <img
                    key={nextIndex}
                    src={items[currentIndex].item}
                    alt={`Slide ${currentIndex + 1}`}
                    style={{
                      maxHeight: `calc(100vh - ${extraVerticalSpace}px - ${margin * 2}px)`,
                      maxWidth: `calc(100vw - ${margin * 2}px)`,
                    }}
                    onLoad={() => {
                      hideLoading();
                    }}
                  />
                </div>
              ) : (
                <div className="relative xl:min-h-96 xl:min-w-96">
                  {showLoading && <Loading />}
                  <iframe
                    width={videoDimensions.width}
                    height={videoDimensions.height}
                    src={`https://www.youtube.com/embed/${items[currentIndex].item}`}
                    title={items[currentIndex].title}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    onLoad={() => {
                      hideLoading();
                    }}
                  ></iframe>
                </div>
              )}
            </div>
            <p className="font-garamond w-full mt-2 xl:p-2 p-4 bg-white text-center text-gray-700">{items[currentIndex].title}</p>
          </div>
        </div>
        <div
          className="flex items-center justify-center rounded-full focus:outline-none opacity-80 z-10 text-white"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 xl:w-11 xl:h-11 w-8 h-8 rounded-full hover:bg-gray-500"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 xl:w-11 xl:h-11 w-8 h-8 rounded-full hover:bg-gray-500"
          >
            <ChevronRightIcon />
          </button>
          <button onClick={onClose} className="fixed top-4 right-4 bg-red-400 xl:w-10 xl:h-10 w-7 h-7 rounded-full hover:bg-red-500">
            <XMarkIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCarousel;
