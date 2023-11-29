import { Route, Routes, useLocation } from 'react-router-dom';

import { About, Backend, Frontend, Home, } from '../pages';
import { AnimatePresence } from 'framer-motion';


export const ReactRouter = () => {
  
  const location = useLocation();

  return(
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/about" element={<About />} />
      </Routes>
   </AnimatePresence>
    
  )
}

