import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: false,
  isBookAdded: false,
  isBookRemoved: false,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get('http://localhost:3000/books');
  return response.data;
});

export const postBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post('http://localhost:3000/books', book);
  return response.data;
});

export const deleteBook = createAsyncThunk('books/removeBook', async (id) => {
  const response = await axios.delete(`http://localhost:3000/books/${id}`);
  return response.data;
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },

    removeBook: (state, action) => {
      const books = [...state];
      state.splice(0, state.length);
      state.push(...books.filter((book) => book.item_id !== action.payload));
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
