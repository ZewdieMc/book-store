import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/bookSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <h2>{ book.title }</h2>
      <p>{ book.author }</p>
      <div className="book-actions-container">
        <button type="button" onClick={() => dispatch(removeBook(book.item_id))}>Remove</button>
        <button type="button">Edit</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
