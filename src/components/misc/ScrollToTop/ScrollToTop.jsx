import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { object } from 'prop-types';

export const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 0);
  }, [location]);

  return children || null;
};

ScrollToTop.propTypes = {
  children: object,
};
