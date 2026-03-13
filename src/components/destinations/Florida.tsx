import { Link } from 'react-router-dom';

function Florida() {
  return (
    <div className="destinations">
      <div className="container">
        <Link to="/destinations" className="btn secondary" style={{ marginBottom: '2rem' }}>&larr; Back to Destinations</Link>
        <div className="destination-detail">
          <div className="placeholder-image" style={{ height: '400px', margin: '0 auto 2rem', maxWidth: '800px' }}>Florida Keys</div>
          
          <div className="destination-content">
            <h2>Florida Keys Escape</h2>
            
            <div className="destination-highlights">
              <div className="highlight-card">
                <h3>Tropical Paradise</h3>
                <p>The Florida Keys offer a perfect blend of relaxation, natural beauty, and water adventures. Our women-only group will experience the laid-back island vibe while enjoying luxury accommodations and activities.</p>
              </div>
              
              <div className="highlight-card">
                <h3>Escape Highlights</h3>
                <ul>
                  <li>6 nights in oceanfront accommodations</li>
                  <li>Private boat charter to secluded beaches</li>
                  <li>Snorkeling in crystal-clear waters</li>
                  <li>Sunset sailboat dinner cruise</li>
                  <li>Beach yoga and wellness activities</li>
                </ul>
              </div>
              
              <div className="highlight-card">
                <h3>Accommodation</h3>
                <p>We'll stay at a luxury oceanfront resort with private beach access, multiple pools, and spa facilities. The resort's elegant rooms and suites provide the perfect sanctuary for our tropical escape.</p>
              </div>
            </div>
            
            <div className="itinerary-section">
              <h3>Escape Itinerary</h3>
              <div className="itinerary-day">
                <h4>Day 1-2: Arrival & Island Welcome</h4>
                <p>Arrival and check-in. Welcome lunch and resort orientation. Afternoon free time for relaxation. Sunset welcome cocktail reception.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 3-4: Water Adventures</h4>
                <p>Private boat charter to explore hidden cays and snorkeling spots. Beach picnic lunch. Optional kayaking or paddleboarding. Sunset sailboat dinner cruise.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 5: Exploration & Culture</h4>
                <p>Visit to Key West for shopping and sightseeing. Famous conch train tour. Fresh seafood lunch at a waterfront restaurant. Local artist workshop.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 6: Wellness & Farewell</h4>
                <p>Morning beach yoga session. Spa treatments and free time. Farewell dinner featuring fresh seafood and tropical cocktails.</p>
              </div>
            </div>
            
            <div className="call-to-action">
              <h3>Escape to Paradise</h3>
              <p>Join our Florida Keys Escape for the perfect combination of relaxation, adventure, and sisterhood in a tropical paradise.</p>
              <Link to="/trips/florida" className="btn primary">View Trip Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Florida;