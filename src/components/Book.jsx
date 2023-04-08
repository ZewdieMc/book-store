import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, deleteBook } from '../redux/books/bookSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span>{book.category}</span>
      <h2>{ book.title }</h2>
      <p>{ book.author }</p>
      <div className="book-actions-container">
        <button type="button">Comments</button>
        <button
          type="button"
          onClick={
          () => dispatch(deleteBook(book.item_id))
            .then(() => dispatch(removeBook(book.item_id)))
          }
        >
          Remove
        </button>
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
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
