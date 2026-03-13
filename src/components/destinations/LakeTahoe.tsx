import { Link } from 'react-router-dom';

function LakeTahoe() {
  return (
    <div className="destinations">
      <div className="container">
        <Link to="/destinations" className="btn secondary" style={{ marginBottom: '2rem' }}>&larr; Back to Destinations</Link>
        <div className="destination-detail">
          <div className="placeholder-image" style={{ height: '400px', margin: '0 auto 2rem', maxWidth: '800px' }}>Lake Tahoe</div>
          
          <div className="destination-content">
            <h2>Lake Tahoe Mountain Adventure</h2>
            
            <div className="destination-highlights">
              <div className="highlight-card">
                <h3>Mountain Magic</h3>
                <p>Lake Tahoe offers breathtaking alpine scenery, pristine waters, and year-round outdoor activities. Our women-only adventure combines thrilling outdoor experiences with relaxation and connection in nature's stunning setting.</p>
              </div>
              
              <div className="highlight-card">
                <h3>Adventure Highlights</h3>
                <ul>
                  <li>5 nights at a luxury lakeside lodge</li>
                  <li>Guided hiking in Desolation Wilderness</li>
                  <li>Private boat tour on Lake Tahoe</li>
                  <li>Spa day with mountain views</li>
                  <li>Campfire storytelling under the stars</li>
                </ul>
              </div>
              
              <div className="highlight-card">
                <h3>Accommodation</h3>
                <p>We'll stay at a beautiful lakeside lodge with cozy rooms, a stone fireplace, and panoramic views of the lake and mountains. The lodge provides the perfect blend of rustic charm and modern comfort.</p>
              </div>
            </div>
            
            <div className="itinerary-section">
              <h3>Adventure Itinerary</h3>
              <div className="itinerary-day">
                <h4>Day 1: Arrival & Welcome</h4>
                <p>Arrival and check-in at the lakeside lodge. Welcome dinner with local cuisine. Orientation and group bonding activities.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 2: Hiking & Exploration</h4>
                <p>Morning guided hike in Desolation Wilderness. Picnic lunch with scenic views. Afternoon free time for relaxation or optional activities. Sunset campfire gathering.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 3: Water Adventures</h4>
                <p>Private boat charter on Lake Tahoe with swimming and snorkeling. BBQ lunch on a secluded beach. Kayaking or paddleboarding options. Sunset viewing from the boat.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 4: Wellness & Culture</h4>
                <p>Morning yoga session with lake views. Spa day at the lodge. Visit to a local art gallery or historic site. Group dinner at a renowned local restaurant.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 5: Farewell & Departure</h4>
                <p>Final morning hike or leisure time. Farewell brunch with group reflection. Departure transfers.</p>
              </div>
            </div>
            
            <div className="call-to-action">
              <h3>Adventure in the Mountains</h3>
              <p>Join our Lake Tahoe Mountain Adventure for an unforgettable combination of outdoor excitement, natural beauty, and sisterhood.</p>
              <Link to="/trips/lake-tahoe" className="btn primary">View Trip Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LakeTahoe;