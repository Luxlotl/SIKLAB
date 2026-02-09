import "../../styles/HeroSection.css";
import logo from "../../assets/images/Siklab.png"; // change if your logo path is different

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-logo-wrapper">
        <img src={logo} alt="Siklab Logo" className="hero-logo" />
      </div>
    </section>
  );
};

export default HeroSection;
