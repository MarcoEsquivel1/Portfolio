import { Route, Routes, useLocation } from 'react-router-dom';

import { About, Backend, Frontend, Home } from '../pages';

export const ReactRouter = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/frontend" element={<Frontend />} />
      <Route path="/backend" element={<Backend />} />
      <Route path="/about" element={<About />} />
    </Routes>
    
  )
}

