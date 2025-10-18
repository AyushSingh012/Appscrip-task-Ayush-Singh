import './Newsletter.css';

export default function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Be the First to Know</h2>
      <p>Sign up for updates from our store.</p>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter your e-mail..." required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}
