import beach from 'src/assets/portfolio/beach.jpg';
import plants from 'src/assets/portfolio/plants.jpg';
import snow from 'src/assets/portfolio/snow.jpg';
import tree from 'src/assets/portfolio/tree.jpg';

type PortfolioItem = {
  imageSrc: string;
  altText: string;
  text: string;
  carouselImages: string[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    imageSrc: beach,
    altText: 'altText',
    text: 'ITEM 1',
    carouselImages: [
      'https://placekitten.com/1600/1400',
      'https://placekitten.com/1500/1500',
      'https://placekitten.com/1700/1500',
      'https://placekitten.com/1800/1600',
      'https://placekitten.com/1400/1600',
    ],
  },
  {
    imageSrc: plants,
    altText: 'altText',
    text: 'ITEM 2',
    carouselImages: [
      'https://placekitten.com/1610/1410',
      'https://placekitten.com/1510/1510',
      'https://placekitten.com/1710/1510',
      'https://placekitten.com/1810/1610',
      'https://placekitten.com/1410/1610',
    ],
  },
  {
    imageSrc: snow,
    altText: 'altText',
    text: 'ITEM 3',
    carouselImages: [
      'https://placekitten.com/1620/1420',
      'https://placekitten.com/1520/1520',
      'https://placekitten.com/1720/1520',
      'https://placekitten.com/1820/1620',
      'https://placekitten.com/1420/1620',
    ],
  },
  {
    imageSrc: tree,
    altText: 'altText',
    text: 'ITEM 3',
    carouselImages: [
      'https://placekitten.com/1630/1430',
      'https://placekitten.com/1530/1530',
      'https://placekitten.com/1730/1530',
      'https://placekitten.com/1830/1630',
      'https://placekitten.com/1430/1630',
    ],
  },
];
