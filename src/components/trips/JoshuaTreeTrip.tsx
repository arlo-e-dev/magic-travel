import { Link } from 'react-router-dom';

function JoshuaTreeTrip() {
  return (
    <div className="trips">
      <div className="container">
        <Link to="/trips" className="btn secondary" style={{ marginBottom: '2rem' }}>&larr; Back to All Trips</Link>
        <div className="trip-detail">
          <div className="placeholder-image" style={{ height: '400px', margin: '0 auto 2rem', maxWidth: '800px' }}>Joshua Tree Desert Retreat</div>
          
          <div className="trip-content">
            <h2>Joshua Tree Desert Retreat</h2>
            <div className="trip-meta" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
              <span className="dates">August 15-19, 2026</span>
              <span className="price">From $1,599 per person</span>
            </div>
            
            <div className="trip-highlights">
              <div className="highlight-card">
                <h3>Retreat Overview</h3>
                <p>Find your center and reconnect with nature in the stunning desert landscape of Joshua Tree National Park. Our 4-night women-only retreat focuses on mindfulness, personal reflection, and building meaningful connections in one of America's most unique natural environments.</p>
              </div>
              
              <div className="highlight-card">
                <h3>What's Included</h3>
                <ul>
                  <li>4 nights in luxury desert accommodations</li>
                  <li>Daily yoga and meditation sessions</li>
                  <li>Guided hikes in Joshua Tree National Park</li>
                  <li>Stargazing session with an astronomer</li>
                  <li>Wellness spa treatments</li>
                  <li>All breakfasts and 3 group dinners</li>
                  <li>Transportation throughout the retreat</li>
                  <li>Local guide and trip curator support</li>
                </ul>
              </div>
              
              <div className="highlight-card">
                <h3>What to Bring</h3>
                <ul>
                  <li>Comfortable clothing for yoga and hiking</li>
                  <li>Layers for cool desert evenings</li>
                  <li>Hiking boots and sun protection</li>
                  <li>Water bottle and hat</li>
                  <li>Journal and writing materials</li>
                  <li>Your sense of wonder and adventure!</li>
                </ul>
              </div>
            </div>
            
            <div className="itinerary-section">
              <h3>Detailed Itinerary</h3>
              <div className="itinerary-day">
                <h4>Day 1: Arrival & Grounding (August 15)</h4>
                <p>Arrive at Palm Springs International Airport. Meet and greet with our local guide. Private transfer to our eco-luxury desert resort. Welcome refreshments and orientation session. Settle into our beautiful accommodations. Sunset meditation and dinner under the stars.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 2: Exploration & Connection (August 16)</h4>
                <p>Morning yoga session on the resort's outdoor platform. Breakfast at the resort. Guided hike through Joshua Tree National Park to Skull Rock and Natural Bridge. Picnic lunch with scenic desert views. Afternoon free time for spa treatments or personal reflection. Evening stargazing session with an astronomer.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 3: Adventure & Wellness (August 17)</h4>
                <p>Early morning meditation and breakfast. Visit to Keys View for panoramic desert vistas. Options for rock climbing, art workshop, or nature photography. Afternoon wellness treatments at the resort spa. Sound healing session in the evening.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 4: Integration & Farewell (August 18)</h4>
                <p>Morning yoga and group reflection circle. Breakfast at the resort. Final guided nature walk to Hidden Valley. Closing ceremony and intention sharing. Farewell dinner with local organic cuisine.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 5: Departure (August 19)</h4>
                <p>Final morning meditation and breakfast. Time for last-minute relaxation or journaling. Check-out and private transfer to Palm Springs International Airport for departure flights.</p>
              </div>
            </div>
            
            <div className="call-to-action">
              <h3>Find Your Center in the Desert</h3>
              <p>Join our Joshua Tree Desert Retreat for a transformative journey of self-discovery in one of nature's most inspiring landscapes.</p>
              <div className="cta-buttons" style={{ justifyContent: 'center' }}>
                <Link to="/contact" className="btn primary">Contact Us to Book</Link>
                <Link to="/destinations/joshua-tree" className="btn secondary">Learn More About Joshua Tree</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoshuaTreeTrip;