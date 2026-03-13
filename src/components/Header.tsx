import { Link, NavLink } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>Magic Travel</h1>
        </Link>
        <nav>
          <ul>
            <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About Yuliya</NavLink></li>
            <li><NavLink to="/destinations" className={({ isActive }) => isActive ? "active" : ""}>Destinations</NavLink></li>
            <li><NavLink to="/trips" className={({ isActive }) => isActive ? "active" : ""}>Journeys</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>Journal</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Connect</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;