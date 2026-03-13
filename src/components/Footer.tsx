import { Link } from 'react-router-dom';
import '../App.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} Magic Travel</p>
          <p className="footer-subtext">Curated experiences for Russian women worldwide</p>
        </div>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;