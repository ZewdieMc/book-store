import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';

const NavBar = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul>
      <li>
        <Link to="/">BOOKS</Link>
      </li>
      <li>
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
    <div className="user-icon"><FaRegUserCircle className="fa-icon" /></div>
  </nav>
);

export default NavBar;
