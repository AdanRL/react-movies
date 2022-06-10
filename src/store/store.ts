import { configureStore } from "@reduxjs/toolkit";

import trackedMovies from './slices/movieTrack/slice'
export const store = configureStore({
  reducer: {
    trackedMovies
  }
});
