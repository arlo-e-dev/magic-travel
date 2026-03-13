import { Link } from 'react-router-dom';

function FloridaTrip() {
  return (
    <div className="trips">
      <div className="container">
        <Link to="/trips" className="btn secondary" style={{ marginBottom: '2rem' }}>&larr; Back to All Trips</Link>
        <div className="trip-detail">
          <div className="placeholder-image" style={{ height: '400px', margin: '0 auto 2rem', maxWidth: '800px' }}>Florida Keys Escape</div>
          
          <div className="trip-content">
            <h2>Florida Keys Escape</h2>
            <div className="trip-meta" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
              <span className="dates">September 10-16, 2026</span>
              <span className="price">From $1,999 per person</span>
            </div>
            
            <div className="trip-highlights">
              <div className="highlight-card">
                <h3>Escape Overview</h3>
                <p>Experience the laid-back charm and natural beauty of the Florida Keys with our 6-night women-only escape. From pristine beaches to turquoise waters, this carefully curated journey combines relaxation, water adventures, and authentic island experiences in a tropical paradise.</p>
              </div>
              
              <div className="highlight-card">
                <h3>What's Included</h3>
                <ul>
                  <li>6 nights oceanfront accommodations</li>
                  <li>Private boat charter to secluded beaches</li>
                  <li>Snorkeling in crystal-clear waters</li>
                  <li>Sunset sailboat dinner cruise</li>
                  <li>All breakfasts and 5 group dinners</li>
                  <li>Beach yoga and wellness activities</li>
                  <li>Transportation throughout the Keys</li>
                  <li>Local guide and trip curator support</li>
                </ul>
              </div>
              
              <div className="highlight-card">
                <h3>What to Bring</h3>
                <ul>
                  <li>Swimwear and cover-ups</li>
                  <li>Sun protection and sunglasses</li>
                  <li>Water shoes for snorkeling</li>
                  <li>Light, breathable clothing</li>
                  <li>Underwater camera or waterproof case</li>
                  <li>Your tropical state of mind!</li>
                </ul>
              </div>
            </div>
            
            <div className="itinerary-section">
              <h3>Detailed Itinerary</h3>
              <div className="itinerary-day">
                <h4>Day 1: Arrival & Island Welcome (September 10)</h4>
                <p>Arrive at Key West International Airport. Meet and greet with our local guide. Private transfer to our luxury oceanfront resort. Welcome refreshments and orientation session. Settle into our beautiful accommodations. Sunset welcome cocktail reception on the beach.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 2: Island Exploration (September 11)</h4>
                <p>Morning beach yoga session. Breakfast at the resort. Private boat charter to explore hidden cays and snorkeling spots in the Dry Tortugas. Beach picnic lunch. Optional kayaking or paddleboarding. Return to the resort for relaxation.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 3: Cultural Immersion (September 12)</h4>
                <p>Breakfast at the resort. Visit to Key West for shopping and sightseeing. Famous conch train tour with stops at historic sites. Fresh seafood lunch at a waterfront restaurant. Afternoon free time for spa treatments or exploring on your own.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 4: Water Adventures (September 13)</h4>
                <p>Morning yoga session. Breakfast at the resort. Full-day private boat charter to the Marquesas Keys with swimming, snorkeling, and wildlife viewing. BBQ lunch on a secluded sandbar. Sunset sailboat dinner cruise with champagne.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 5: Wellness & Art (September 14)</h4>
                <p>Morning beach yoga and meditation. Breakfast at the resort. Local artist workshop with a renowned Keys artist. Afternoon spa treatments and free time. Evening group dinner featuring fresh seafood and tropical cocktails.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 6: Reflection & Farewell (September 15)</h4>
                <p>Final morning yoga session and breakfast. Free time for personal reflection, shopping, or beach relaxation. Group farewell lunch with tropical cuisine. Closing circle and intention sharing.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 7: Departure (September 16)</h4>
                <p>Final breakfast at the resort. Morning check-out and private transfer to Key West International Airport for departure flights. Farewell and safe travels!</p>
              </div>
            </div>
            
            <div className="call-to-action">
              <h3>Escape to Paradise</h3>
              <p>Join our Florida Keys Escape for the perfect combination of relaxation, adventure, and sisterhood in a tropical paradise.</p>
              <div className="cta-buttons" style={{ justifyContent: 'center' }}>
                <Link to="/contact" className="btn primary">Contact Us to Book</Link>
                <Link to="/destinations/florida" className="btn secondary">Learn More About Florida</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloridaTrip;