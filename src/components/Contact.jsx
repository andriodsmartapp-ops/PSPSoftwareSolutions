export default function Contact() {
  return (
    <section className="section" id="contact">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <button type="submit">Send Message</button>
      </form>
      <footer className="footer">
        © 2028 PSG Software Solutions - All Rights Reserved.
      </footer>
    </section>
  );
}