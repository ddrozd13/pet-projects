import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import CoinsDetails from './components/pages/CoinsDetails/CoinsDetails';
import Home from './components/pages/Home/Home';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:coin" element={<CoinsDetails />} />
    </Routes>
  );
}

export default App;
