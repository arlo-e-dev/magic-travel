import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section - Editorial Luxury */}
      <section className="hero-editorial">
        <div className="hero-content-editorial">
          <div className="hero-badge-editorial">Curated Experiences</div>
          <h1 className="hero-title-editorial">Transformative Journeys for the Modern Russian Woman</h1>
          <p className="hero-description-editorial">Discover the world through intimate group getaways crafted exclusively for women who seek meaningful connections, personal growth, and unforgettable adventures.</p>
          <div className="hero-creator-editorial">
            <span className="creator-label-editorial">Curated by</span>
            <span className="creator-name-editorial">Yuliya Makhnina</span>
          </div>
          <div className="cta-buttons-editorial">
            <Link to="/trips" className="btn primary btn-editorial">Explore Upcoming Journeys</Link>
            <Link to="/destinations" className="btn secondary btn-editorial">View Destinations</Link>
          </div>
        </div>
      </section>

      {/* Editorial Introduction - Luxury Refinement */}
      <section className="editorial-intro-luxury">
        <div className="editorial-intro-content">
          <h2 className="section-title-editorial">Where Sisterhood Meets Wanderlust</h2>
          <p className="intro-text-editorial">Magic Travel is more than just group trips—it's a sisterhood of women who understand that the best journeys are shared with kindred spirits. Each experience is thoughtfully designed to foster genuine connections while exploring the world's most inspiring destinations.</p>
          <div className="intro-highlight-editorial">
            <p>"Travel has the power to transform us when shared with the right people in the right way. That's the magic I create for every woman who joins me."</p>
            <p className="highlight-author-editorial">— Yuliya Makhnina, Founder</p>
          </div>
        </div>
      </section>

      {/* Signature Experiences - Editorial Treatment */}
      <section className="signature-experiences-editorial">
        <div className="experiences-container-editorial">
          <div className="section-header-editorial">
            <h2 className="section-title-experiences">Signature Experiences</h2>
            <p className="section-subtitle-experiences">Thoughtfully crafted moments that define each journey</p>
          </div>
          <div className="experience-grid-editorial">
            <div className="experience-card-editorial">
              <div className="experience-icon-editorial">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 42C34.4934 42 43 33.4934 43 23C43 12.5066 34.4934 4 24 4C13.5066 4 5 12.5066 5 23C5 33.4934 13.5066 42 24 42Z" stroke="#c9b28e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 32C29.5228 32 34 27.5228 34 22C34 16.4772 29.5228 12 24 12C18.4772 12 14 16.4772 14 22C14 27.5228 18.4772 32 24 32Z" stroke="#c9b28e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 26C26.2091 26 28 24.2091 28 22C28 19.7909 26.2091 18 24 18C21.7909 18 20 19.7909 20 22C20 24.2091 21.7909 26 24 26Z" stroke="#c9b28e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Cultural Immersion</h3>
              <p>Experience destinations through authentic local perspectives, from cooking classes with indigenous families to private tours of hidden gems.</p>
            </div>
            <div className="experience-card-editorial">
              <div className="experience-icon-editorial">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 26V18C40 16.9391 39.5786 15.9217 38.8284 15.1716C38.0783 14.4214 37.0609 14 36 14H12C10.9391 14 9.92172 14.4214 9.17157 15.1716C8.42143 15.9217 8 16.9391 8 18V30C8 31.0609 8.42143 32.0783 9.17157 32.8284C9.92172 33.5786 10.9391 34 12 34H32" stroke="#c9b28e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M32 34V20C32 18.9391 31.5786 17.9217 30.8284 17.1716C30.0783 16.4214 29.0609 16 28 16H20C18.9391 16 17.9217 16.4214 17.1716 17.1716C16.4214 17.9217 16 18.9391 16 20V34" stroke="#c9b28e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 34V40H32V34" stroke="#c9b28e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 24H24" stroke="#c9b28e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Wellness & Balance</h3>
              <p>Reconnect with yourself through carefully curated wellness activities, from sunrise yoga on pristine beaches to mindfulness workshops in tranquil settings.</p>
            </div>
            <div className="experience-card-editorial">
              <div className="experience-icon-editorial">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 20C14 20 18 16 24 16C30 16 34 20 34 20" stroke="#c9b28e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 28C14 28 18 32 24 32C30 32 34 28 34 28" stroke="#c9b28e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 16V8" stroke="#c9b28e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 40V32" stroke="#c9b28e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 24H16" stroke="#c9b28e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M32 24H40" stroke="#c9b28e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 11L15 15" stroke="#c9b28e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M33 33L37 37" stroke="#c9b28e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 37L15 33" stroke="#c9b28e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M33 15L37 11" stroke="#c9b28e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Intimate Connections</h3>
              <p>Build lasting friendships through shared experiences designed to foster vulnerability, authenticity, and sisterhood in safe, supportive environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Destinations - Editorial Layout */}
      <section className="curated-destinations-editorial">
        <div className="destinations-container-editorial">
          <div className="section-header-destinations">
            <h2 className="section-title-destinations">Curated Destinations</h2>
            <p className="section-subtitle-destinations">Handpicked locations that offer the perfect blend of beauty, culture, and transformation</p>
          </div>
          <div className="destination-showcase-editorial">
            <div className="destination-card-editorial">
              <div className="destination-image-editorial">
                <div className="image-placeholder-editorial">Bali</div>
              </div>
              <div className="card-content-editorial">
                <span className="destination-tag-editorial">Spiritual Retreat</span>
                <h3>Bali Sanctuary</h3>
                <p>Experience the spiritual beauty and vibrant culture of Bali with our intimate women-focused journey. From temple ceremonies to wellness retreats, discover your inner strength.</p>
                <Link to="/destinations/bali" className="btn secondary small btn-card-editorial">Discover Sanctuary</Link>
              </div>
            </div>
            <div className="destination-card-editorial">
              <div className="destination-image-editorial">
                <div className="image-placeholder-editorial">Turkey</div>
              </div>
              <div className="card-content-editorial">
                <span className="destination-tag-editorial">Cultural Adventure</span>
                <h3>Turkey Exploration</h3>
                <p>Discover the ancient wonders and vibrant bazaars of Turkey through our thoughtfully curated cultural journey. From Cappadocia's fairy chimneys to Istanbul's grand mosques.</p>
                <Link to="/destinations/turkey" className="btn secondary small btn-card-editorial">Explore Culture</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Journeys - Editorial Treatment */}
      <section className="upcoming-journeys-editorial">
        <div className="journeys-container-editorial">
          <div className="section-header-journeys">
            <h2 className="section-title-journeys">Upcoming Journeys</h2>
            <p className="section-subtitle-journeys">Exclusive group getaways designed for transformation and connection</p>
          </div>
          <div className="trip-showcase-editorial">
            <div className="trip-card-editorial">
              <div className="trip-image-editorial">
                <div className="image-placeholder-editorial">Florida</div>
              </div>
              <div className="card-content-editorial">
                <div className="trip-meta-editorial">
                  <span className="dates-editorial">May 15-22, 2026</span>
                  <span className="price-editorial">From $1,499</span>
                </div>
                <h3>Florida Keys Escape</h3>
                <p>Relax and rejuvenate on the pristine beaches of the Florida Keys in our intimate women's retreat. Wellness workshops, sunset sails, and sisterhood circles included.</p>
                <Link to="/trips/florida" className="btn primary small btn-card-editorial">View Journey</Link>
              </div>
            </div>
            <div className="trip-card-editorial">
              <div className="trip-image-editorial">
                <div className="image-placeholder-editorial">Tahoe</div>
              </div>
              <div className="card-content-editorial">
                <div className="trip-meta-editorial">
                  <span className="dates-editorial">June 8-15, 2026</span>
                  <span className="price-editorial">From $1,899</span>
                </div>
                <h3>Lake Tahoe Adventure</h3>
                <p>Experience the breathtaking beauty of Lake Tahoe with outdoor activities and wellness experiences. Hiking, kayaking, and mindfulness practices in nature's embrace.</p>
                <Link to="/trips/lake-tahoe" className="btn primary small btn-card-editorial">View Adventure</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Editorial Voice */}
      <section className="testimonials-editorial">
        <div className="testimonials-container-editorial">
          <h2 className="section-title-testimonials">Voices of Our Sisterhood</h2>
          <div className="testimonial-showcase-editorial">
            <div className="testimonial-card-editorial">
              <div className="testimonial-content-editorial">
                <p>"Yuliya's thoughtful planning made all the difference. Every moment felt intentional and magical. I returned home with new friends and a renewed sense of adventure!"</p>
                <p className="testimonial-author-editorial">— Anna, Moscow</p>
              </div>
            </div>
            <div className="testimonial-card-editorial">
              <div className="testimonial-content-editorial">
                <p>"The sisterhood we built was truly transformative. Yuliya created a safe space where we could be vulnerable, adventurous, and authentic. A life-changing experience!"</p>
                <p className="testimonial-author-editorial">— Katya, St. Petersburg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Editorial Invitation */}
      <section className="final-cta-editorial">
        <div className="cta-content-editorial">
          <h2 className="cta-title-editorial">Ready to Embark on Your Next Adventure?</h2>
          <p className="cta-description-editorial">Join our intimate community of women travelers and experience the magic of thoughtfully curated group journeys</p>
          <div className="cta-buttons-editorial">
            <Link to="/trips" className="btn primary btn-cta-editorial">View All Journeys</Link>
            <Link to="/contact" className="btn secondary btn-cta-editorial">Connect With Yuliya</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;