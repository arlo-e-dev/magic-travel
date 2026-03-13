import '../App.css';

function About() {
  return (
    <div className="about-refined">
      <div className="about-hero">
        <h2>My Journey as a Travel Curator</h2>
        <p>Creating transformative experiences for Russian women who seek meaningful connections through travel</p>
      </div>
      
      <div className="container">
        <div className="about-content-refined">
          <div className="placeholder-image-refined large">Yuliya</div>
          <div className="about-text-refined">
            <h3>Empowering Women Through Travel</h3>
            <p>As a passionate traveler and advocate for women's empowerment, I created Magic Travel to provide safe, enriching, and transformative experiences exclusively for Russian women.</p>
            <p>With over a decade of travel experience across 30+ countries, I've learned that the most meaningful journeys happen when we travel with intention, authenticity, and the right community. This insight became the foundation of Magic Travel.</p>
            
            <div className="mission-statement">
              <p>"My mission is to craft transformative journeys where every detail is thoughtfully considered - from the perfect group dynamics to the most meaningful cultural experiences. I believe travel has the power to change lives when shared with the right people in the right way."</p>
            </div>
            
            <p>My journey began when I discovered how profoundly travel can impact us when shared with like-minded women. The sisterhood formed on the road often evolves into lifelong friendships, and the transformative experiences we create together shape us in ways that solo travel simply cannot match.</p>
            <p>At Magic Travel, every detail of each journey is thoughtfully curated to balance adventure with wellness, cultural immersion with personal reflection, and group connection with individual space. My commitment is to create transformative spaces where Russian women can explore the world with confidence, knowing they're supported by a community that celebrates their unique journey.</p>
          </div>
        </div>
        
        <div className="philosophy-section">
          <h3 className="section-title">Travel Philosophy</h3>
          <div className="philosophy-grid">
            <div className="philosophy-card">
              <h4>Intentional Design</h4>
              <p>Every experience is crafted with purpose, ensuring each moment contributes to personal growth and meaningful connections.</p>
            </div>
            <div className="philosophy-card">
              <h4>Cultural Immersion</h4>
              <p>We go beyond typical tourism to create authentic encounters with local communities, traditions, and perspectives.</p>
            </div>
            <div className="philosophy-card">
              <h4>Sisterhood First</h4>
              <p>Our journeys are designed to foster deep connections between like-minded women who share values and aspirations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;