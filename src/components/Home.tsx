import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-elevated">
        <div className="hero-content-elevated">
          <div className="hero-badge">Curated Experiences</div>
          <h2 className="hero-title">Transformative Journeys for the Modern Russian Woman</h2>
          <p className="hero-description">Discover the world through intimate group getaways crafted exclusively for women who seek meaningful connections, personal growth, and unforgettable adventures.</p>
          <div className="hero-creator">
            <span className="creator-label">Curated by</span>
            <span className="creator-name">Yuliya Makhnina</span>
          </div>
          <div className="cta-buttons-hero">
            <Link to="/trips" className="btn primary btn-hero">Explore Upcoming Journeys</Link>
            <Link to="/destinations" className="btn secondary btn-hero">View Destinations</Link>
          </div>
        </div>
      </section>

      {/* Editorial Introduction */}
      <section className="editorial-intro">
        <div className="container-narrow">
          <div className="intro-content">
            <h2 className="section-title">Where Sisterhood Meets Wanderlust</h2>
            <p className="intro-text">Magic Travel is more than just group trips—it's a sisterhood of women who understand that the best journeys are shared with kindred spirits. Each experience is thoughtfully designed to foster genuine connections while exploring the world's most inspiring destinations.</p>
            <div className="intro-highlight">
              <p>"Travel has the power to transform us when shared with the right people in the right way. That's the magic I create for every woman who joins me."</p>
              <p className="highlight-author">— Yuliya Makhnina, Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Experiences */}
      <section className="signature-experiences">
        <div className="container">
          <h2 className="section-title">Signature Experiences</h2>
          <div className="experience-grid">
            <div className="experience-card">
              <div className="experience-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 42C34.4934 42 43 33.4934 43 23C43 12.5066 34.4934 4 24 4C13.5066 4 5 12.5066 5 23C5 33.4934 13.5066 42 24 42Z" stroke="#6a0dad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 32C29.5228 32 34 27.5228 34 22C34 16.4772 29.5228 12 24 12C18.4772 12 14 16.4772 14 22C14 27.5228 18.4772 32 24 32Z" stroke="#6a0dad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 26C26.2091 26 28 24.2091 28 22C28 19.7909 26.2091 18 24 18C21.7909 18 20 19.7909 20 22C20 24.2091 21.7909 26 24 26Z" stroke="#6a0dad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Cultural Immersion</h3>
              <p>Experience destinations through authentic local perspectives, from cooking classes with indigenous families to private tours of hidden gems.</p>
            </div>
            <div className="experience-card">
              <div className="experience-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 26V18C40 16.9391 39.5786 15.9217 38.8284 15.1716C38.0783 14.4214 37.0609 14 36 14H12C10.9391 14 9.92172 14.4214 9.17157 15.1716C8.42143 15.9217 8 16.9391 8 18V30C8 31.0609 8.42143 32.0783 9.17157 32.8284C9.92172 33.5786 10.9391 34 12 34H32" stroke="#6a0dad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M32 34V20C32 18.9391 31.5786 17.9217 30.8284 17.1716C30.0783 16.4214 29.0609 16 28 16H20C18.9391 16 17.9217 16.4214 17.1716 17.1716C16.4214 17.9217 16 18.9391 16 20V34" stroke="#6a0dad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 34V40H32V34" stroke="#6a0dad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 24H24" stroke="#6a0dad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Wellness & Balance</h3>
              <p>Reconnect with yourself through carefully curated wellness activities, from sunrise yoga on pristine beaches to mindfulness workshops in tranquil settings.</p>
            </div>
            <div className="experience-card">
              <div className="experience-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 20C14 20 18 16 24 16C30 16 34 20 34 20" stroke="#6a0dad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 28C14 28 18 32 24 32C30 32 34 28 34 28" stroke="#6a0dad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 16V8" stroke="#6a0dad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 40V32" stroke="#6a0dad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 24H16" stroke="#6a0dad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M32 24H40" stroke="#6a0dad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 11L15 15" stroke="#6a0dad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M33 33L37 37" stroke="#6a0dad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 37L15 33" stroke="#6a0dad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M33 15L37 11" stroke="#6a0dad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Intimate Connections</h3>
              <p>Build lasting friendships through shared experiences designed to foster vulnerability, authenticity, and sisterhood in safe, supportive environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Destinations */}
      <section className="curated-destinations">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Curated Destinations</h2>
            <p className="section-subtitle">Handpicked locations that offer the perfect blend of beauty, culture, and transformation</p>
          </div>
          <div className="destination-showcase">
            <div className="destination-card-elevated">
              <div className="destination-image">
                <div className="image-placeholder-elevated">Bali</div>
              </div>
              <div className="card-content-elevated">
                <span className="destination-tag">Spiritual Retreat</span>
                <h3>Bali Sanctuary</h3>
                <p>Experience the spiritual beauty and vibrant culture of Bali with our intimate women-focused journey. From temple ceremonies to wellness retreats, discover your inner strength.</p>
                <Link to="/destinations/bali" className="btn secondary small btn-card">Discover Sanctuary</Link>
              </div>
            </div>
            <div className="destination-card-elevated">
              <div className="destination-image">
                <div className="image-placeholder-elevated">Turkey</div>
              </div>
              <div className="card-content-elevated">
                <span className="destination-tag">Cultural Adventure</span>
                <h3>Turkey Exploration</h3>
                <p>Discover the ancient wonders and vibrant bazaars of Turkey through our thoughtfully curated cultural journey. From Cappadocia's fairy chimneys to Istanbul's grand mosques.</p>
                <Link to="/destinations/turkey" className="btn secondary small btn-card">Explore Culture</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Journeys */}
      <section className="upcoming-journeys">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Upcoming Journeys</h2>
            <p className="section-subtitle">Exclusive group getaways designed for transformation and connection</p>
          </div>
          <div className="trip-showcase">
            <div className="trip-card-elevated">
              <div className="trip-image">
                <div className="image-placeholder-elevated">Florida</div>
              </div>
              <div className="card-content-elevated">
                <div className="trip-meta-elevated">
                  <span className="dates-elevated">May 15-22, 2026</span>
                  <span className="price-elevated">From $1,499</span>
                </div>
                <h3>Florida Keys Escape</h3>
                <p>Relax and rejuvenate on the pristine beaches of the Florida Keys in our intimate women's retreat. Wellness workshops, sunset sails, and sisterhood circles included.</p>
                <Link to="/trips/florida" className="btn primary small btn-card">View Journey</Link>
              </div>
            </div>
            <div className="trip-card-elevated">
              <div className="trip-image">
                <div className="image-placeholder-elevated">Tahoe</div>
              </div>
              <div className="card-content-elevated">
                <div className="trip-meta-elevated">
                  <span className="dates-elevated">June 8-15, 2026</span>
                  <span className="price-elevated">From $1,899</span>
                </div>
                <h3>Lake Tahoe Adventure</h3>
                <p>Experience the breathtaking beauty of Lake Tahoe with outdoor activities and wellness experiences. Hiking, kayaking, and mindfulness practices in nature's embrace.</p>
                <Link to="/trips/lake-tahoe" className="btn primary small btn-card">View Adventure</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-refined">
        <div className="container">
          <h2 className="section-title">Voices of Our Sisterhood</h2>
          <div className="testimonial-showcase">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Yuliya's thoughtful planning made all the difference. Every moment felt intentional and magical. I returned home with new friends and a renewed sense of adventure!"</p>
                <p className="testimonial-author">— Anna, Moscow</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The sisterhood we built was truly transformative. Yuliya created a safe space where we could be vulnerable, adventurous, and authentic. A life-changing experience!"</p>
                <p className="testimonial-author">— Katya, St. Petersburg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-refined">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Embark on Your Next Adventure?</h2>
            <p className="cta-description">Join our intimate community of women travelers and experience the magic of thoughtfully curated group journeys</p>
            <div className="cta-buttons-refined">
              <Link to="/trips" className="btn primary btn-cta">View All Journeys</Link>
              <Link to="/contact" className="btn secondary btn-cta">Connect With Yuliya</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;