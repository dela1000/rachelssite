import beach from 'src/assets/portfolio/beach.jpg';
import plants from 'src/assets/portfolio/plants.jpg';
import snow from 'src/assets/portfolio/snow.jpg';
import tree from 'src/assets/portfolio/tree.jpg';

//Web Copy
import crSusCerWC from 'src/assets/portfolio/examples/webcopy/CleanRobotics-SustainabilityCertificationsWebCopy.png';
import crTraAirLandPag from 'src/assets/portfolio/examples/webcopy/CleanRobotics-TrashBotforAirportsLandingPage.png';
import crTraAirLandPag2 from 'src/assets/portfolio/examples/webcopy/CleanRobotics-TrashBotforAirportsLandingPage2.png';
import crTraAirLandPag3 from 'src/assets/portfolio/examples/webcopy/CleanRobotics-TrashBotforAirportsLandingPage3.png';
import crTraFedLandPag from 'src/assets/portfolio/examples/webcopy/CleanRobotics-TrashBotforFedFacilitiesLandingPage.png';

//Short Form
import crWhiPapProPost from 'src/assets/portfolio/examples/shortform/CRWhitePaperPromoPost.png';
import crSocMedPost from 'src/assets/portfolio/examples/shortform/CRSocialMediaPost.png';
import crPortAuthCaSt from 'src/assets/portfolio/examples/shortform/CleanRoboticsPortAuthorityCaseStudy.png';
import crPITAirDepPresReNewswire from 'src/assets/portfolio/examples/shortform/CleanRoboticsPITAirportDeploymentPressReleasePRNewswire.png';

//Long Form
import crWasAdMagArt from 'src/assets/portfolio/examples/longform/CleanRobotics-WasteAdvantageMagazineArticle2023.pdf';

export type CarouselImage = {
  image: string;
  title: string;
};

type PortfolioItem = {
  imageSrc: string;
  altText: string;
  text: string;
  carouselImages: CarouselImage[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    imageSrc: beach,
    altText: 'WEB COPY',
    text: 'WEB COPY',
    carouselImages: [
      { image: crSusCerWC, title: 'CleanRobotics - Sustainability Certifications Web Copy' },
      { image: crTraFedLandPag, title: 'CleanRobotics - TrashBot for Fed Facilities Landing Page' },
      { image: crTraAirLandPag, title: 'CleanRobotics - TrashBot for Airports Landing Page' },
      { image: crTraAirLandPag2, title: 'CleanRobotics - TrashBot for Airports Landing Page 2' },
      { image: crTraAirLandPag3, title: 'CleanRobotics - TrashBot for Airports Landing Page 3' },
    ],
  },
  {
    imageSrc: plants,
    altText: 'SHORT FORM CONTENT',
    text: 'SHORT FORM CONTENT',
    carouselImages: [
      { image: crWhiPapProPost, title: 'CR White Paper Promo Post' },
      { image: crSocMedPost, title: 'CR Social Media Post' },
      { image: crPortAuthCaSt, title: 'CleanRobotics Port Authority Case Study.png' },
      { image: crPITAirDepPresReNewswire, title: 'CleanRobotics PIT Airport Deployment Press Release PR Newswire' },
    ],
  },
  // {
  //   imageSrc: snow,
  //   altText: 'LONG FORM CONTENT',
  //   text: 'LONG FORM CONTENT',
  //   carouselImages: [
  //     { image: crWasAdMagArt, title: 'CleanRobotics - Waste Advantage Magazine Article 2023' },
  //     { image: 'https://placekitten.com/1520/1520', title: 'kitten 1' },
  //     { image: 'https://placekitten.com/1720/1520', title: 'kitten 1' },
  //     { image: 'https://placekitten.com/1820/1620', title: 'kitten 1' },
  //     { image: 'https://placekitten.com/1420/1620', title: 'kitten 1' },
  //   ],
  // },
  // {
  //   imageSrc: tree,
  //   altText: 'AD COPY',
  //   text: 'AD COPY',
  //   carouselImages: [
  //     { image: 'https://placekitten.com/1630/1430', title: 'kitten 1' },
  //     { image: 'https://placekitten.com/1530/1530', title: 'kitten 1' },
  //     { image: 'https://placekitten.com/1730/1530', title: 'kitten 1' },
  //     { image: 'https://placekitten.com/1830/1630', title: 'kitten 1' },
  //     { image: 'https://placekitten.com/1430/1630', title: 'kitten 1' },
  //   ],
  // },
];
