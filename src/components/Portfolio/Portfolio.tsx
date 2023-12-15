import { useState } from 'react';
import ItemCarousel from 'src/components/ItemCarousel';
import { PortfolioItem, portfolioItems, CarouselItem, Variant } from './PortfolioData';

import PortfolioItemContainer from './PortfolioItemContainer';

const Portfolio = () => {
  const [selectedItems, setSelectedItems] = useState<CarouselItem[]>([]);
  const [carouselOpen, setCarouselOpen] = useState<boolean>(false);
  const [typeSelected, setSelectedType] = useState<Variant>('images');

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItems(item.carouselItems);
    setSelectedType(item.variant);
    setCarouselOpen(true);
  };

  const handleCloseCarousels = () => {
    setCarouselOpen(false);
    setSelectedItems([]);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {carouselOpen && <ItemCarousel items={selectedItems} variant={typeSelected} onClose={handleCloseCarousels} />}

      {portfolioItems.map((item) => (
        <PortfolioItemContainer key={item.text} item={item} onClick={handleItemClick} />
      ))}
    </div>
  );
};

export default Portfolio;
