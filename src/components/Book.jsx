import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook, deleteBook } from '../redux/books/bookSlice';

const Book = ({ book }) => {
  const { percent, setPercent } = useState(0);
  const dispatch = useDispatch();

  const handleProgress = () => {
    setPercent(percent + 2);
  };

  const handleRemoveBook = (book) => {
    dispatch(deleteBook(book.item_id))
      .then(() => dispatch(removeBook(book.item_id)));
  };

  return (
    <li>
      <div className="book-detail">
        <span>{book.category}</span>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <div className="book-actions-container">
          <button type="button">Comments</button>
          <button type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <CircularProgressbar value={percent} text={`${percent}%`} />
        <div className="text-peogress">
          <span className="Percent-Complete">
            {`${percent}%`}

          </span>
          <span className="Complete-text">Completed</span>
        </div>
      </div>
      <div className="book-chapter">
        <span>Current Chapter</span>
        <h2>Chapter 17</h2>
        <button onClick={handleProgress} type="button">Update Progress</button>
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
