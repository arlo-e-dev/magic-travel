import { Link } from 'react-router-dom';

function LakeTahoeTrip() {
  return (
    <div className="trips">
      <div className="container">
        <Link to="/trips" className="btn secondary" style={{ marginBottom: '2rem' }}>&larr; Back to All Trips</Link>
        <div className="trip-detail">
          <div className="placeholder-image" style={{ height: '400px', margin: '0 auto 2rem', maxWidth: '800px' }}>Lake Tahoe Mountain Adventure</div>
          
          <div className="trip-content">
            <h2>Lake Tahoe Mountain Adventure</h2>
            <div className="trip-meta" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
              <span className="dates">October 8-13, 2026</span>
              <span className="price">From $1,799 per person</span>
            </div>
            
            <div className="trip-highlights">
              <div className="highlight-card">
                <h3>Adventure Overview</h3>
                <p>Experience the breathtaking beauty of Lake Tahoe with our 5-night women-only mountain adventure. From pristine alpine scenery to crystal-clear waters, this carefully curated journey combines outdoor activities, wellness practices, and authentic mountain experiences in one of America's most stunning natural settings.</p>
              </div>
              
              <div className="highlight-card">
                <h3>What's Included</h3>
                <ul>
                  <li>5 nights at a luxury lakeside lodge</li>
                  <li>Guided hiking in Desolation Wilderness</li>
                  <li>Private boat tour on Lake Tahoe</li>
                  <li>All breakfasts and 4 group dinners</li>
                  <li>Morning yoga sessions with lake views</li>
                  <li>Spa day at the lodge</li>
                  <li>Transportation throughout the adventure</li>
                  <li>Local guide and trip curator support</li>
                </ul>
              </div>
              
              <div className="highlight-card">
                <h3>What to Bring</h3>
                <ul>
                  <li>Layered clothing for changing mountain weather</li>
                  <li>Comfortable hiking boots</li>
                  <li>Swimwear and sun protection</li>
                  <li>Water bottle and day pack</li>
                  <li>Camera for capturing scenic views</li>
                  <li>Your sense of adventure!</li>
                </ul>
              </div>
            </div>
            
            <div className="itinerary-section">
              <h3>Detailed Itinerary</h3>
              <div className="itinerary-day">
                <h4>Day 1: Arrival & Welcome (October 8)</h4>
                <p>Arrive at Reno-Tahoe International Airport. Meet and greet with our local guide. Private transfer to our beautiful lakeside lodge. Welcome refreshments and orientation session. Settle into our cozy accommodations. Welcome dinner with local farm-to-table cuisine.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 2: Hiking & Exploration (October 9)</h4>
                <p>Morning yoga session with panoramic lake views. Breakfast at the lodge. Guided hike in Desolation Wilderness to scenic viewpoints. Picnic lunch with breathtaking mountain vistas. Afternoon free time for relaxation or optional activities. Sunset campfire gathering.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 3: Water Adventures (October 10)</h4>
                <p>Morning meditation and breakfast. Private boat charter on Lake Tahoe with swimming and snorkeling in crystal-clear waters. BBQ lunch on a secluded beach. Kayaking or paddleboarding options. Return to the lodge for evening relaxation.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 4: Wellness & Culture (October 11)</h4>
                <p>Morning yoga session with lake and mountain views. Breakfast at the lodge. Spa day at the lodge with massage treatments and wellness activities. Afternoon visit to a local art gallery or historic site. Group dinner at a renowned local restaurant.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 5: Farewell & Reflection (October 12)</h4>
                <p>Final morning yoga session and breakfast. Guided nature walk along the lake shore or free time for personal reflection. Farewell lunch with locally sourced ingredients. Closing circle and intention sharing.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 6: Departure (October 13)</h4>
                <p>Final breakfast at the lodge. Morning check-out and private transfer to Reno-Tahoe International Airport for departure flights. Farewell and safe travels!</p>
              </div>
            </div>
            
            <div className="call-to-action">
              <h3>Adventure in the Mountains</h3>
              <p>Join our Lake Tahoe Mountain Adventure for an unforgettable combination of outdoor excitement, natural beauty, and sisterhood.</p>
              <div className="cta-buttons" style={{ justifyContent: 'center' }}>
                <Link to="/contact" className="btn primary">Contact Us to Book</Link>
                <Link to="/destinations/lake-tahoe" className="btn secondary">Learn More About Lake Tahoe</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LakeTahoeTrip;