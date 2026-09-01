import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import styles from '../../assets/styles/Navbar.module.css';

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
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* Logo */}
        <a href="#home" className={styles.logo} onClick={() => handleLinkClick('#home')}>
          Pro<span className={styles.logoAccent}>Serv</span>
        </a>

        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`${styles.navLink} ${activeLink === href ? styles.active : ''}`}
                onClick={() => handleLinkClick(href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className={styles.navActions}>
          <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.drawerNav}>
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`${styles.drawerLink} ${activeLink === href ? styles.active : ''}`}
              onClick={() => handleLinkClick(href)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}