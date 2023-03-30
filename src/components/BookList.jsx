import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ books }) => (
  <ul>
    {books.map((book) => (
      <Book key={book.id} />
    ))}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default BookList;
