import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import "../styles/congratulations.css";

export default function Congratulations() {
  const navigate = useNavigate();

  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });

    const timer = setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 120,
        origin: { y: 0.5 },
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="congratulations-page">
      <div className="success-card">
        <div className="success-icon">🎉</div>
        <p className="success-label">EARTHY N GREEN</p>
        <h1>Congratulations!</h1>

        <p className="success-message">
          Thank you for choosing Earthy n Green. A little goodness goes a long
          way!
        </p>

        <div className="success-decoration">
          🌿 Made with care, shared with love 🌿
        </div>

        <p className="demo-notice">
          This is a demo. No payment has been made and no order is confirmed.
        </p>

        <button
          className="button button-dark"
          onClick={() => navigate("/products")}
        >
          Continue Shopping →
        </button>
      </div>
    </section>
  );
}
