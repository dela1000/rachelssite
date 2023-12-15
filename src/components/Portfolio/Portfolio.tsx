import { useState } from 'react';
import ItemCarousel from 'src/components/ItemCarousel';
import { PortfolioObj, portfolioItems, CarouselItem } from './PortfolioData';

import PortfolioItemContainer from './PortfolioItemContainer';

const Portfolio = () => {
  const [selectedItems, setSelectedItems] = useState<CarouselItem[]>([]);
  const [carouselOpen, setCarouselOpen] = useState<boolean>(false);
  const [typeSelected, setSelectedType] = useState<string>('');

  const handleItemClick = (item: PortfolioObj) => {
    setSelectedItems(item.carouselItems);
    setSelectedType(item.type);
    setCarouselOpen(true);
  };

  const handleCloseCarousels = () => {
    setCarouselOpen(false);
    setSelectedItems([]);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {carouselOpen && <ItemCarousel items={selectedItems} type={typeSelected} onClose={handleCloseCarousels} />}

      {portfolioItems.map((item) => (
        <PortfolioItemContainer key={item.text} item={item} onClick={handleItemClick} />
      ))}
    </div>
  );
};

export default Portfolio;
