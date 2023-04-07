import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, postBook } from '../redux/books/bookSlice';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const book = {
        item_id: uuidv4(),
        title,
        author,
        category: 'Fiction',
      };
      dispatch(postBook(book))
        .then(() => {
          dispatch(addBook(book));
          setTitle('');
          setAuthor('');
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="title-input"
        type="text"
        placeholder=" Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        className="author-input"
        type="text"
        placeholder="Book Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <button className="submit-btn" type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
