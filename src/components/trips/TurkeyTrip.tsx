import { Link } from 'react-router-dom';

function TurkeyTrip() {
  return (
    <div className="trips">
      <div className="container">
        <Link to="/trips" className="btn secondary" style={{ marginBottom: '2rem' }}>&larr; Back to All Trips</Link>
        <div className="trip-detail">
          <div className="placeholder-image" style={{ height: '400px', margin: '0 auto 2rem', maxWidth: '800px' }}>Turkey Cultural Adventure</div>
          
          <div className="trip-content">
            <h2>Turkey Cultural Adventure</h2>
            <div className="trip-meta" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
              <span className="dates">June 10-18, 2026</span>
              <span className="price">From $2,199 per person</span>
            </div>
            
            <div className="trip-highlights">
              <div className="highlight-card">
                <h3>Adventure Overview</h3>
                <p>Discover the rich history and vibrant culture of Turkey through our 8-night women-only cultural adventure. From the bustling markets of Istanbul to the surreal landscapes of Cappadocia, this journey offers a perfect blend of historical exploration, cultural immersion, and unforgettable experiences.</p>
              </div>
              
              <div className="highlight-card">
                <h3>What's Included</h3>
                <ul>
                  <li>8 nights in boutique hotels</li>
                  <li>All breakfasts and 6 group dinners</li>
                  <li>Domestic flights between cities</li>
                  <li>Guided tours of historic sites</li>
                  <li>Cultural workshops and cooking class</li>
                  <li>Hot air balloon ride in Cappadocia</li>
                  <li>Transportation throughout the trip</li>
                  <li>Local guide and trip curator support</li>
                </ul>
              </div>
              
              <div className="highlight-card">
                <h3>What to Bring</h3>
                <ul>
                  <li>Comfortable walking shoes for city exploration</li>
                  <li>Modest clothing for visiting religious sites</li>
                  <li>Layers for varying temperatures</li>
                  <li>Camera for capturing memories</li>
                  <li>Electrical adapters for Turkey</li>
                  <li>An open mind and curious spirit!</li>
                </ul>
              </div>
            </div>
            
            <div className="itinerary-section">
              <h3>Detailed Itinerary</h3>
              <div className="itinerary-day">
                <h4>Day 1: Arrival in Istanbul (June 10)</h4>
                <p>Arrive at Istanbul Airport. Meet and greet with our local guide. Private transfer to our boutique hotel in the historic district. Welcome refreshments and orientation session. Settle into our accommodation. Welcome dinner at a traditional Turkish restaurant.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 2: Historic Istanbul (June 11)</h4>
                <p>Breakfast at the hotel. Morning guided tour of Hagia Sophia, Blue Mosque, and Hippodrome. Lunch at a local restaurant. Afternoon visit to the Grand Bazaar and Egyptian Bazaar. Evening Bosphorus dinner cruise with live traditional music.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 3: Istanbul Culture (June 12)</h4>
                <p>Breakfast at the hotel. Morning visit to Topkapi Palace and Hagia Irene. Lunch at a traditional meyhane (tavern). Afternoon Turkish bath experience (hammam) and spa treatment. Evening free time to explore the local area or optional shopping.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 4: Travel to Cappadocia (June 13)</h4>
                <p>Breakfast at the hotel. Morning domestic flight to Kayseri, then transfer to Cappadocia. Check-in at our unique cave hotel. Lunch at a local restaurant. Afternoon exploration of Goreme Open Air Museum and pottery workshops. Sunset photo session with panoramic views.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 5: Cappadocia Adventure (June 14)</h4>
                <p>Early morning hot air balloon ride with sunrise views over the fairy chimneys. Champagne celebration after landing. Breakfast at the hotel. Afternoon ATV excursion through the Rose Valley and Love Valley. Evening traditional Turkish dinner with folk dance performance.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 6: Underground & Vineyards (June 15)</h4>
                <p>Breakfast at the hotel. Morning visit to Derinkuyu Underground City and Kaymakli Underground City. Lunch at a local restaurant. Afternoon wine tasting at a traditional Cappadocian winery. Evening relaxation at the hotel spa with traditional treatments.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 7: Return to Istanbul (June 16)</h4>
                <p>Breakfast at the hotel. Morning free time for last-minute shopping or relaxation. Check-out and transfer to Kayseri Airport for domestic flight to Istanbul. Check-in at our Istanbul hotel. Evening group dinner and cultural exchange session.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 8: Final Exploration (June 17)</h4>
                <p>Breakfast at the hotel. Morning visit to the Spice Bazaar and Galata District. Optional shopping or museum visits. Lunch at a rooftop restaurant with panoramic city views. Afternoon free time for personal exploration or spa treatments.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 9: Departure (June 18)</h4>
                <p>Final breakfast at the hotel. Morning check-out and private transfer to Istanbul Airport for departure flights. Farewell and safe travels!</p>
              </div>
            </div>
            
            <div className="call-to-action">
              <h3>Discover the Magic of Turkey</h3>
              <p>Join our Turkey Cultural Adventure for an immersive journey through one of the world's most fascinating countries, filled with history, culture, and unforgettable experiences.</p>
              <div className="cta-buttons" style={{ justifyContent: 'center' }}>
                <Link to="/contact" className="btn primary">Contact Us to Book</Link>
                <Link to="/destinations/turkey" className="btn secondary">Learn More About Turkey</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TurkeyTrip;