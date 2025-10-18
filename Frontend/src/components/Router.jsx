import React from 'react';
import { useRouter } from '../hooks/useRouter';
import LandingPage from '../pages/user/LandingPage';
import Listing from '../pages/user/listing';
import Order from '../pages/user/order';

const Router = () => {
  const currentPath = useRouter();

  // Extract path without query parameters for routing
  const path = currentPath.split('?')[0];

  switch (path) {
    case '/':
      return <LandingPage />;
    case '/listing':
      return <Listing />;
    case '/order':
      return <Order />;
    default:
      return <LandingPage />; // Fallback to home page
  }
};

export default Router;