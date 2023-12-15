import { useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from 'src/components/Contact';
import { Bars4Icon } from '@heroicons/react/20/solid';

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="sticky top-0 bg-white z-50">
      <nav className="flex items-center justify-between xl:py-8 px-3.5 py-4">
        <Link to="/" className="md:text-4xl text-2xl font-light hover:text-amber-900 font-ysabeau mr-2">
          Rachel Whitener
        </Link>
        <div className="text-xl xl:hidden" onClick={() => setIsNavExpanded(!isNavExpanded)}>
          <Bars4Icon className="h-6 w-6" />
        </div>

        {isNavExpanded && (
          <div className="fixed inset-0 z-40 xl:hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gray-100 bg-opacity-80" />
            <div className="relative z-50 flex flex-col items-center justify-center space-y-6 text-2xl text-gray-700">
              <Link to="/" onClick={() => setIsNavExpanded(false)} className="hover:text-amber-900">
                Home
              </Link>
              <Link to="/portfolio" onClick={() => setIsNavExpanded(false)} className="hover:text-amber-900">
                Portfolio
              </Link>
              <Link to="/resume" onClick={() => setIsNavExpanded(false)} className="hover:text-amber-900">
                Resume
              </Link>
              <div className="hover:text-amber-900">
                <Contact text="Contact" />
              </div>
            </div>
          </div>
        )}

        <div className="hidden xl:flex space-x-4 text-2xl text-gray-700 py-2">
          <Link to="/" className="hover:text-amber-900">
            Home
          </Link>
          <Link to="/portfolio" className="hover:text-amber-900">
            Portfolio
          </Link>
          <Link to="/resume" className="hover:text-amber-900">
            Resume
          </Link>
          <div className="hover:text-amber-900">
            <Contact text="Contact" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
