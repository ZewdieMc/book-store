import PropTypes from 'prop-types';
import { removeBook } from '../redux/bookSlice';
const Book = ({ book }) => (
  <li>
    <h2>{ book.title }</h2>
    <p>{ book.author }</p>
    <div className='book-actions-container'>
      <button type="button">Remove</button>
      <button type="button">Edit</button>
    </div>
  </li>
);

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
