import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no hash anchor, reset instantly to the top
    if (!hash) {
      const rootHtml = document.documentElement;
      const originalScrollBehavior = rootHtml.style.scrollBehavior;
      rootHtml.style.scrollBehavior = 'auto';

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior,
      });

      rootHtml.style.scrollBehavior = originalScrollBehavior;

      // Move focus to page main heading if available
      const h1 = document.querySelector('h1, h2');
      if (h1 instanceof HTMLElement) {
        h1.focus({ preventScroll: true });
      }
    } else {
      // If navigating to home with a hash anchor, scroll to that section with offset
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return null;
};
