import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { MovieListPage } from './pages/MovieListPage/MovieListPage';
import { MovieDetailPage } from './pages/MovieDetailPage/MovieDetailPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path="/react-movies" element={<MovieListPage/>}/>
            <Route path="/details/:id" element={<MovieDetailPage/>}/>
          </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
