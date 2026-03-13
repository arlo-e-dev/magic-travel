import { Link } from 'react-router-dom';

function Trips() {
  return (
    <div className="trips">
      <div className="container">
        <h2>Upcoming Group Trips</h2>
        <div className="trip-list-full">
          <div className="trip-card-full">
            <div className="placeholder-image-item">Bali</div>
            <div className="trip-info-full">
              <h3>Bali Women's Retreat</h3>
              <p className="dates-full">May 15-22, 2026</p>
              <p className="price-full">From $1,899 per person</p>
              <Link to="/trips/bali" className="btn primary">View Details</Link>
            </div>
          </div>
          <div className="trip-card-full">
            <div className="placeholder-image-item">Turkey</div>
            <div className="trip-info-full">
              <h3>Turkey Cultural Adventure</h3>
              <p className="dates-full">June 10-18, 2026</p>
              <p className="price-full">From $2,199 per person</p>
              <Link to="/trips/turkey" className="btn primary">View Details</Link>
            </div>
          </div>
          <div className="trip-card-full">
            <div className="placeholder-image-item">Vegas</div>
            <div className="trip-info-full">
              <h3>Vegas Girls Weekend</h3>
              <p className="dates-full">July 5-8, 2026</p>
              <p className="price-full">From $1,299 per person</p>
              <Link to="/trips/vegas" className="btn primary">View Details</Link>
            </div>
          </div>
          <div className="trip-card-full">
            <div className="placeholder-image-item">Joshua Tree</div>
            <div className="trip-info-full">
              <h3>Joshua Tree Desert Retreat</h3>
              <p className="dates-full">August 15-19, 2026</p>
              <p className="price-full">From $1,599 per person</p>
              <Link to="/trips/joshua-tree" className="btn primary">View Details</Link>
            </div>
          </div>
          <div className="trip-card-full">
            <div className="placeholder-image-item">Florida</div>
            <div className="trip-info-full">
              <h3>Florida Keys Escape</h3>
              <p className="dates-full">September 10-16, 2026</p>
              <p className="price-full">From $1,999 per person</p>
              <Link to="/trips/florida" className="btn primary">View Details</Link>
            </div>
          </div>
          <div className="trip-card-full">
            <div className="placeholder-image-item">Lake Tahoe</div>
            <div className="trip-info-full">
              <h3>Lake Tahoe Mountain Adventure</h3>
              <p className="dates-full">October 8-13, 2026</p>
              <p className="price-full">From $1,799 per person</p>
              <Link to="/trips/lake-tahoe" className="btn primary">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trips;