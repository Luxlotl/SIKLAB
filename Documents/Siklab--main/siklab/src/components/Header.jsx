import "../styles/header.css";

const Header = () => {

  // 🔥 reusable function for triggering animations on sections
  const triggerSectionAnimation = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.classList.remove("show");  // reset animation
    void el.offsetWidth;          // force reflow
    el.classList.add("show");     // replay animation
  };

  return (
    <header className="header">
      <div className="header-card">
        <div className="header-inner">

          {/* NAV WRAPPER */}
          <div className="header-nav-wrapper">
            <nav className="header-nav">

              <a href="#home" className="active">
                Home
              </a>

              <a href="#download">Download</a>

              <a href="#about">About</a>

              <a href="#gameplay">Gameplay</a>

              {/* ⭐ Collectibles → triggers animation */}
              <a
  href="#collectibles"
  onClick={(e) => {
    e.preventDefault(); // stop the default anchor behavior

    const section = document.getElementById("collectibles");
    if (!section) return;

    // Scroll even if already at the section
    section.scrollIntoView({ behavior: "smooth", block: "start" });

    // Reset animation class
    section.classList.remove("show");
    void section.offsetWidth; // force reflow
    section.classList.add("show"); // replay animation
  }}
>
  Collectibles
</a>


              <a href="#devs">Devs</a>

              <a href="#feedback">Feedback</a>

            </nav>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
