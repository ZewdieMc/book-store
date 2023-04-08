import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook, deleteBook } from '../redux/books/bookSlice';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({ book }) => {
  const [percent, setPercent] = useState(0);
  const dispatch = useDispatch();

  const handleProgress = () => {
    setPercent(percent + 4);
  };

  const handleRemoveBook = (book) => {
    dispatch(deleteBook(book.item_id))
      .then(() => dispatch(removeBook(book.item_id)));
  };

  return (
    <li className="book">
      <div className="book-detail">
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <div className="book-actions-container">
          <button type="button">Comments</button>
          <div className="line-2" />
          <button type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
          <div className="line-2" />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <div style={{ height: 50, width: 50 }}><CircularProgressbar value={percent} /></div>
        <div className="text-peogress">
          <span className="Percent-Complete">
            {`${percent}%`}
          </span>
          <span className="Complete-text">Completed</span>
        </div>
      </div>
      <div className="line" />
      <div className="book-chapter">
        <span className="current-chapter">Current Chapter</span>
        <h2 className="current-lesson">Chapter 17</h2>
        <button className="update-progress" onClick={handleProgress} type="button">Update Progress</button>
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
