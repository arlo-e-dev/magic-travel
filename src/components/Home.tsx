import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Curated Women-Only Getaways</h2>
          <p>Transformative travel experiences designed exclusively for Russian women to explore, connect, and thrive together</p>
          <div className="cta-buttons">
            <Link to="/trips" className="btn primary">View Upcoming Trips</Link>
            <Link to="/destinations" className="btn secondary">Explore Destinations</Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2>How Magic Travel Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Choose Your Adventure</h3>
              <p>Browse our curated selection of women-only group trips to inspiring destinations around the world</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Connect With Your Tribe</h3>
              <p>Join a community of like-minded Russian women who share your passion for travel and adventure</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Create Lasting Memories</h3>
              <p>Experience transformative journeys filled with authentic connections, cultural immersion, and personal growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="featured-destinations">
        <div className="container">
          <h2>Featured Destinations</h2>
          <div className="destination-grid">
            <div className="destination-card">
              <div className="placeholder-image">Bali</div>
              <div className="card-content">
                <h3>Bali Retreat</h3>
                <p>Experience the beauty and culture of Bali with our women-focused group tour</p>
                <Link to="/destinations/bali" className="btn secondary small">Learn More</Link>
              </div>
            </div>
            <div className="destination-card">
              <div className="placeholder-image">Turkey</div>
              <div className="card-content">
                <h3>Turkey Adventure</h3>
                <p>Discover the rich history and vibrant markets of Turkey</p>
                <Link to="/destinations/turkey" className="btn secondary small">Learn More</Link>
              </div>
            </div>
            <div className="destination-card">
              <div className="placeholder-image">Vegas</div>
              <div className="card-content">
                <h3>Vegas Getaway</h3>
                <p>Experience the excitement of Las Vegas with like-minded women</p>
                <Link to="/destinations/las-vegas" className="btn secondary small">Learn More</Link>
              </div>
            </div>
            <div className="destination-card">
              <div className="placeholder-image">JT</div>
              <div className="card-content">
                <h3>Joshua Tree</h3>
                <p>Find serenity in the desert landscapes of Joshua Tree National Park</p>
                <Link to="/destinations/joshua-tree" className="btn secondary small">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hosted Getaways */}
      <section className="hosted-getaways">
        <div className="container">
          <h2>Upcoming Group Getaways</h2>
          <div className="trip-grid">
            <div className="trip-card">
              <div className="placeholder-image">Florida</div>
              <div className="card-content">
                <h3>Florida Keys Escape</h3>
                <p>Relax and rejuvenate on the beautiful beaches of the Florida Keys</p>
                <div className="trip-meta">
                  <span className="dates">May 15-22, 2026</span>
                  <span className="price">From $1,499</span>
                </div>
                <Link to="/trips/florida" className="btn primary small">View Details</Link>
              </div>
            </div>
            <div className="trip-card">
              <div className="placeholder-image">Tahoe</div>
              <div className="card-content">
                <h3>Lake Tahoe Adventure</h3>
                <p>Experience the beauty of Lake Tahoe with outdoor activities and relaxation</p>
                <div className="trip-meta">
                  <span className="dates">June 8-15, 2026</span>
                  <span className="price">From $1,899</span>
                </div>
                <Link to="/trips/lake-tahoe" className="btn primary small">View Details</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Travelers Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial">
              <p>"An incredible experience that exceeded all my expectations. The group bonding was magical!"</p>
              <p className="author">- Anna, Moscow</p>
            </div>
            <div className="testimonial">
              <p>"I've traveled solo before, but this was completely different. The sisterhood we built was transformative."</p>
              <p className="author">- Katya, St. Petersburg</p>
            </div>
            <div className="testimonial">
              <p>"Yuliya created the perfect balance of adventure and relaxation. I'm already planning my next trip!"</p>
              <p className="author">- Daria, Kazan</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="about-teaser">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Meet Yuliya Makhnina</h2>
              <p>As your travel curator, I'm passionate about creating transformative experiences that empower women to explore the world with confidence and joy.</p>
              <p>My mission is to provide a safe, supportive environment where Russian women can discover new destinations, build meaningful connections, and create unforgettable memories.</p>
              <Link to="/about" className="btn secondary">Learn My Story</Link>
            </div>
            <div className="placeholder-image large">Yuliya</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready for Your Next Adventure?</h2>
          <p>Join our community of women travelers and discover the magic of group travel</p>
          <div className="cta-buttons">
            <Link to="/trips" className="btn primary">View All Trips</Link>
            <Link to="/contact" className="btn secondary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;