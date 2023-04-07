import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books.bookList);
  return (
    <ul>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </ul>
  );
};

export default BookList;
