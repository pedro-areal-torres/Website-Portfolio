import React, { useEffect, useState } from 'react';

import { NavDesktop } from './NavDesktop';
import { NavMobile } from './NavMobile';

export const Nav = () => {
  const [navBar, setNavBar] = useState();

  const MOBILE_WIDTH_MAX_SIZE = 600;

  // Handler to call on window resize
  function handleResize() {
    if (window.innerWidth > MOBILE_WIDTH_MAX_SIZE) {
      setNavBar(<NavDesktop />);
    } else {
      setNavBar(<NavMobile />);
    }
  }

  useEffect(() => {
    // Add event listener to resize
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <>{navBar}</>;
};
