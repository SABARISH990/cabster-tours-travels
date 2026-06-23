import "./App.css";
import { FaWhatsapp } from "react-icons/fa";
import swift from "./assets/swift.png";

function App() {
  const phone = "7639591469";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phone}?text=Hi, I would like to book a ride with CABSTER Tours & Travels`,
      "_blank"
    );
  };

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <h1>CABSTER</h1>
          <span>Tours & Travels</span>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button
          className="whatsapp-btn"
          onClick={openWhatsApp}
        >
          <FaWhatsapp />
          Book on WhatsApp
        </button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">

        <div className="overlay"></div>

        <div className="hero-content">

          <div className="hero-left">

            <p className="tagline">
              RIDE SAFE, RIDE SMART
            </p>

            <h1>
              Your Journey,
              <br />
              <span>Our Priority.</span>
            </h1>

            <p className="description">
              Experience comfortable, reliable and safe rides
              with CABSTER Tours & Travels.
              Anytime, anywhere.
            </p>

            <button
              className="hero-btn"
              onClick={openWhatsApp}
            >
              <FaWhatsapp />
              Book Your Ride Now
            </button>

          </div>
<div className="hero-right">
  <img
    src={swift}
    alt="Swift Dzire"
    className="hero-car"
  />
</div>

        </div>

      </section>

      {/* About */}
      <section id="about" className="section">

        <h2>About Us</h2>

        <p>
          CABSTER Tours & Travels is committed to providing
          safe, comfortable and affordable transportation
          services for individuals, families and businesses.
        </p>

        <p>
          Whether you need local travel, airport transfers
          or outstation trips, our experienced drivers and
          well-maintained vehicles ensure a smooth journey
          every time.
        </p>

      </section>

      {/* Contact */}
      <section id="contact" className="section">

        <h2>Contact Us</h2>

        <div className="contact-box">

          <p>📞 +91 76395 91469</p>

          <p>📧 cabstertours@gmail.com</p>

          <p>📍 Nambiyampalayam, Avinashi, Tamil Nadu 641670, India</p>

        </div>

        <button
          className="hero-btn"
          onClick={openWhatsApp}
        >
          <FaWhatsapp />
          WhatsApp Booking
        </button>

      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 CABSTER Tours & Travels. All Rights Reserved.
      </footer>

    </div>
  );
}

export default App;