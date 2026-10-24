import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const links = [
    ["Our Story", "/our-story"],
    ["Our Products", "/products"],
    ["Our Impact", "/impact"],
    ["Testimonials", "/testimonials"],
    ["Contact", "/contact"],
  ];
  return (
    <header className="site-header">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <img src="/logo.png" alt="Earthy n Green logo" className="brand-logo" />
        <span>
          Earthy <i>n</i> Green
        </span>
      </Link>
      <nav className={open ? "nav nav-open" : "nav"}>
        {links.map(([label, to]) => (
          <NavLink key={to} to={to} onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="header-actions">
        <Link className="button button-dark header-cta" to="/products">
          Shop the goodness <span>↗</span>
        </Link>
        <Link
          className="cart-button"
          to="/contact"
          aria-label={`Open cart and order details; ${count} items in cart`}
        >
          <ShoppingBag size={20} />
          <span className="cart-count">{count}</span>
        </Link>
        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
