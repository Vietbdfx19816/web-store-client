import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = props => {
  const location = useLocation(); // store url

  useEffect(() => {
    window.scrollTo(0, 0, { behavior: 'smooth' });
  }, [location]); // rerun on url change

  return <>{props.children}</>;
};

export default ScrollToTop;
