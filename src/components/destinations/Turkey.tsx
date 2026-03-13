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
                <p>Turkey bridges Europe and Asia, offering a rich tapestry of history, culture, and natural beauty. Curated by Yuliya specifically for our women-only group, this journey will create lasting friendships and unforgettable memories in one of the world's most fascinating countries.</p>
              </div>
              
              <div className="highlight-card">
                <h3>Experience Highlights</h3>
                <ul>
                  <li>7 nights in hand-selected boutique hotels</li>
                  <li>Expert-guided tours of historic Istanbul</li>
                  <li>Mesmerizing Cappadocia hot air balloon ride at sunrise</li>
                  <li>Authentic Turkish cooking class with a local family</li>
                  <li>Luxury spa experience in traditional Cappadocia settings</li>
                </ul>
              </div>
              
              <div className="highlight-card">
                <h3>Accommodation</h3>
                <p>We'll stay in hand-selected boutique hotels that blend traditional Turkish hospitality with modern comfort, chosen by Yuliya for their exceptional quality and authentic character. In Cappadocia, we'll experience a unique cave hotel carved into ancient rock formations, offering an unforgettable and truly magical stay.</p>
              </div>
            </div>
            
            <div className="itinerary-section">
              <h3>Sample Itinerary</h3>
              <div className="itinerary-day">
                <h4>Day 1-2: Istanbul Exploration</h4>
                <p>Arrival in Istanbul where you'll be warmly welcomed by Yuliya and your travel sisters. Enjoy a welcome dinner and orientation session. Explore iconic landmarks including Hagia Sophia, the Blue Mosque, and the Grand Bazaar. Conclude with a memorable Bosphorus dinner cruise.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 3-4: Travel to Cappadocia</h4>
                <p>Domestic flight to the mesmerizing region of Cappadocia. Begin your adventure with a breathtaking hot air balloon ride at sunrise. Explore ancient underground cities and rock-cut churches with expert guides. Participate in a traditional pottery workshop to connect with local artisans.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 5-6: Cappadocia Adventures</h4>
                <p>Embark on horseback riding through stunning rose valleys, exhilarating ATV excursions, and wine tasting at family-owned local vineyards. Enjoy a rejuvenating group spa day featuring a traditional Turkish bath experience in authentic Cappadocian settings.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 7: Return & Departure</h4>
                <p>Flight back to Istanbul. Share a final group lunch and heartfelt farewell with your travel sisters. We'll provide seamless departure transfers to the airport, ensuring a smooth end to your unforgettable journey.</p>
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