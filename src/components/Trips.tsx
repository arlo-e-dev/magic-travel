import { Link } from 'react-router-dom';

function Trips() {
  return (
    <div className="trips">
      <h2>Upcoming Group Trips</h2>
      <div className="trip-list">
        <div className="trip-card">
          <div className="placeholder-image">Bali</div>
          <div className="trip-info">
            <h3>Bali Women's Retreat</h3>
            <p className="dates">May 15-22, 2026</p>
            <p className="price">From $1,899 per person</p>
            <Link to="/trips/bali" className="btn primary">View Details</Link>
          </div>
        </div>
        <div className="trip-card">
          <div className="placeholder-image">Turkey</div>
          <div className="trip-info">
            <h3>Turkey Cultural Adventure</h3>
            <p className="dates">June 10-18, 2026</p>
            <p className="price">From $2,199 per person</p>
            <Link to="/trips/turkey" className="btn primary">View Details</Link>
          </div>
        </div>
        <div className="trip-card">
          <div className="placeholder-image">Vegas</div>
          <div className="trip-info">
            <h3>Vegas Girls Weekend</h3>
            <p className="dates">July 5-8, 2026</p>
            <p className="price">From $1,299 per person</p>
            <Link to="/trips/vegas" className="btn primary">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trips;