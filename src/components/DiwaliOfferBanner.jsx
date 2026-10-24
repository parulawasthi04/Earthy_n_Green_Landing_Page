import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Gift,
  Truck,
  Leaf,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "../styles/diwaliofferbanner.css";
import { useCart } from "../context/CartContext.jsx";

const offers = [
  {
    label: "EARTHY N GREEN • DIWALI GIFT COLLECTION",
    title: "Millet",
    highlight: "Utsav",
    description:
      "16 handcrafted foxtail millet laddus, plus a packet each of Ragi Chips and Ragi Mixture. A festive box full of traditional goodness.",
    badge: "₹1,099",
    badgeText: "Millet Utsav Gift Box",
    productId: "millet-utsav",
    button: "Explore Now",
    image: "/milet-utsav.png",
    icon: Gift,
    theme: "offer-gold",
  },
  {
    label: "EARTHY N GREEN • FESTIVE FAVOURITE",
    title: "Millet",
    highlight: "Mahotsav",
    description:
      "16 handcrafted millet laddus in 4 flavours — Coconut, Spice, Chocolate and Classic Foxtail — plus Ragi Chips and Ragi Mixture.",
    badge: "₹1,199",
    badgeText: "Millet Mahotsav Gift Box",
    productId: "millet-mahotsav",
    button: "Explore Now",
    image: "/milet-mahotsav.png",
    icon: Gift,
    theme: "offer-green",
  },
  {
    label: "EARTHY N GREEN • A LITTLE BOX OF JOY",
    title: "Millet",
    highlight: "Mithas",
    description:
      "12 millet laddus in 4 delicious flavours: Coconut, Spice, Chocolate and Classic Foxtail. Please note: Ragi Chips and Ragi Mixture are not included.",
    badge: "₹649",
    badgeText: "Millet Mithas Gift Box",
    productId: "millet-mithas",
    button: "Explore Now",
    image: "./milet-mithas.png",
    icon: Gift,
    theme: "offer-cream",
  },
];

export default function DiwaliOfferBanner() {
  const [active, setActive] = useState(0);
  const { add } = useCart();

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % offers.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const offer = offers[active];
  const OfferIcon = offer.icon;

  const previousOffer = () => {
    setActive((current) => (current - 1 + offers.length) % offers.length);
  };

  const nextOffer = () => {
    setActive((current) => (current + 1) % offers.length);
  };

  return (
    <section
      className={`diwali-offer ${offer.theme}`}
      aria-label="Diwali offers"
    >
      <div className="offer-photo">
        <img src={offer.image} alt={offer.title} />
        <div className="offer-photo-tag">
          <Leaf size={15} />
          <span>Goodness in every bite</span>
        </div>
      </div>

      <div className="offer-content" key={active}>
        <div className="offer-eyebrow">
          <Sparkles size={16} />
          <span>{offer.label}</span>
        </div>

        <h2>
          {offer.title}
          <br />
          <em>{offer.highlight}</em>
        </h2>

        <p className="offer-description">{offer.description}</p>

        <div className="offer-deal">
          <span className="offer-deal-icon">
            <OfferIcon size={23} />
          </span>
          <span className="offer-deal-copy">
            <strong>{offer.badge}</strong>
            <small>{offer.badgeText}</small>
          </span>
        </div>

        <Link to="/products" className="offer-cta">
          {offer.button}
          <ArrowRight size={17} />
        </Link>

        <div className="offer-controls">
          <button
            type="button"
            className="offer-arrow"
            onClick={previousOffer}
            aria-label="Previous offer"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="offer-dots" aria-label="Choose an offer">
            {offers.map((item, index) => (
              <button
                type="button"
                key={item.label}
                className={`offer-dot ${active === index ? "active" : ""}`}
                onClick={() => setActive(index)}
                aria-label={`Show offer ${index + 1}`}
                aria-current={active === index ? "true" : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            className="offer-arrow"
            onClick={nextOffer}
            aria-label="Next offer"
          >
            <ChevronRight size={18} />
          </button>

          <span className="offer-count">
            0{active + 1} <span>/ 0{offers.length}</span>
          </span>
        </div>
      </div>

      <div className="offer-benefits">
        <div>
          <Gift size={21} />
          <strong>Bulk Order Discounts</strong>
          <span>Special pricing for festive gifting</span>
        </div>
        <div>
          <Truck size={21} />
          <strong>Delivery in Noida</strong>
          <span>Delivery available within Noida</span>
        </div>
        <div>
          <Leaf size={21} />
          <strong>Thoughtfully Packed</strong>
          <span>Freshness, safety and quality</span>
        </div>
      </div>
    </section>
  );
}
