import { useState } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const Home = () => {
  const [books, setBooks] = useState([
    { id: Math.random(), title: 'The Hunger Games', author: 'Suzanne Collins' },
    { id: Math.random(), title: 'Dune', author: 'Frank Herbert' },
  ]);

  return (
    <>
      <BookList books={books} />
      <BookForm setBooks={setBooks} />
    </>
  );
};

export default Home;
