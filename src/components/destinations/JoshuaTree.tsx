import { Link } from 'react-router-dom';

function JoshuaTree() {
  return (
    <div className="destinations">
      <div className="container">
        <Link to="/destinations" className="btn secondary" style={{ marginBottom: '2rem' }}>&larr; Back to Destinations</Link>
        <div className="destination-detail">
          <div className="placeholder-image" style={{ height: '400px', margin: '0 auto 2rem', maxWidth: '800px' }}>Joshua Tree</div>
          
          <div className="destination-content">
            <h2>Joshua Tree Desert Retreat</h2>
            
            <div className="destination-highlights">
              <div className="highlight-card">
                <h3>Desert Magic</h3>
                <p>Joshua Tree National Park offers a unique landscape of otherworldly rock formations, desert flora, and stunning night skies. Our women-only retreat focuses on mindfulness, connection with nature, and personal reflection.</p>
              </div>
              
              <div className="highlight-card">
                <h3>Retreat Features</h3>
                <ul>
                  <li>4 nights in a luxury desert resort</li>
                  <li>Daily yoga and meditation sessions</li>
                  <li>Stargazing with an astronomer</li>
                  <li>Desert hiking with expert guides</li>
                  <li>Wellness spa treatments</li>
                </ul>
              </div>
              
              <div className="highlight-card">
                <h3>Accommodation</h3>
                <p>We'll stay at an eco-luxury resort that blends seamlessly with the desert landscape. Private casitas feature outdoor showers, fire pits, and stunning views of the desert and mountains.</p>
              </div>
            </div>
            
            <div className="itinerary-section">
              <h3>Retreat Itinerary</h3>
              <div className="itinerary-day">
                <h4>Day 1: Arrival & Grounding</h4>
                <p>Arrival and check-in. Welcome circle and intention setting. Sunset meditation and dinner under the stars.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 2: Exploration & Connection</h4>
                <p>Morning yoga session. Guided hike through Joshua Tree National Park. Afternoon free time for spa or reflection. Evening stargazing session.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 3: Adventure & Wellness</h4>
                <p>Sunrise hike to a scenic viewpoint. Rock climbing or art workshop options. Afternoon wellness treatments. Sound healing session.</p>
              </div>
              
              <div className="itinerary-day">
                <h4>Day 4: Integration & Departure</h4>
                <p>Morning yoga and group reflection. Closing circle and intention sharing. Departure transfers.</p>
              </div>
            </div>
            
            <div className="call-to-action">
              <h3>Find Your Center in the Desert</h3>
              <p>Join our Joshua Tree Desert Retreat for a transformative journey of self-discovery in one of nature's most inspiring landscapes.</p>
              <Link to="/trips/joshua-tree" className="btn primary">View Trip Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoshuaTree;