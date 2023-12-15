import linkedin from 'src/assets/linkedin-icon.png';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="sticky bottom-0 pt-4 pb-2 px-4 bg-white">
      <div className="flex items-end justify-between">
        <div className="w-8 h-8 pr-2">
          <a href="https://www.linkedin.com/in/rachel-whitener/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
        <div className="pb-1.5 lg:text-sm text-xs">{year} - Rachel Whitener. All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
