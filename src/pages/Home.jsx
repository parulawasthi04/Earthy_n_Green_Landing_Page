import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  HeartHandshake,
  Wheat,
  Sprout,
  Gift,
  Sun,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { products } from "../data/products.js";
import DiwaliOfferBanner from "../components/DiwaliOfferBanner.jsx";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-decor decor-left">❋</div>
        <div className="hero-decor decor-right">✺</div>
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            <Sun size={22} />
            <span>CELEBRATE WITH PURPOSE</span>
          </div>
          <h1>
            Make this Diwali
            <br />a little <em>greener.</em>
          </h1>
          <p className="hero-subtitle">
            Traditional goodness. Modern mindful eating.
            <br className="desktop-break" /> A brighter future for farmers and
            soil.
          </p>
          <p className="hero-description">
            Bring home the goodness of millets — made for sharing, gifting, and
            making everyday choices feel a little more meaningful.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="button button-dark">
              Explore millet laddus <ArrowRight size={17} />
            </Link>
            <Link to="/our-story" className="button button-outline">
              Our story <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="hero-promises">
            <div>
              <span className="promise-icon">
                <HeartHandshake />
              </span>
              <span>
                Farmer-first
                <br />
                partnerships
              </span>
            </div>
            <i />
            <div>
              <span className="promise-icon">
                <Wheat />
              </span>
              <span>
                Millets for
                <br />
                mindful moments
              </span>
            </div>
            <i />
            <div>
              <span className="promise-icon">
                <Sprout />
              </span>
              <span>
                Soil-first
                <br />
                purpose
              </span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-glow" />
          <div className="hero-image-frame">
            <img
              src="/millet-laddu-packaging.png"
              alt="Earthy n Green millet laddu festive packaging"
            />
            <span className="image-caption">✦ A thoughtful little gift ✦</span>
          </div>
          <div className="floating-note">
            <span className="note-icon">
              <Gift size={20} />
            </span>
            <span>
              <b>Give goodness.</b>
              <small>One thoughtful bite at a time.</small>
            </span>
          </div>
          <div className="rangoli rangoli-one">✺</div>
          <div className="rangoli rangoli-two">✧</div>
        </div>
      </section>

      <DiwaliOfferBanner />

      <section className="product-section section-pad">
        <SectionHeading
          kicker="THE GOODNESS EDIT"
          title={
            <>
              Goodness, beautifully <em>grounded.</em>
            </>
          }
          description="Discover thoughtful ways to bring millets into your everyday."
        />
        <div className="product-grid">
          {[
            products.find((product) => product.id === "barnyard-millet"),
            products.find((product) => product.id === "millet-utsav"),
          ]
            .filter(Boolean)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        <p className="price-note">
          Millet Laddus ₹1,000 each · Diwali Hampers are 20% off during the
          festive offer.
        </p>
        <div className="center-action">
          <Link className="button button-outline" to="/products">
            View all products <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="impact-section section-pad">
        <SectionHeading
          kicker="THE CIRCLE OF GOODNESS"
          title={
            <>
              Better for your table.
              <br />
              <em>More thoughtful for tomorrow.</em>
            </>
          }
          description="Our impact starts with the grain — and grows with every conscious choice."
        />
        <div className="impact-grid">
          <div className="impact-item">
            <span className="impact-icon">
              <Sprout />
            </span>
            <h3>Better food choices</h3>
            <p>
              Make space for traditional grains and thoughtful everyday eating.
            </p>
          </div>
          <div className="impact-divider" />
          <div className="impact-item">
            <span className="impact-icon">
              <HeartHandshake />
            </span>
            <h3>Farmer partnerships</h3>
            <p>
              Build direct connections with farmer collectives and support
              fairer livelihoods.
            </p>
          </div>
          <div className="impact-divider" />
          <div className="impact-item">
            <span className="impact-icon">
              <Wheat />
            </span>
            <h3>Healthier soil</h3>
            <p>
              Help channel our purpose into soil-regeneration practices for the
              future.
            </p>
          </div>
        </div>
        <p className="impact-footnote">
          Our commitments are a work in progress. We’ll share measurable
          milestones as our impact grows.
        </p>
        <div className="center-action">
          <Link className="text-link" to="/impact">
            Explore our impact <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
