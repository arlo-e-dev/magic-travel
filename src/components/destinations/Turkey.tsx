import { Link } from 'react-router-dom';

function Turkey() {
  return (
    <div className="destinations">
      <div className="container">
        <Link to="/destinations" className="btn secondary" style={{ marginBottom: '2rem' }}>&larr; Back to Destinations</Link>
        <div className="destination-detail">
          <div className="placeholder-image" style={{ height: '400px', margin: '0 auto 2rem', maxWidth: '800px' }}>Turkey</div>
          
          <div className="destination-content">
            <h2>Turkey Cultural Adventure</h2>
            
            <div className="destination-highlights">
              <div className="highlight-card">
                <h3>Discover Turkey</h3>
                <p>Turkey bridges Europe and Asia, offering a rich tapestry of history, culture, and natural beauty. Our women-only group will explore this fascinating country while building lasting friendships and unforgettable memories.</p>
              </div>
              
              <div className="highlight-card">
                <h3>Experience Highlights</h3>
                <ul>
                  <li>7 nights in boutique hotels</li>
                  <li>Guided tours of historic Istanbul</li>
                  <li>Cappadocia hot air balloon ride</li>
                  <li>Traditional Turkish cooking class</li>
                  <li>Luxury spa experience in Cappadocia</li>
                </ul>
              </div>
              
              <div className="highlight-card">
                <h3>Accommodation</h3>
                <p>We'll stay in carefully selected boutique hotels that blend traditional Turkish hospitality with modern comfort. In Cappadocia, we'll experience a unique cave hotel carved into ancient rock formations.</p>
              </div>
            </div>
            
            <div className="itinerary-section">
              <h3>Sample Itinerary</h3>
              <div className="itinerary-day">
                <h4>Day 1-2: Istanbul Exploration</h4>
                <p>Arrival in Istanbul, welcome dinner, and orientation. Visit Hagia Sophia, Blue Mosque, and Grand Bazaar. Bosphorus dinner cruise.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 3-4: Travel to Cappadocia</h4>
                <p>Domestic flight to Cappadocia. Hot air balloon ride at sunrise. Explore underground cities and rock-cut churches. Traditional pottery workshop.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 5-6: Cappadocia Adventures</h4>
                <p>Horseback riding through rose valleys, ATV excursions, and wine tasting at local vineyards. Group spa day with traditional Turkish bath.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 7: Return & Departure</h4>
                <p>Flight back to Istanbul. Final group lunch and farewell. Departure transfers to airport.</p>
              </div>
            </div>
            
            <div className="call-to-action">
              <h3>Discover Turkey with Us</h3>
              <p>Join our Turkey Cultural Adventure for an immersive journey through one of the world's most fascinating countries.</p>
              <Link to="/trips/turkey" className="btn primary">View Trip Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Turkey;