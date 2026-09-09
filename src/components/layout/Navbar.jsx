
import { useState, useEffect, useCallback } from 'react';
import { useTheme } from '../../hooks/useTheme';
import styles from '../../assets/styles/Navbar.module.css';

/* ─── Inline SVG Icons ─── */

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/* ─── Navigation Data ─── */

const NAV_ITEMS = [
  { label: 'Home',     href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
];

/* ─── Navbar Component ─── */

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && mobileOpen) setMobileOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [mobileOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = useCallback((href) => {
    setActiveLink(href);
    setMobileOpen(false);
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Main navigation">

        {/* Logo */}
        <a href="#home" className={styles.logo} onClick={() => setActiveLink('#home')}>
          Pro<span className={styles.logoAccent}>Serv</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className={styles.navLinks}>

import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-[#0B0F19] border-b border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <nav className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="#home" 
          className="font-normal text-2xl leading-8 tracking-[1px] text-[#10152E] dark:text-white flex items-center"
          style={{ fontFamily: '"Playfair Display", serif' }}
          onClick={() => handleLinkClick('#home')}
        >
          Pro<span className="text-[#CDBB88]">Serv</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">

          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}

                className={`${styles.navLink} ${activeLink === href ? styles.active : ''}`}
                onClick={() => handleNavClick(href)}

                className={`font-light text-lg leading-7 tracking-[1px] transition-colors px-2 py-1 ${
                  activeLink === href 
                    ? 'text-[#CDBB88]' 
                    : 'text-[#10152E] dark:text-gray-300 hover:text-[#CDBB88]'
                }`}
                style={{ fontFamily: '"Playfair Display", serif' }}
                onClick={() => handleLinkClick(href)}

              >
                {label}
              </a>
            </li>
          ))}
        </ul>


        {/* Right Actions: Theme Toggle + Hamburger */}
        <div className={styles.navActions}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
          >
            <MenuIcon />

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


      {/* Mobile Overlay */}
      <div
        className={`${styles.overlay} ${mobileOpen ? styles.visible : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <aside
        id="mobile-drawer"
        className={`${styles.drawer} ${mobileOpen ? styles.open : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className={styles.drawerHeader}>
          <a href="#home" className={styles.logo} onClick={() => handleNavClick('#home')}>
            Pro<span className={styles.logoAccent}>Serv</span>
          </a>
          <button
            className={styles.drawerClose}
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        <nav className={styles.drawerNav} aria-label="Mobile navigation links">

      {/* Mobile & Tablet Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col px-6 py-4 gap-2 bg-white dark:bg-[#0B0F19] border-t border-gray-200 dark:border-gray-800 transition-colors duration-200 absolute w-full shadow-lg">

          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={href}
              href={href}

              className={`${styles.drawerLink} ${activeLink === href ? styles.active : ''}`}
              onClick={() => handleNavClick(href)}

              className={`block font-light text-lg leading-7 tracking-[1px] transition-colors py-3 px-4 rounded-md ${
                activeLink === href 
                  ? 'text-[#CDBB88] bg-gray-50 dark:bg-gray-800/50' 
                  : 'text-[#10152E] dark:text-gray-300 hover:text-[#CDBB88] hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
              style={{ fontFamily: '"Playfair Display", serif' }}
              onClick={() => handleLinkClick(href)}

            >
              {label}
            </a>
          ))}

        </nav>

        <div className={styles.drawerActions}>
          <button
            className={styles.drawerThemeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </aside>
    </header>
  );
}

        </div>
      )}
    </header>
  );
}

