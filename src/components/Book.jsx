import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <li>
    <h2>{ book.title }</h2>
    <p>{ book.author }</p>
    <button type="button">Remove</button>
  </li>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
