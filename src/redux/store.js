import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './searchState';

export const store = configureStore({
  reducer: {
      searchState: searchReducer
  },
})