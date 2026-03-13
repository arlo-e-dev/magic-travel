import { Link } from 'react-router-dom';

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
        <div className="blog-post">
          <div className="placeholder-image">Post</div>
          <div className="post-info">
            <h3>Top 10 Destinations for Russian Women Travelers in 2026</h3>
            <p className="excerpt">Our curated list of must-visit destinations for the year ahead...</p>
            <Link to="/blog/top-destinations" className="read-more">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;