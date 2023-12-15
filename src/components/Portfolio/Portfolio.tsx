import { useState } from 'react';
import ImageCarousel from 'src/components/ImageCarousel';
import { CarouselImage, CarouselVideo, portfolioImages, portfolioVideoItems } from './PortfolioData';

import PortfolioImageContainer from './PortfolioImageContainer';
import VideoCarousel from '../VideoCarousel';

const Portfolio = () => {
  const [selectedItems, setSelectedItems] = useState<CarouselImage[] | CarouselVideo[]>([]);
  const [imageCarouselOpen, setImageCarouselOpen] = useState<boolean>(false);
  const [videoCarouselOpen, setVideoCarouselOpen] = useState<boolean>(false);

  const handleItemClick = (carouselItems: CarouselImage[] | CarouselVideo[], type: string) => {
    setSelectedItems(carouselItems);
    if (type === 'images') {
      setImageCarouselOpen(true);
      setVideoCarouselOpen(false);
    } else {
      setImageCarouselOpen(false);
      setVideoCarouselOpen(true);
    }
  };

  const handleCloseCarousels = () => {
    setImageCarouselOpen(false);
    setVideoCarouselOpen(false);
    setSelectedItems([]);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {imageCarouselOpen && <ImageCarousel images={selectedItems} onClose={handleCloseCarousels} />}
      {videoCarouselOpen && <VideoCarousel videos={selectedItems} onClose={handleCloseCarousels} />}

      {portfolioImages.map((item) => (
        <PortfolioImageContainer key={item.text} item={item} type="images" onClick={handleItemClick} />
      ))}
      <PortfolioImageContainer item={portfolioVideoItems} type="videos" onClick={handleItemClick} />
    </div>
  );
};

export default Portfolio;
