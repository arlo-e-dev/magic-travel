function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-content-full">
          <div className="contact-info-full">
            <h3>Get in Touch</h3>
            <p>Have questions about our trips or destinations? We'd love to hear from you!</p>
            <div className="contact-methods-full">
              <p>Email: <a href="mailto:info@magictravel.com">info@magictravel.com</a></p>
              <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
              <p>Instagram: <a href="https://instagram.com/magictravel">@magictravel</a></p>
            </div>
          </div>
          <div className="contact-form-full">
            <h3>Send a Message</h3>
            <form>
              <div className="form-group-full">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group-full">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group-full">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} required></textarea>
              </div>
              <button type="submit" className="btn primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;