import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import PlaceDetails from './pages/PlaceDetails/PlaceDetails';

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/places/:id' element={ <PlaceDetails />} />
      <Route path='*' element={ <NotFound />} />
    </Routes>
  );
}

export default App;
