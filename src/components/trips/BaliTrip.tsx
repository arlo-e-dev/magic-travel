import { Link } from 'react-router-dom';

function BaliTrip() {
  return (
    <div className="trips">
      <div className="container">
        <Link to="/trips" className="btn secondary" style={{ marginBottom: '2rem' }}>&larr; Back to All Trips</Link>
        <div className="trip-detail">
          <div className="placeholder-image" style={{ height: '400px', margin: '0 auto 2rem', maxWidth: '800px' }}>Bali Women's Retreat</div>
          
          <div className="trip-content">
            <h2>Bali Women's Retreat</h2>
            <div className="trip-meta" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
              <span className="dates">May 15-22, 2026</span>
              <span className="price">From $1,899 per person</span>
            </div>
            
            <div className="trip-highlights">
              <div className="highlight-card">
                <h3>Retreat Overview</h3>
                <p>Experience the magic of Bali with our 7-night women-only retreat designed for transformation, connection, and rejuvenation. This carefully curated journey combines spiritual practices, cultural immersion, and wellness activities in one of the world's most beautiful destinations.</p>
              </div>
              
              <div className="highlight-card">
                <h3>What's Included</h3>
                <ul>
                  <li>7 nights luxury accommodation in Ubud</li>
                  <li>Daily yoga and meditation sessions</li>
                  <li>All breakfasts and 4 group dinners</li>
                  <li>Cultural workshops and temple visits</li>
                  <li>Spa treatments and wellness activities</li>
                  <li>Transportation throughout the retreat</li>
                  <li>Local guide and trip curator support</li>
                </ul>
              </div>
              
              <div className="highlight-card">
                <h3>What to Bring</h3>
                <ul>
                  <li>Comfortable clothing for yoga and activities</li>
                  <li>Swimwear and sun protection</li>
                  <li>Light layers for varying temperatures</li>
                  <li>Journal and writing materials</li>
                  <li>Electrical adapters for Bali</li>
                  <li>A sense of adventure and openness!</li>
                </ul>
              </div>
            </div>
            
            <div className="itinerary-section">
              <h3>Detailed Itinerary</h3>
              <div className="itinerary-day">
                <h4>Day 1: Arrival & Welcome (May 15)</h4>
                <p>Arrive at Ngurah Rai International Airport. Meet and greet with our local guide. Private transfer to our boutique resort in Ubud. Welcome refreshments and orientation session. Settle into our beautiful accommodation. Welcome dinner with traditional Balinese cuisine.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 2: Settling In (May 16)</h4>
                <p>Morning yoga session on the resort's yoga pavilion. Breakfast at the resort. Free time for spa treatments or exploring the local area. Afternoon group visit to a local market and artisan village. Group dinner at a traditional warung (local restaurant).</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 3: Cultural Immersion (May 17)</h4>
                <p>Early morning meditation session. Breakfast at the resort. Visit to Tirta Empul Temple for a traditional water purification ceremony. Lunch at a local restaurant. Afternoon Balinese cooking class with a local family. Evening free time.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 4: Adventure & Wellness (May 18)</h4>
                <p>Morning yoga session. Breakfast at the resort. Guided hike through rice terraces to a local village. Picnic lunch with scenic views. Afternoon traditional Balinese massage at the resort spa. Evening group discussion circle.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 5: Sacred Sites (May 19)</h4>
                <p>Morning meditation and breakfast. Full-day excursion to Uluwatu Temple and Kecak fire dance performance. Lunch at a cliffside restaurant with ocean views. Sunset photos and group activities. Return to the resort for dinner.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 6: Reflection & Integration (May 20)</h4>
                <p>Morning yoga and meditation session. Breakfast at the resort. Free time for personal reflection, spa treatments, or optional activities. Afternoon group sharing circle and intention setting. Farewell dinner with traditional Balinese dance performance.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 7: Departure (May 21)</h4>
                <p>Final morning yoga session and breakfast. Time for last-minute shopping or relaxation. Check-out and private transfer to Ngurah Rai International Airport for departure flights.</p>
              </div>
            </div>
            
            <div className="call-to-action">
              <h3>Ready for Transformation?</h3>
              <p>Join our Bali Women's Retreat for an unforgettable journey of self-discovery, cultural immersion, and sisterhood.</p>
              <div className="cta-buttons" style={{ justifyContent: 'center' }}>
                <Link to="/contact" className="btn primary">Contact Us to Book</Link>
                <Link to="/destinations/bali" className="btn secondary">Learn More About Bali</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BaliTrip;