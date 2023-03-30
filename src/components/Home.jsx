import { useState } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const Home = () => {
  const [books, setBooks] = useState([]);

  return (
    <>
      <BookList books={books} />
      <BookForm setBooks={setBooks} />
    </>
  );
};

export default Home;
