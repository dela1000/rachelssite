import { useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from 'src/components/Contact';

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="sticky top-0 bg-white z-50">
      <nav className="flex items-center justify-between xl:px-5 xl:py-8 px-4 py-4">
        <Link to="/" className="text-4xl font-light hover:text-gray-500 font-ysabeau">
          Rachel Whitener
        </Link>
        <div className="text-xl xl:hidden" onClick={() => setIsNavExpanded(!isNavExpanded)}>
          ☰
        </div>

        <div className={`text-xl font-light ${isNavExpanded ? 'flex' : 'hidden'}`}>
          <div
            className="fixed inset-0 bg-gray-200 z-50 flex flex-col items-center justify-center space-y-6 xl:hidden text-2xl text-gray-700"
            onClick={() => setIsNavExpanded(false)}
          >
            <Link to="/" onClick={() => setIsNavExpanded(false)} className="hover:text-gray-500">
              Home
            </Link>
            <Link to="/portfolio" onClick={() => setIsNavExpanded(false)} className="hover:text-gray-500">
              Portfolio
            </Link>
            <div className="hover:text-gray-500">
              <Contact text="Contact" />
            </div>
          </div>
        </div>
        {/* Horizontal menu for non-mobile */}
        <div className="hidden xl:flex space-x-4 text-2xl text-gray-700 px-3 py-2">
          <Link to="/" className="hover:text-gray-500">
            Home
          </Link>
          <Link to="/portfolio" className="hover:text-gray-500">
            Portfolio
          </Link>
          <div className="hover:text-gray-500">
            <Contact text="Contact" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
