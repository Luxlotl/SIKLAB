import { useState } from "react";
import AuthModal from "./Authmodal";
import "../styles/header.css";

const Header = () => {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-card">
          <div className="header-inner">

            <nav className="header-nav">
              <a href="#home">Home</a>
              <a href="#download">Download</a>
              <a href="#about">About</a>
              <a href="#gameplay">Gameplay</a>
              <a href="#collectibles">Collectibles</a>
              <a href="#devs">Devs</a>
              <a href="#feedback">Feedback</a>
            </nav>

            <div className="header-auth">
              <button
                className="login-btn"
                onClick={() => setAuthOpen(true)}
              >
                Login
              </button>

              <button
                className="signup-btn"
                onClick={() => setAuthOpen(true)}
              >
                Sign Up
              </button>
            </div>

          </div>
        </div>
      </header>

      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
      />
    </>
  );
};

export default Header;
