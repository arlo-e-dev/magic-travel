import { Link } from 'react-router-dom';

function Destinations() {
  return (
    <div className="destinations">
      <div className="container">
        <h2>Our Destinations</h2>
        <div className="destination-list">
          <div className="destination-item">
            <div className="placeholder-image-item">Bali</div>
            <div className="destination-info">
              <h3>Bali, Indonesia</h3>
              <p>Relaxing beaches, vibrant culture, and spiritual retreats</p>
              <Link to="/destinations/bali" className="btn secondary small">Learn More</Link>
            </div>
          </div>
          <div className="destination-item">
            <div className="placeholder-image-item">Turkey</div>
            <div className="destination-info">
              <h3>Istanbul, Turkey</h3>
              <p>Historic landmarks, bustling markets, and rich traditions</p>
              <Link to="/destinations/turkey" className="btn secondary small">Learn More</Link>
            </div>
          </div>
          <div className="destination-item">
            <div className="placeholder-image-item">Vegas</div>
            <div className="destination-info">
              <h3>Las Vegas, USA</h3>
              <p>Entertainment, nightlife, and desert adventures</p>
              <Link to="/destinations/las-vegas" className="btn secondary small">Learn More</Link>
            </div>
          </div>
          <div className="destination-item">
            <div className="placeholder-image-item">Joshua Tree</div>
            <div className="destination-info">
              <h3>Joshua Tree, USA</h3>
              <p>Stunning desert landscapes and unique rock formations</p>
              <Link to="/destinations/joshua-tree" className="btn secondary small">Learn More</Link>
            </div>
          </div>
          <div className="destination-item">
            <div className="placeholder-image-item">Florida</div>
            <div className="destination-info">
              <h3>Miami, Florida</h3>
              <p>Beach relaxation, vibrant nightlife, and cultural experiences</p>
              <Link to="/destinations/florida" className="btn secondary small">Learn More</Link>
            </div>
          </div>
          <div className="destination-item">
            <div className="placeholder-image-item">Lake Tahoe</div>
            <div className="destination-info">
              <h3>Lake Tahoe, USA</h3>
              <p>Mountain retreats, outdoor adventures, and scenic beauty</p>
              <Link to="/destinations/lake-tahoe" className="btn secondary small">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destinations;