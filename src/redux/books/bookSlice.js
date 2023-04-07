import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appID = '0POBCeDJRoHwZc2T3ceJ';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appID}/books`;

const initialState = {
  bookList: [],
  isLoading: false,
  isBookAdded: false,
  isBookRemoved: false,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
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
      state.bookList.push(action.payload);
    },

    removeBook: (state, action) => {
      const books = [...state];
      state.bookList.splice(0, state.length);
      state.bookList.push(...books.filter((book) => book.item_id !== action.payload));
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
