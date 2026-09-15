import { useState, useEffect } from 'react';

/**
 * Tracks which section is currently visible in the viewport using IntersectionObserver.
 * @param {string[]} sectionIds - Array of section element IDs to observe (e.g. ['home', 'services', 'about', 'contact'])
 * @param {object} options - IntersectionObserver options
 * @returns {string} The ID of the currently active (most visible) section
 */
export function useActiveSection(sectionIds, options = {}) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const observerOptions = {
      root: null,
      // Offset so detection triggers when section is around middle of viewport
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
      ...options,
    };

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      }
    }, observerOptions);

    // Observe each section element
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    elements.forEach((el) => observer.observe(el));

    // Fallback for the very top of the page
    const handleScroll = () => {
      if (window.scrollY < 10 && sectionIds.length > 0) {
        setActiveSection(sectionIds[0]);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Check initially in case the page loads at the very top
    handleScroll();

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, options]);

  return activeSection;
}
