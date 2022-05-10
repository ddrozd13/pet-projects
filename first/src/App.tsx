import React, { FC } from 'react';
import FormLogin from './components/Forms/FormLogin';
import FormRegister from './components/Forms/FormRegister';
import Main from './components/Main/Main';
import { Routes, Route } from 'react-router-dom';
import './firebase';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<FormLogin />} />
      <Route path="/register" element={<FormRegister />} />
    </Routes>
  );
}

export default App;
