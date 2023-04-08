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
    <div className="form-container">
      <div className="form-title font-normal">ADD NEW BOOK</div>
      <form onSubmit={handleSubmit}>
        <input className="inp-title font-normal" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title" />
        <input className="inp-author font-normal" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Book author" />
        <button className="add-btn font-normal" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookForm;
