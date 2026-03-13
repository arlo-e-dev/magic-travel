import { Link } from 'react-router-dom';

function Bali() {
  return (
    <div className="destinations">
      <div className="container">
        <Link to="/destinations" className="btn secondary" style={{ marginBottom: '2rem' }}>&larr; Back to Destinations</Link>
        <div className="destination-detail">
          <div className="placeholder-image" style={{ height: '400px', margin: '0 auto 2rem', maxWidth: '800px' }}>Bali, Indonesia</div>
          
          <div className="destination-content">
            <h2>Bali Women's Retreat</h2>
            
            <div className="destination-highlights">
              <div className="highlight-card">
                <h3>Why Bali?</h3>
                <p>Bali offers the perfect blend of spiritual renewal, natural beauty, and cultural immersion. As a women-only group, we'll explore this enchanting island while supporting each other's personal growth and transformation.</p>
              </div>
              
              <div className="highlight-card">
                <h3>What to Expect</h3>
                <ul>
                  <li>7 nights in luxury accommodation</li>
                  <li>Daily yoga and meditation sessions</li>
                  <li>Cultural workshops with local artisans</li>
                  <li>Spa treatments and wellness activities</li>
                  <li>Group dinners and social experiences</li>
                </ul>
              </div>
              
              <div className="highlight-card">
                <h3>Accommodation</h3>
                <p>We'll stay at a beautiful boutique resort in Ubud, surrounded by lush rice terraces and tropical gardens. The resort features a spa, multiple pools, and yoga pavilion, providing the perfect sanctuary for our retreat.</p>
              </div>
            </div>
            
            <div className="itinerary-section">
              <h3>Sample Itinerary</h3>
              <div className="itinerary-day">
                <h4>Day 1-2: Arrival & Settling In</h4>
                <p>Welcome dinner, orientation, and relaxation at the resort. Optional spa treatments and pool time.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 3-4: Cultural Immersion</h4>
                <p>Visit local temples, traditional markets, and participate in a Balinese cooking class. Evening cultural performance.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 5-6: Adventure & Wellness</h4>
                <p>Waterfall hike, rice terrace trekking, and water sports. Wellness workshops and group massage sessions.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 7: Reflection & Departure</h4>
                <p>Final group reflection session, farewell brunch, and departure transfers.</p>
              </div>
            </div>
            
            <div className="call-to-action">
              <h3>Ready to Experience Bali?</h3>
              <p>Join our next Bali Women's Retreat for an unforgettable journey of self-discovery and sisterhood.</p>
              <Link to="/trips/bali" className="btn primary">View Trip Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bali;