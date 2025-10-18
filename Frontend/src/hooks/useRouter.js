import { useState, useEffect } from 'react';

export const useRouter = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    const handleNavigation = (e) => {
      setCurrentPath(e.detail.path);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('navigate', handleNavigation);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('navigate', handleNavigation);
    };
  }, []);

  return currentPath;
};