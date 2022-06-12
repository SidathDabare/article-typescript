import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';

export interface IAppProps { }


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:id' element={<DetailsPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
