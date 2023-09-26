import { Route, Routes } from 'react-router-dom';

import { About, Backend, Frontend, Home } from '../pages';

export const ReactRouter = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/frontend" element={<Frontend />} />
      <Route path="/backend" element={<Backend />} />
    </Routes>
  )
}
