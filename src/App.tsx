import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { MovieListPage } from './pages/MovieListPage/MovieListPage';
import { MovieDetailPage } from './pages/MovieDetailPage/MovieDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieListPage/>}/>
        <Route path="/details/:id" element={<MovieDetailPage/>}/>
      </Routes>   
    </BrowserRouter>
  );
}

export default App;
