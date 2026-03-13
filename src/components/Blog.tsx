import { Link } from 'react-router-dom';
import '../App.css';

function Blog() {
  return (
    <div className="blog-refined">
      <div className="blog-hero">
        <h2>Yuliya's Travel Insights</h2>
        <p>Thoughts, tips, and stories from my journeys around the world with our incredible sisterhood</p>
      </div>
      
      <div className="container">
        <div className="blog-list-refined">
          <div className="blog-post-refined">
            <div className="post-image-refined">Post</div>
            <div className="post-info-refined">
              <h3>5 Reasons Why Group Travel is Transformative</h3>
              <p className="excerpt-refined">Discover how traveling with like-minded Russian women creates unforgettable experiences and lifelong friendships...</p>
              <div className="post-meta-refined">
                <span>March 10, 2026</span>
                <span>Travel Insights</span>
              </div>
              <Link to="/blog/group-travel" className="read-more-refined">Read More</Link>
            </div>
          </div>
          
          <div className="blog-post-refined">
            <div className="post-image-refined">Post</div>
            <div className="post-info-refined">
              <h3>Packing Tips for Your First Group Trip</h3>
              <p className="excerpt-refined">Essential items and smart packing strategies for stress-free travel with your Magic Travel sisters...</p>
              <div className="post-meta-refined">
                <span>February 28, 2026</span>
                <span>Travel Tips</span>
              </div>
              <Link to="/blog/packing-tips" className="read-more-refined">Read More</Link>
            </div>
          </div>
          
          <div className="blog-post-refined">
            <div className="post-image-refined">Post</div>
            <div className="post-info-refined">
              <h3>Top 10 Destinations for Russian Women Travelers in 2026</h3>
              <p className="excerpt-refined">Yuliya's curated list of must-visit destinations for the year ahead, each chosen for their unique appeal to Russian women...</p>
              <div className="post-meta-refined">
                <span>February 15, 2026</span>
                <span>Destination Guide</span>
              </div>
              <Link to="/blog/top-destinations" className="read-more-refined">Read More</Link>
            </div>
          </div>
          
          <div className="blog-post-refined">
            <div className="post-image-refined">Post</div>
            <div className="post-info-refined">
              <h3>Finding Your Travel Tribe: How to Connect with Like-Minded Women</h3>
              <p className="excerpt-refined">The importance of traveling with women who share your values and how it can transform your journey...</p>
              <div className="post-meta-refined">
                <span>January 22, 2026</span>
                <span>Community</span>
              </div>
              <Link to="/blog/travel-tribe" className="read-more-refined">Read More</Link>
            </div>
          </div>
          
          <div className="blog-post-refined">
            <div className="post-image-refined">Post</div>
            <div className="post-info-refined">
              <h3>Wellness on the Road: Maintaining Balance While Traveling</h3>
              <p className="excerpt-refined">Practical tips for staying centered, healthy, and present during your group travel adventures...</p>
              <div className="post-meta-refined">
                <span>January 8, 2026</span>
                <span>Wellness</span>
              </div>
              <Link to="/blog/wellness-travel" className="read-more-refined">Read More</Link>
            </div>
          </div>
          
          <div className="blog-post-refined">
            <div className="post-image-refined">Post</div>
            <div className="post-info-refined">
              <h3>Cultural Immersion: Going Beyond the Tourist Experience</h3>
              <p className="excerpt-refined">How our curated experiences help you connect authentically with local communities and traditions...</p>
              <div className="post-meta-refined">
                <span>December 15, 2025</span>
                <span>Cultural Insights</span>
              </div>
              <Link to="/blog/cultural-immersion" className="read-more-refined">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;