import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';

export interface IAppProps { }


const  App:React.FunctionComponent<IAppProps>=(props)=> {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/detailspage:id' element={<DetailsPage />} />
   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
