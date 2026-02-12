import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-card">
        <div className="header-inner">

          {/* LEFT SIDE NAV */}
          <nav className="header-nav">
            <a href="#home">Home</a>
            <a href="#download">Download</a>
            <a href="#about">About</a>
            <a href="#gameplay">Gameplay</a>
<a
  href="#collectibles"
  onClick={(e) => {
    e.preventDefault();

    const section = document.getElementById("collectibles");
    if (!section) return;

    // scroll to section
    section.scrollIntoView({ behavior: "smooth", block: "start" });

    // restart animation every click
    section.classList.remove("show");
    void section.offsetWidth; // force reflow
    section.classList.add("show");
  }}
>
  Collectibles
</a>
            <a href="#devs">Devs</a>
            <a href="#feedback">Feedback</a>
          </nav>

          {/* RIGHT SIDE AUTH BUTTONS */}
          <div className="header-auth">
  <a href="#login" className="login-btn">Login</a>
  <a href="#signup" className="signup-btn">Sign Up</a>
</div>


        </div>
      </div>
    </header>
  );
};

export default Header;
