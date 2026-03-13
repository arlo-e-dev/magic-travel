import { Link } from 'react-router-dom';

function LasVegasTrip() {
  return (
    <div className="trips">
      <div className="container">
        <Link to="/trips" className="btn secondary" style={{ marginBottom: '2rem' }}>&larr; Back to All Trips</Link>
        <div className="trip-detail">
          <div className="placeholder-image" style={{ height: '400px', margin: '0 auto 2rem', maxWidth: '800px' }}>Las Vegas Girls Weekend</div>
          
          <div className="trip-content">
            <h2>Las Vegas Girls Weekend</h2>
            <div className="trip-meta" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
              <span className="dates">July 5-8, 2026</span>
              <span className="price">From $1,299 per person</span>
            </div>
            
            <div className="trip-highlights">
              <div className="highlight-card">
                <h3>Weekend Overview</h3>
                <p>Experience the ultimate Las Vegas girls weekend with our exclusive 3-night luxury package. From thrilling adventures to pampering spa treatments, this carefully curated getaway combines the excitement of the Strip with unforgettable group experiences in a safe, supportive environment.</p>
              </div>
              
              <div className="highlight-card">
                <h3>What's Included</h3>
                <ul>
                  <li>3 nights luxury suite on the Las Vegas Strip</li>
                  <li>Welcome cocktail reception</li>
                  <li>Helicopter tour to the Grand Canyon</li>
                  <li>Spa day at a world-class resort</li>
                  <li>Reserved tables at top restaurants</li>
                  <li>Exclusive nightclub access</li>
                  <li>Private transportation throughout</li>
                  <li>Trip curator support</li>
                </ul>
              </div>
              
              <div className="highlight-card">
                <h3>What to Bring</h3>
                <ul>
                  <li>Evening attire for fine dining and nightlife</li>
                  <li>Comfortable shoes for walking the Strip</li>
                  <li>Camera for capturing memories</li>
                  <li>Sunscreen for outdoor activities</li>
                  <li>Cash for optional shopping and entertainment</li>
                  <li>Your sense of adventure and fun!</li>
                </ul>
              </div>
            </div>
            
            <div className="itinerary-section">
              <h3>Detailed Itinerary</h3>
              <div className="itinerary-day">
                <h4>Day 1: Arrival & Welcome (July 5)</h4>
                <p>Arrive at Harry Reid International Airport. Meet and greet with our trip coordinator. Private transfer to our luxury resort on the Strip. Check-in and welcome refreshments in our suite. Orientation session and group bonding activities. Welcome dinner at a renowned restaurant with a view of the Strip.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 2: Adventure & Luxury (July 6)</h4>
                <p>Breakfast in-suite or at the hotel restaurant. Morning departure for helicopter tour to the Grand Canyon with champagne toast. Picnic lunch at a scenic viewpoint. Return to Las Vegas for afternoon spa treatments at a luxury resort. Evening show tickets and dinner at a top-tier restaurant.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 3: Shopping & Celebration (July 7)</h4>
                <p>Breakfast at the hotel. Morning luxury shopping excursion with personal shoppers and champagne. Group brunch at a trendy rooftop restaurant. Afternoon free time for personal exploration or additional spa treatments. Evening begins with a special group photoshoot followed by farewell dinner at an exclusive venue.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 4: Farewell & Departure (July 8)</h4>
                <p>Final breakfast in-suite or at the hotel restaurant. Morning check-out and optional use of hotel amenities. Private transfer to Harry Reid International Airport for departure flights. Farewell and safe travels!</p>
              </div>
            </div>
            
            <div className="call-to-action">
              <h3>Las Vegas Awaits Your Group!</h3>
              <p>Join our exclusive Las Vegas Girls Weekend for the ultimate combination of luxury, adventure, and unforgettable memories with your travel sisters.</p>
              <div className="cta-buttons" style={{ justifyContent: 'center' }}>
                <Link to="/contact" className="btn primary">Contact Us to Book</Link>
                <Link to="/destinations/las-vegas" className="btn secondary">Learn More About Las Vegas</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LasVegasTrip;