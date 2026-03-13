import '../App.css';

function Contact() {
  return (
    <div className="contact-refined">
      <div className="contact-hero">
        <h2>Contact Yuliya</h2>
        <p>Have questions or want to discuss your next transformative journey? I'd love to personally connect with you.</p>
      </div>
      
      <div className="container">
        <div className="contact-content-refined">
          <div className="contact-info-refined">
            <h3>Connect With Yuliya</h3>
            <p>Have questions about our thoughtfully curated trips or destinations? I would love to personally connect with you and discuss how we can create a transformative experience tailored to your interests.</p>
            
            <div className="contact-methods-refined">
              <p><strong>Email:</strong> <a href="mailto:yuliya@magictravel.com">yuliya@magictravel.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a></p>
              <p><strong>Instagram:</strong> <a href="https://instagram.com/magictravel">@magictravel</a></p>
              <p><strong>WhatsApp:</strong> <a href="https://wa.me/1234567890">+1 (234) 567-890</a></p>
            </div>
            
            <div className="mission-statement">
              <p>"I believe in creating personalized connections before creating personalized journeys. Every woman who joins Magic Travel has a unique story, and I'm committed to understanding yours so we can craft the perfect experience together."</p>
            </div>
          </div>
          
          <div className="contact-form-refined">
            <h3>Send a Message to Yuliya</h3>
            <form>
              <div className="form-group-refined">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group-refined">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group-refined">
                <label htmlFor="interest">Travel Interest</label>
                <select id="interest" name="interest" className="form-control">
                  <option value="">Select your interest</option>
                  <option value="upcoming-trips">Upcoming Group Trips</option>
                  <option value="custom-journey">Custom Journey Planning</option>
                  <option value="group-dynamics">Group Dynamics & Activities</option>
                  <option value="wellness">Wellness & Personal Growth</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group-refined">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows={6} placeholder="Tell me about your travel interests, questions about upcoming trips, or anything else you'd like to discuss..." required></textarea>
              </div>
              <button type="submit" className="btn primary">Connect With Yuliya</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;