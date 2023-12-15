import { useState } from 'react';
import { PortfolioItem } from './PortfolioData';
import Loading from 'src/components/Loading';

type PortfolioItemContainerType = {
  item: PortfolioItem;
  onClick: (item: PortfolioItem) => void;
};

const PortfolioItemContainer = ({ item, onClick }: PortfolioItemContainerType) => {
  const [showLoading, setShowLoading] = useState<boolean>(true);

  const hideLoading = () => {
    setShowLoading(false);
  };

  return (
    <div
      key={item.text}
      className="group relative m-2 w-1/2 xl:w-1/3 hover:scale-101 transition-transform"
      onClick={() => {
        onClick(item);
      }}
    >
      {showLoading && <Loading />}
      <div className="flex aspect-square w-full justify-center overflow-hidden xl:h-screen">
        <img
          src={item.imageSrc}
          alt={item.text}
          className="h-full w-full object-cover xl:w-auto drop-shadow-md"
          onLoad={() => {
            hideLoading();
          }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black group-hover:bg-opacity-10 xl:bg-opacity-50 bg-opacity-10 transition">
        <div className="p-4">
          <p className="text-white drop-shadow-[1px_1px_rgba(0,0,0,1)] text-3xl lg:text-4xl group-hover:drop-shadow-[1px_1px_rgba(0,0,0,1)] font-bold text-center transition">
            {item.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItemContainer;
