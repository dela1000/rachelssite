import { useState } from 'react';
import ImageCarousel from 'src/components/ImageCarousel';
import { CarouselImage, portfolioItems } from './PortfolioImages';

const Portfolio = () => {
  const [selectedImages, setSelectedImages] = useState<CarouselImage[]>([]);
  const [carouselOpen, setCarouselOpen] = useState(false);

  const handleItemClick = (itemImages: CarouselImage[]) => {
    setSelectedImages(itemImages);
    setCarouselOpen(true);
  };

  const handleCloseCarousel = () => {
    setCarouselOpen(false);
    setSelectedImages([]);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {carouselOpen && <ImageCarousel images={selectedImages} onClose={handleCloseCarousel} />}

      {portfolioItems.map((item) => (
        <div key={item.text} className="group relative m-1 w-1/2 xl:w-1/3" onClick={() => handleItemClick(item.carouselImages)}>
          <div className="flex aspect-square w-full justify-center overflow-hidden xl:h-screen">
            <img src={item.imageSrc} alt={item.altText} className="h-full w-full object-cover xl:w-auto drop-shadow-md" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition">
            <p className="text-white xl:text-black text-3xl lg:text-4xl font-bold text-center group-hover:text-white drop-shadow-md transition">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
