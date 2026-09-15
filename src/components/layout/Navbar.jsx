import { useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useActiveSection } from '../../hooks/useActiveSection';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const SECTION_IDS = ['home', 'services', 'about', 'contact'];

const NAV_ITEMS = [
  { label: 'Home', sectionId: 'home' },
  { label: 'Services', sectionId: 'services' },
  { label: 'About', sectionId: 'about' },
  { label: 'Contact', sectionId: 'contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Only run scroll-spy on the main page
  const isMainPage = location.pathname === '/';
  const activeSection = useActiveSection(isMainPage ? SECTION_IDS : []);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);

    if (location.pathname !== '/') {
      // If on a sub-page (e.g. /service/:id), navigate to main page then scroll
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-[#0B0F19] border-b border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <nav className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="font-normal text-2xl leading-8 tracking-[1px] text-[#10152E] dark:text-white flex items-center cursor-pointer bg-transparent border-none"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Pro<span className="text-[#CDBB88]">Serv</span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map(({ label, sectionId }) => (
            <li key={sectionId}>
              <button
                onClick={() => handleNavClick(sectionId)}
                className={`font-light text-lg leading-7 tracking-[1px] transition-colors px-2 py-1 bg-transparent border-none cursor-pointer ${
                  isMainPage && activeSection === sectionId
                    ? 'text-[#CDBB88]'
                    : 'text-[#10152E] dark:text-gray-300 hover:text-[#CDBB88]'
                }`}
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent text-[#10152E] dark:text-gray-200 hover:border-[#CDBB88] hover:text-[#CDBB88] transition-colors"
            onClick={toggleTheme} 
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          {/* Mobile & Tablet Menu Toggle */}
          <button 
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md border border-gray-200 dark:border-gray-700 bg-transparent text-[#10152E] dark:text-gray-200 hover:border-[#CDBB88] hover:text-[#CDBB88] transition-colors"
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile & Tablet Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col px-6 py-4 gap-2 bg-white dark:bg-[#0B0F19] border-t border-gray-200 dark:border-gray-800 transition-colors duration-200 absolute w-full shadow-lg">
          {NAV_ITEMS.map(({ label, sectionId }) => (
            <button
              key={sectionId}
              onClick={() => handleNavClick(sectionId)}
              className={`block font-light text-lg leading-7 tracking-[1px] transition-colors py-3 px-4 rounded-md text-left bg-transparent border-none cursor-pointer ${
                isMainPage && activeSection === sectionId
                  ? 'text-[#CDBB88] bg-gray-50 dark:bg-gray-800/50'
                  : 'text-[#10152E] dark:text-gray-300 hover:text-[#CDBB88] hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}