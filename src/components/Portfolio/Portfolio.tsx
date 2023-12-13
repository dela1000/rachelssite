import { useState } from 'react';
import ImageCarousel from 'src/components/ImageCarousel';
import { portfolioItems } from './PortfolioImages';

const Portfolio = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [carouselOpen, setCarouselOpen] = useState(false);

  const handleItemClick = (itemImages: string[]) => {
    setSelectedImages(itemImages);
    setCarouselOpen(true);
  };

  const handleCloseCarousel = () => {
    setCarouselOpen(false);
  };

  return (
    <div className="flex flex-wrap justify-center items-center p-4">
      {carouselOpen && <ImageCarousel images={selectedImages} onClose={handleCloseCarousel} />}

      {portfolioItems.map((item, index) => (
        <div key={index} className="group relative m-3 md:w-1/2 lg:w-1/3" onClick={() => handleItemClick(item.carouselImages)}>
          <div className="md:flex md:h-screen">
            <img src={item.imageSrc} alt={item.altText} className="object-cover drop-shadow-md" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300">
            <p className="text-white md:text-black text-4xl font-bold group-hover:text-gray-200 transition duration-200">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
