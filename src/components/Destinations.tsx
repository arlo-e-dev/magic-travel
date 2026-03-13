import { Link } from 'react-router-dom';
import '../App.css';

function Destinations() {
  return (
    <div className="destinations-refined">
      <div className="destinations-hero">
        <h2>Curated Destinations</h2>
        <p>Handpicked locations that offer the perfect blend of beauty, culture, and transformation for our sisterhood journeys</p>
      </div>
      
      <div className="container">
        <div className="destination-list-refined">
          <div className="destination-item-refined">
            <div className="destination-image-refined">Bali</div>
            <div className="destination-info-refined">
              <h3>Bali, Indonesia</h3>
              <p>Relaxing beaches, vibrant culture, and spiritual retreats thoughtfully curated by Yuliya for Russian women</p>
              <div className="destination-meta-refined">
                <span>7 Days</span>
                <span>Wellness Focus</span>
              </div>
              <Link to="/destinations/bali" className="btn secondary small">Discover Bali</Link>
            </div>
          </div>
          
          <div className="destination-item-refined">
            <div className="destination-image-refined">Turkey</div>
            <div className="destination-info-refined">
              <h3>Istanbul, Turkey</h3>
              <p>Historic landmarks, bustling markets, and rich traditions in an intimate women-only experience</p>
              <div className="destination-meta-refined">
                <span>10 Days</span>
                <span>Cultural Immersion</span>
              </div>
              <Link to="/destinations/turkey" className="btn secondary small">Explore Turkey</Link>
            </div>
          </div>
          
          <div className="destination-item-refined">
            <div className="destination-image-refined">Vegas</div>
            <div className="destination-info-refined">
              <h3>Las Vegas, USA</h3>
              <p>Entertainment, nightlife, and desert adventures in our exclusive women's retreat</p>
              <div className="destination-meta-refined">
                <span>5 Days</span>
                <span>Adventure Focus</span>
              </div>
              <Link to="/destinations/las-vegas" className="btn secondary small">Experience Vegas</Link>
            </div>
          </div>
          
          <div className="destination-item-refined">
            <div className="destination-image-refined">Joshua Tree</div>
            <div className="destination-info-refined">
              <h3>Joshua Tree, USA</h3>
              <p>Stunning desert landscapes and unique rock formations in a serene women-only environment</p>
              <div className="destination-meta-refined">
                <span>4 Days</span>
                <span>Nature Retreat</span>
              </div>
              <Link to="/destinations/joshua-tree" className="btn secondary small">Find Serenity</Link>
            </div>
          </div>
          
          <div className="destination-item-refined">
            <div className="destination-image-refined">Florida</div>
            <div className="destination-info-refined">
              <h3>Miami, Florida</h3>
              <p>Beach relaxation, vibrant nightlife, and cultural experiences in our intimate group journey</p>
              <div className="destination-meta-refined">
                <span>6 Days</span>
                <span>Beach & Culture</span>
              </div>
              <Link to="/destinations/florida" className="btn secondary small">Relax in Miami</Link>
            </div>
          </div>
          
          <div className="destination-item-refined">
            <div className="destination-image-refined">Lake Tahoe</div>
            <div className="destination-info-refined">
              <h3>Lake Tahoe, USA</h3>
              <p>Mountain retreats, outdoor adventures, and scenic beauty in a thoughtfully curated women's experience</p>
              <div className="destination-meta-refined">
                <span>7 Days</span>
                <span>Adventure & Wellness</span>
              </div>
              <Link to="/destinations/lake-tahoe" className="btn secondary small">Discover Tahoe</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destinations;