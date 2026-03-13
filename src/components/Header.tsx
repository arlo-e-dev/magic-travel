import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>Magic Travel</h1>
        </Link>
        <nav>
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/destinations">Destinations</NavLink></li>
            <li><NavLink to="/trips">Trips</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;