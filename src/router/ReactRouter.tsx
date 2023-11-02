import { Route, Routes, useLocation } from 'react-router-dom';

import { About, Backend, Frontend, Home } from '../pages';
import { useEffect } from 'react';

export const ReactRouter = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/frontend" element={<Frontend />} />
      <Route path="/backend" element={<Backend />} />
      <Route path="/about" element={<About />} />
    </Routes>
    
  )
}

