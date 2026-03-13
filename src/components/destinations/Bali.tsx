import { Link } from 'react-router-dom';
import '../../App.css';

function Bali() {
  return (
    <div className="destination-detail-refined">
      <div className="detail-hero">
        <h2>Bali Women's Retreat</h2>
        <div className="detail-hero-meta">
          <span>7 Days | Wellness Focus</span>
          <span>Curated by Yuliya</span>
        </div>
        <p>Transformative journey through Bali's most beautiful locations, designed exclusively for Russian women seeking spiritual renewal and cultural immersion</p>
      </div>
      
      <div className="container">
        <Link to="/destinations" className="btn secondary" style={{ marginBottom: '2rem' }}>&larr; Back to Destinations</Link>
        
        <div className="detail-content-refined">
          <div className="detail-image-refined">Bali, Indonesia</div>
          
          <div className="detail-info-refined">
            <h3>Why Bali?</h3>
            <p>Bali offers the perfect blend of spiritual renewal, natural beauty, and cultural immersion. Curated by Yuliya specifically for our women-only group, this journey will support your personal growth and transformation in one of the world's most enchanting destinations.</p>
            
            <div className="mission-statement">
              <p>"Bali has always held a special place in my heart. The island's spiritual energy, combined with its natural beauty and rich culture, creates the perfect environment for women to reconnect with themselves and each other. This retreat is designed to harness that energy for our sisterhood."</p>
              <p className="highlight-author">— Yuliya Makhnina</p>
            </div>
            
            <h3>What to Expect</h3>
            <p>Our Bali retreat is thoughtfully designed to balance adventure with wellness, cultural immersion with personal reflection, and group connection with individual space. Every detail has been considered to create a transformative experience.</p>
          </div>
        </div>
        
        <div className="highlights-grid-refined">
          <div className="highlight-card-refined">
            <h4>Daily Wellness</h4>
            <ul>
              <li>Morning yoga and meditation sessions</li>
              <li>Wellness workshops with local healers</li>
              <li>Rejuvenating spa treatments</li>
              <li>Healthy, locally-sourced meals</li>
            </ul>
          </div>
          
          <div className="highlight-card-refined">
            <h4>Cultural Immersion</h4>
            <ul>
              <li>Visits to sacred temples</li>
              <li>Traditional Balinese cooking classes</li>
              <li>Local artisan workshops</li>
              <li>Cultural performances and ceremonies</li>
            </ul>
          </div>
          
          <div className="highlight-card-refined">
            <h4>Accommodation</h4>
            <ul>
              <li>Luxury boutique resort in Ubud</li>
              <li>Private villa with tropical garden views</li>
              <li>World-class spa facilities</li>
              <li>Dedicated yoga pavilion</li>
            </ul>
          </div>
          
          <div className="highlight-card-refined">
            <h4>Group Connection</h4>
            <ul>
              <li>Intimate group dinners</li>
              <li>Sisterhood circles and reflection sessions</li>
              <li>Shared adventures and experiences</li>
              <li>Lifelong friendships formed</li>
            </ul>
          </div>
        </div>
        
        <div className="itinerary-section-refined">
          <h3>Sample Itinerary</h3>
          <div className="itinerary-day-refined">
            <h4>Day 1-2: Arrival & Settling In</h4>
            <p>Welcome dinner, orientation, and relaxation at our hand-selected resort. Optional spa treatments and pool time to unwind and connect with your travel sisters. Evening welcome circle to set intentions for the journey ahead.</p>
          </div>
          
          <div className="itinerary-day-refined">
            <h4>Day 3-4: Cultural Immersion</h4>
            <p>Visit sacred local temples, explore traditional markets, and participate in an authentic Balinese cooking class. Evening cultural performance to deepen our connection to the island's rich heritage. Group reflection session to integrate our experiences.</p>
          </div>
          
          <div className="itinerary-day-refined">
            <h4>Day 5-6: Adventure & Wellness</h4>
            <p>Guided waterfall hike through lush jungle trails, rice terrace trekking, and optional water sports. Wellness workshops and indulgent group massage sessions to nurture body and soul. Sunset yoga session with panoramic views.</p>
          </div>
          
          <div className="itinerary-day-refined">
            <h4>Day 7: Reflection & Departure</h4>
            <p>Meaningful group reflection session to integrate our experiences, celebratory farewell brunch, and seamless departure transfers. Exchange contact information to maintain connections beyond the retreat.</p>
          </div>
        </div>
        
        <div className="call-to-action-refined">
          <h3>Ready to Experience Bali?</h3>
          <p>Join our next Bali Women's Retreat, thoughtfully curated by Yuliya, for an unforgettable journey of self-discovery, cultural immersion, and sisterhood.</p>
          <Link to="/trips/bali" className="btn primary">View Trip Details</Link>
        </div>
      </div>
    </div>
  );
}

export default Bali;