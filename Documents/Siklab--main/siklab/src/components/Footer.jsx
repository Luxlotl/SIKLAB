import "../styles/footer.css";
import devLogo from "../assets/images/pbc.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* LEFT: DEVELOPER LOGO */}
        <div className="footer-brand">
          <img src={devLogo} alt="Developer Logo" />
          <p>© {new Date().getFullYear()} Siklab. All rights reserved.</p>
        </div>

        {/* RIGHT: LINKS */}
        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#arrewards">AR Rewards</a>
          <a href="#privacy">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
