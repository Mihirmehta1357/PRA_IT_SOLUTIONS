import { useEffect } from 'react';

/**
 * Custom hook to activate smooth intersection-observer scroll reveals
 * with move-in and move-out transitions across web components.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      document
        .querySelectorAll(
          '.reveal-on-scroll, .reveal-slide-left, .reveal-slide-right, .reveal-scale'
        )
        .forEach((el) => {
          el.classList.add('is-revealed');
        });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Move-in transition
            entry.target.classList.add('is-revealed');
          } else {
            // Move-out transition when scrolled well outside of viewport
            // Only remove if it exited significantly to avoid flickering at the edge
            const rect = entry.boundingClientRect;
            if (rect.top > window.innerHeight || rect.bottom < 0) {
              entry.target.classList.remove('is-revealed');
            }
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    const selector =
      '.reveal-on-scroll, .reveal-slide-left, .reveal-slide-right, .reveal-scale, .reveal-card';
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}
