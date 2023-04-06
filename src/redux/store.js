import { configureStore } from '@reduxjs/toolkit';
import bookReduer from './books/bookSlice';

const store = configureStore({
  reducer: {
    books: bookReduer,
  },
});

export default store;
