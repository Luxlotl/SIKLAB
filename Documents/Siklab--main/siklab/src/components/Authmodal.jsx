import { useState } from "react";
import "../styles/authModal.css";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div
        className="auth-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="auth-close" onClick={onClose}>×</button>

        <h2 className="auth-title">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <div className="auth-form">
          {!isLogin && (
            <input type="text" placeholder="Username" />
          )}

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button className="auth-submit">
            {isLogin ? "Login" : "Create Account"}
          </button>
        </div>

        <p className="auth-switch">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
