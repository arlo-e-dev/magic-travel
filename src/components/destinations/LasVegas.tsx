import { Link } from 'react-router-dom';

function LasVegas() {
  return (
    <div className="destinations">
      <div className="container">
        <Link to="/destinations" className="btn secondary" style={{ marginBottom: '2rem' }}>&larr; Back to Destinations</Link>
        <div className="destination-detail">
          <div className="placeholder-image" style={{ height: '400px', margin: '0 auto 2rem', maxWidth: '800px' }}>Las Vegas</div>
          
          <div className="destination-content">
            <h2>Las Vegas Girls Weekend</h2>
            
            <div className="destination-highlights">
              <div className="highlight-card">
                <h3>Beyond the Strip</h3>
                <p>Las Vegas isn't just about the famous Strip - it's a vibrant city surrounded by stunning desert landscapes and outdoor adventures. Our women-only weekend will showcase both the excitement of the city and the natural beauty of Nevada.</p>
              </div>
              
              <div className="highlight-card">
                <h3>Weekend Highlights</h3>
                <ul>
                  <li>3 nights in a luxury hotel on the Strip</li>
                  <li>Reserved tables at top restaurants</li>
                  <li>Spa day at a world-class resort</li>
                  <li>Helicopter tour over the Grand Canyon</li>
                  <li>Exclusive nightclub access</li>
                </ul>
              </div>
              
              <div className="highlight-card">
                <h3>Accommodation</h3>
                <p>We'll stay at a luxurious resort on the Las Vegas Strip with spacious suites, pool access, and stunning views. The resort will be our base for exploring the city while providing a comfortable retreat after our adventures.</p>
              </div>
            </div>
            
            <div className="itinerary-section">
              <h3>Weekend Itinerary</h3>
              <div className="itinerary-day">
                <h4>Day 1: Arrival & Welcome</h4>
                <p>Check-in and welcome cocktails at our suite. Group dinner at a renowned restaurant. Nighttime exploration of the Strip.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 2: Adventure & Luxury</h4>
                <p>Morning helicopter tour to the Grand Canyon. Afternoon spa treatment and pool relaxation. Evening show tickets and dinner.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 3: Shopping & Farewell</h4>
                <p>Luxury shopping excursion and brunch. Final group photos. Farewell dinner at an exclusive venue with optional nightclub access.</p>
              </div>
            </div>
            
            <div className="call-to-action">
              <h3>Las Vegas Awaits!</h3>
              <p>Join our exclusive Las Vegas Girls Weekend for the ultimate combination of luxury, adventure, and fun.</p>
              <Link to="/trips/vegas" className="btn primary">View Trip Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LasVegas;