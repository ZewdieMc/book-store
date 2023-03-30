import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <li>
    <h2>{ title }</h2>
    <p>{ author }</p>
  </li>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
