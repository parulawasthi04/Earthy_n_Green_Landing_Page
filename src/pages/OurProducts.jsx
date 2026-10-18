import SectionHeading from "../components/SectionHeading.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import CheckoutPanel from "../components/CheckoutPanel.jsx";
export default function OurProducts() {
  return (
    <>
      <section className="page-section">
        <SectionHeading
          kicker="THE GOODNESS EDIT"
          title={
            <>
              Shop our <em>goodness.</em>
            </>
          }
          description="Thoughtful millet treats for everyday moments and festive gifting."
        />
        <ProductGrid />
        <p className="price-note">
          Millet Laddus: ₹1,000 each. Diwali Hamper: ₹1,000 each before the 20%
          festive discount.
        </p>
      </section>
      <section className="checkout-section page-section">
        <div className="page-heading">
          <span className="section-kicker">SECURE CHECKOUT</span>
          <h2>
            Bring home a little <em>goodness.</em>
          </h2>
          <p>
            Choose quantities, review the total and pay securely through
            Razorpay.
          </p>
        </div>
        <CheckoutPanel />
      </section>
    </>
  );
}
