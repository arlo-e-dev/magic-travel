import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>Magic Travel</h1>
        </Link>
        <nav>
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/destinations">Destinations</NavLink></li>
            <li><NavLink to="/trips">Trips</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Magic Travel. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

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

function About() {
  return (
    <div className="about">
      <h2>About Yuliya Makhnina</h2>
      <div className="about-content">
        <div className="placeholder-image large">Yuliya</div>
        <div className="about-text">
          <p>As a passionate traveler and advocate for women's empowerment, I created Magic Travel to provide safe, enriching, and transformative experiences for Russian women.</p>
          <p>With over 10 years of travel experience across 30+ countries, I specialize in curating group getaways that foster connection, personal growth, and unforgettable memories.</p>
        </div>
      </div>
    </div>
  );
}

function Destinations() {
  return (
    <div className="destinations">
      <h2>Our Destinations</h2>
      <div className="destination-list">
        <div className="destination-item">
          <div className="placeholder-image">Bali</div>
          <div className="destination-info">
            <h3>Bali, Indonesia</h3>
            <p>Relaxing beaches, vibrant culture, and spiritual retreats</p>
          </div>
        </div>
        <div className="destination-item">
          <div className="placeholder-image">Turkey</div>
          <div className="destination-info">
            <h3>Istanbul, Turkey</h3>
            <p>Historic landmarks, bustling markets, and rich traditions</p>
          </div>
        </div>
        <div className="destination-item">
          <div className="placeholder-image">Vegas</div>
          <div className="destination-info">
            <h3>Las Vegas, USA</h3>
            <p>Entertainment, nightlife, and desert adventures</p>
          </div>
        </div>
        <div className="destination-item">
          <div className="placeholder-image">Joshua Tree</div>
          <div className="destination-info">
            <h3>Joshua Tree, USA</h3>
            <p>Stunning desert landscapes and unique rock formations</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Trips() {
  return (
    <div className="trips">
      <h2>Upcoming Group Trips</h2>
      <div className="trip-list">
        <div className="trip-card">
          <div className="placeholder-image">Bali</div>
          <div className="trip-info">
            <h3>Bali Women's Retreat</h3>
            <p className="dates">May 15-22, 2026</p>
            <p className="price">From $1,899 per person</p>
            <Link to="/trips/bali" className="btn primary">View Details</Link>
          </div>
        </div>
        <div className="trip-card">
          <div className="placeholder-image">Turkey</div>
          <div className="trip-info">
            <h3>Turkey Cultural Adventure</h3>
            <p className="dates">June 10-18, 2026</p>
            <p className="price">From $2,199 per person</p>
            <Link to="/trips/turkey" className="btn primary">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Blog() {
  return (
    <div className="blog">
      <h2>Travel Stories & Tips</h2>
      <div className="blog-list">
        <div className="blog-post">
          <div className="placeholder-image">Post</div>
          <div className="post-info">
            <h3>5 Reasons Why Group Travel is Transformative</h3>
            <p className="excerpt">Discover how traveling with like-minded women creates unforgettable experiences...</p>
            <Link to="/blog/group-travel" className="read-more">Read More</Link>
          </div>
        </div>
        <div className="blog-post">
          <div className="placeholder-image">Post</div>
          <div className="post-info">
            <h3>Packing Tips for Your First Group Trip</h3>
            <p className="excerpt">Essential items and smart packing strategies for stress-free travel...</p>
            <Link to="/blog/packing-tips" className="read-more">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Have questions about our trips or destinations? We'd love to hear from you!</p>
          <div className="contact-methods">
            <p>Email: <a href="mailto:info@magictravel.com">info@magictravel.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
            <p>Instagram: <a href="https://instagram.com/magictravel">@magictravel</a></p>
          </div>
        </div>
        <div className="contact-form">
          <h3>Send a Message</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} required></textarea>
            </div>
            <button type="submit" className="btn primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Privacy() {
  return (
    <div className="privacy">
      <h2>Privacy Policy</h2>
      <div className="policy-content">
        <p>This is a placeholder for the privacy policy. All personal information will be handled with care and in accordance with applicable data protection laws.</p>
      </div>
    </div>
  );
}

function Terms() {
  return (
    <div className="terms">
      <h2>Terms & Conditions</h2>
      <div className="terms-content">
        <p>This is a placeholder for the terms and conditions. All bookings are subject to our standard terms which will be provided at the time of booking.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;