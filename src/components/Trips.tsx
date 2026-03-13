import { Link } from 'react-router-dom';
import '../App.css';

function Trips() {
  return (
    <div className="trips-refined">
      <div className="trips-hero">
        <h2>Curated Group Journeys</h2>
        <p>Exclusive experiences designed to foster connection, personal growth, and unforgettable memories with our sisterhood</p>
      </div>
      
      <div className="container">
        <div className="trip-list-refined">
          <div className="trip-item-refined">
            <div className="trip-image-refined">Bali</div>
            <div className="trip-info-refined">
              <h3>Bali Women's Retreat</h3>
              <div className="trip-meta-refined">
                <span className="dates-refined">May 15-22, 2026</span>
                <span className="price-refined">From $1,899</span>
              </div>
              <p>Transformative 7-night retreat in Bali's most beautiful locations, curated by Yuliya for Russian women</p>
              <Link to="/trips/bali" className="btn primary small">View Retreat Details</Link>
            </div>
          </div>
          
          <div className="trip-item-refined">
            <div className="trip-image-refined">Turkey</div>
            <div className="trip-info-refined">
              <h3>Turkey Cultural Adventure</h3>
              <div className="trip-meta-refined">
                <span className="dates-refined">June 10-18, 2026</span>
                <span className="price-refined">From $2,199</span>
              </div>
              <p>Immersive 8-day cultural journey through Turkey's most historic sites, thoughtfully curated by Yuliya</p>
              <Link to="/trips/turkey" className="btn primary small">View Adventure Details</Link>
            </div>
          </div>
          
          <div className="trip-item-refined">
            <div className="trip-image-refined">Vegas</div>
            <div className="trip-info-refined">
              <h3>Vegas Girls Weekend</h3>
              <div className="trip-meta-refined">
                <span className="dates-refined">July 5-8, 2026</span>
                <span className="price-refined">From $1,299</span>
              </div>
              <p>Exciting 3-day women-only retreat in Las Vegas with exclusive experiences and entertainment</p>
              <Link to="/trips/vegas" className="btn primary small">View Weekend Details</Link>
            </div>
          </div>
          
          <div className="trip-item-refined">
            <div className="trip-image-refined">Joshua Tree</div>
            <div className="trip-info-refined">
              <h3>Joshua Tree Desert Retreat</h3>
              <div className="trip-meta-refined">
                <span className="dates-refined">August 15-19, 2026</span>
                <span className="price-refined">From $1,599</span>
              </div>
              <p>Transformative 4-night desert retreat focused on wellness, stargazing, and connection with nature</p>
              <Link to="/trips/joshua-tree" className="btn primary small">View Retreat Details</Link>
            </div>
          </div>
          
          <div className="trip-item-refined">
            <div className="trip-image-refined">Florida</div>
            <div className="trip-info-refined">
              <h3>Florida Keys Escape</h3>
              <div className="trip-meta-refined">
                <span className="dates-refined">September 10-16, 2026</span>
                <span className="price-refined">From $1,999</span>
              </div>
              <p>Relaxing 6-night escape to the beautiful Florida Keys with beach time and water activities</p>
              <Link to="/trips/florida" className="btn primary small">View Escape Details</Link>
            </div>
          </div>
          
          <div className="trip-item-refined">
            <div className="trip-image-refined">Lake Tahoe</div>
            <div className="trip-info-refined">
              <h3>Lake Tahoe Mountain Adventure</h3>
              <div className="trip-meta-refined">
                <span className="dates-refined">October 8-13, 2026</span>
                <span className="price-refined">From $1,799</span>
              </div>
              <p>Adventure-filled 5-day mountain retreat in stunning Lake Tahoe with outdoor activities and wellness</p>
              <Link to="/trips/lake-tahoe" className="btn primary small">View Adventure Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trips;