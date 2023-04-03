import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../features/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <h2>{ book.title }</h2>
      <p>{ book.author }</p>
      <button type="button" onClick={dispatch(removeBook(1))}>Remove</button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
