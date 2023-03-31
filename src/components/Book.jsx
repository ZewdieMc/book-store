import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <li>
    <h2>{ title }</h2>
    <p>{ author }</p>
    <button type="button">Remove Book</button>
  </li>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
