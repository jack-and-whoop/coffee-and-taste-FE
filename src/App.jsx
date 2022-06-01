import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';

export default function App() {
  return (
    <BrowserRouter basename="/coffee-and-taste">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
}
