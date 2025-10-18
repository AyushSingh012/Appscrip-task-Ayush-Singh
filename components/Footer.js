import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h3>About Us</h3>
          <ul>
            <li>Our Story</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Payment & Pricing</li>
            <li>Returns & Refunds</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>Email: support@store.com</p>
          <p>Phone: +91 9876543210</p>
          <div className="social-icons">
            <span>🌐</span>
            <span>💬</span>
            <span>▶️</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} YourStore. All rights reserved.</p>
      </div>
    </footer>
  );
}
