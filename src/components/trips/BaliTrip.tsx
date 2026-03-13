import { Link } from 'react-router-dom';
import '../../App.css';

function BaliTrip() {
  return (
    <div className="trip-detail-refined">
      <div className="detail-hero">
        <h2>Bali Women's Retreat</h2>
        <div className="detail-hero-meta">
          <span>May 15-22, 2026</span>
          <span>From $1,899 per person</span>
        </div>
        <p>Transformative 7-night journey through Bali's most beautiful locations, designed exclusively for Russian women seeking spiritual renewal and cultural immersion</p>
      </div>
      
      <div className="container">
        <Link to="/trips" className="btn secondary" style={{ marginBottom: '2rem' }}>&larr; Back to All Trips</Link>
        
        <div className="detail-content-refined">
          <div className="detail-image-refined">Bali Women's Retreat</div>
          
          <div className="detail-info-refined">
            <h3>Retreat Overview</h3>
            <p>Experience the magic of Bali with our 7-night women-only retreat, thoughtfully curated by Yuliya for transformation, connection, and rejuvenation. This intentionally designed journey combines spiritual practices, authentic cultural immersion, and wellness activities in one of the world's most beautiful destinations.</p>
            
            <div className="mission-statement">
              <p>"This retreat represents everything I believe about transformative travel. It's not just about seeing beautiful places - it's about creating space for growth, connection, and self-discovery. Bali's energy amplifies this, making it the perfect destination for our sisterhood journey."</p>
              <p className="highlight-author">— Yuliya Makhnina</p>
            </div>
            
            <h3>What's Included</h3>
            <p>Every detail of your Bali experience has been thoughtfully considered to create a seamless, transformative journey:</p>
          </div>
        </div>
        
        <div className="highlights-grid-refined">
          <div className="highlight-card-refined">
            <h4>Accommodation & Transport</h4>
            <ul>
              <li>7 nights luxury boutique resort in Ubud</li>
              <li>Private villa with tropical garden views</li>
              <li>All private transportation throughout</li>
              <li>Airport transfers included</li>
            </ul>
          </div>
          
          <div className="highlight-card-refined">
            <h4>Wellness & Activities</h4>
            <ul>
              <li>Daily yoga and meditation sessions</li>
              <li>Spa treatments and wellness workshops</li>
              <li>Cultural workshops and ceremonies</li>
              <li>Guided nature excursions</li>
            </ul>
          </div>
          
          <div className="highlight-card-refined">
            <h4>Dining & Experience</h4>
            <ul>
              <li>All breakfasts included</li>
              <li>4 intimate group dinners</li>
              <li>Authentic cooking class</li>
              <li>Cultural performances</li>
            </ul>
          </div>
          
          <div className="highlight-card-refined">
            <h4>Support & Guidance</h4>
            <ul>
              <li>Yuliya's personal support throughout</li>
              <li>Expert local guide</li>
              <li>24/7 concierge service</li>
              <li>Emergency support available</li>
            </ul>
          </div>
        </div>
        
        <div className="itinerary-section-refined">
          <h3>Detailed Itinerary</h3>
          <div className="itinerary-day-refined">
            <h4>Day 1: Arrival & Welcome (May 15)</h4>
            <p>Arrive at Ngurah Rai International Airport where you'll be warmly greeted by our local guide. Enjoy a private transfer to our hand-selected boutique resort in Ubud. Settle into our beautiful accommodation before joining your travel sisters for welcome refreshments, an orientation session, and a delicious welcome dinner featuring traditional Balinese cuisine.</p>
          </div>
          
          <div className="itinerary-day-refined">
            <h4>Day 2: Settling In (May 16)</h4>
            <p>Begin your transformation with a morning yoga session on the resort's yoga pavilion. Enjoy a nourishing breakfast at the resort before choosing between optional spa treatments or exploring the local area. In the afternoon, connect with your travel sisters during a group visit to a local market and artisan village. End the day with a group dinner at a traditional warung (local restaurant) where you'll share stories and deepen bonds.</p>
          </div>
          
          <div className="itinerary-day-refined">
            <h4>Day 3: Cultural Immersion (May 17)</h4>
            <p>Start your day with an early morning meditation session to center yourself. After breakfast at the resort, embark on a meaningful visit to Tirta Empul Temple for a traditional water purification ceremony - a sacred Balinese ritual. Enjoy lunch at a local restaurant before participating in an authentic Balinese cooking class with a local family. The evening is yours for personal reflection or quiet exploration.</p>
          </div>
          
          <div className="itinerary-day-refined">
            <h4>Day 4: Adventure & Wellness (May 18)</h4>
            <p>Begin with a morning yoga session to energize your body and mind. After breakfast, embark on a guided hike through lush rice terraces to a local village, immersing yourself in Bali's natural beauty. Enjoy a picnic lunch with scenic views before returning to the resort for a traditional Balinese massage at the spa. The evening concludes with a meaningful group discussion circle to share insights and reflections.</p>
          </div>
          
          <div className="itinerary-day-refined">
            <h4>Day 5: Sacred Sites (May 19)</h4>
            <p>Begin your day with morning meditation and breakfast. Embark on a full-day excursion to the iconic Uluwatu Temple, one of Bali's most sacred sites, followed by the mesmerizing Kecak fire dance performance. Enjoy lunch at a stunning cliffside restaurant with breathtaking ocean views. Capture unforgettable sunset photos and enjoy group activities before returning to the resort for dinner.</p>
          </div>
          
          <div className="itinerary-day-refined">
            <h4>Day 6: Reflection & Integration (May 20)</h4>
            <p>Begin your final full day with a morning yoga and meditation session to center yourself. After breakfast, enjoy free time for personal reflection, optional spa treatments, or exploring on your own. The afternoon features a meaningful group sharing circle where you'll express gratitude, set intentions, and integrate your experiences. Conclude with a celebratory farewell dinner featuring a traditional Balinese dance performance.</p>
          </div>
          
          <div className="itinerary-day-refined">
            <h4>Day 7: Departure (May 21)</h4>
            <p>Begin your final morning with a closing yoga session and breakfast, taking time to honor the journey and your transformation. Enjoy last-minute shopping or relaxation before check-out. We'll provide a private transfer to Ngurah Rai International Airport for your departure flights, ensuring a seamless end to your unforgettable experience.</p>
          </div>
        </div>
        
        <div className="call-to-action-refined">
          <h3>Ready for Transformation?</h3>
          <p>Join our Bali Women's Retreat, thoughtfully curated by Yuliya, for an unforgettable journey of self-discovery, cultural immersion, and sisterhood.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn primary">Contact Us to Book</Link>
            <Link to="/destinations/bali" className="btn secondary">Learn More About Bali</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BaliTrip;