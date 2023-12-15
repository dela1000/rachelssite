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
import crArtWasManMag from 'src/assets/portfolio/examples/longform/CleanRoboticsArticle-WasteManagementMagazine.png';
import crArtWasManMag2 from 'src/assets/portfolio/examples/longform/CleanRoboticsArticle-WasteManagementMagazine2.png';
import crArtWasManMag3 from 'src/assets/portfolio/examples/longform/CleanRoboticsArticle-WasteManagementMagazine3.png';
import seoBlogPost from 'src/assets/portfolio/examples/longform/SEOBlogPost.png';
import seoBlogPost2 from 'src/assets/portfolio/examples/longform/SEOBlogPost2.png';
import seoBlogPost3 from 'src/assets/portfolio/examples/longform/SEOBlogPost3.png';

export type CarouselItem = {
  item: string;
  title: string;
};

export type PortfolioObj = {
  imageSrc: string;
  text: string;
  type: string;
  carouselItems: CarouselItem[];
};

export const portfolioItems: PortfolioObj[] = [
  {
    imageSrc: beach,
    text: 'WEB COPY',
    type: 'images',
    carouselItems: [
      { item: crSusCerWC, title: 'CleanRobotics - Sustainability Certifications Web Copy' },
      { item: crTraFedLandPag, title: 'CleanRobotics - TrashBot for Fed Facilities Landing Page' },
      { item: crTraAirLandPag, title: 'CleanRobotics - TrashBot for Airports Landing Page' },
      { item: crTraAirLandPag2, title: 'CleanRobotics - TrashBot for Airports Landing Page 2' },
      { item: crTraAirLandPag3, title: 'CleanRobotics - TrashBot for Airports Landing Page 3' },
    ],
  },
  {
    imageSrc: plants,
    text: 'SHORT FORM CONTENT',
    type: 'images',
    carouselItems: [
      { item: crWhiPapProPost, title: 'CR White Paper Promo Post' },
      { item: crSocMedPost, title: 'CR Social Media Post' },
      { item: crPortAuthCaSt, title: 'CleanRobotics Port Authority Case Study' },
      { item: crPITAirDepPresReNewswire, title: 'CleanRobotics PIT Airport Deployment Press Release PR Newswire' },
    ],
  },
  {
    imageSrc: snow,
    text: 'LONG FORM CONTENT',
    type: 'images',
    carouselItems: [
      { item: crArtWasManMag, title: 'CleanRobotics Article - Waste Management Magazine' },
      { item: crArtWasManMag2, title: 'CleanRobotics Article - Waste Management Magazine 2' },
      { item: crArtWasManMag3, title: 'CleanRobotics Article - Waste Management Magazine 3' },
      { item: seoBlogPost, title: 'SEO Blog Post' },
      { item: seoBlogPost2, title: 'SEO Blog Post 2' },
      { item: seoBlogPost3, title: 'SEO Blog Post 3' },
    ],
  },
  {
    imageSrc: tree,
    text: 'VIDEOS',
    type: 'videos',
    carouselItems: [
      {
        item: 'https://www.youtube.com/embed/mJeiYM4HrOE?si=kclrTEDRApEo8ub_',
        title: 'TrashBot Takes Flight: Improving Waste Management at Airports',
      },
      {
        item: 'https://www.youtube.com/embed/xiY5W8JIsKo?si=QJbNds2GChJYo-uS',
        title: "Let's Face It: Recycling Is Confusing, But TrashBot Is Here to Help",
      },
    ],
  },
];
