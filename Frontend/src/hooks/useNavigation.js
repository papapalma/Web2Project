import { useCallback } from 'react';

export const useNavigation = () => {
  const navigateTo = useCallback((path) => {
    // Update the URL without full page reload
    window.history.pushState({}, '', path);
    
    // Dispatch a custom event to notify components of route change
    const navigationEvent = new CustomEvent('navigate', {
      detail: { path }
    });
    window.dispatchEvent(navigationEvent);
    
    // Force page reload for now (can be replaced with proper routing later)
    window.location.href = path;
  }, []);

  const getCurrentPath = useCallback(() => {
    return window.location.pathname;
  }, []);

  const isCurrentPath = useCallback((path) => {
    return window.location.pathname === path;
  }, []);

  return {
    navigateTo,
    getCurrentPath,
    isCurrentPath
  };
};