import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import PersonDetails from './pages/PersonDetails/PersonDetails';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/details/:id" element={ <PersonDetails /> } />
    </Routes>
  );
}

export default App;
