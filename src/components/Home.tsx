import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h2>Transformative Women's Travel Experiences</h2>
          <p>Join our exclusive group getaways designed for Russian women to explore the world together</p>
          <div className="cta-buttons">
            <Link to="/trips" className="btn primary">View Upcoming Trips</Link>
            <Link to="/destinations" className="btn secondary">Explore Destinations</Link>
          </div>
        </div>
      </section>
      
      <section className="featured-destinations">
        <h2>Featured Destinations</h2>
        <div className="destination-grid">
          <div className="destination-card">
            <div className="placeholder-image">Bali</div>
            <h3>Bali Retreat</h3>
            <p>Experience the beauty and culture of Bali with our women-focused group tour</p>
          </div>
          <div className="destination-card">
            <div className="placeholder-image">Turkey</div>
            <h3>Turkey Adventure</h3>
            <p>Discover the rich history and vibrant markets of Turkey</p>
          </div>
          <div className="destination-card">
            <div className="placeholder-image">Vegas</div>
            <h3>Vegas Getaway</h3>
            <p>Experience the excitement of Las Vegas with like-minded women</p>
          </div>
        </div>
      </section>
      
      <section className="testimonials">
        <h2>What Our Travelers Say</h2>
        <div className="testimonial">
          <p>"An incredible experience that exceeded all my expectations. The group bonding was magical!"</p>
          <p className="author">- Anna, Moscow</p>
        </div>
      </section>
    </div>
  );
}

export default Home;