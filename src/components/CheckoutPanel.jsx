
import { Minus, Plus, PackageCheck, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { formatINR } from '../data/products.js';

export default function CheckoutPanel() {
  const { cart, setQty, totalPaise } = useCart();
  const navigate = useNavigate();

  function payNow() {
    if (!cart.length) {
      return;
    }

    // DEMO ONLY: No Razorpay checkout or real payment is initiated.
    navigate('/congratulations');
  }

  return (
    <div className="order-panel">
      <div className="order-panel-head">
        <span className="order-panel-icon">
          <PackageCheck />
        </span>
        <div>
          <h3>Your cart</h3>
          <p>Review your selection before continuing.</p>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          Your cart is empty. Add Millet Laddus or a Diwali Hamper to begin.
        </div>
      ) : (
        <div className="cart-summary">
          <b>Your selection</b>

          {cart.map((item) => {
            const unitPrice = Math.round(
              item.price * (item.isDiwaliHamper ? 0.8 : 1)
            );

            return (
              <div className="cart-row" key={item.id}>
                <span className="cart-product-name">
                  {item.name}
                  <small>
                    {formatINR(unitPrice)} each
                    {item.isDiwaliHamper ? ' · 20% off' : ''}
                  </small>
                </span>

                <div className="qty-controls">
                  <button
                    onClick={() => setQty(item.id, item.qty - 1)}
                    aria-label={`Decrease ${item.name} quantity`}
                  >
                    <Minus size={13} />
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => setQty(item.id, item.qty + 1)}
                    aria-label={`Increase ${item.name} quantity`}
                  >
                    <Plus size={13} />
                  </button>
                </div>

                <strong>{formatINR(unitPrice * item.qty)}</strong>
              </div>
            );
          })}
        </div>
      )}

      <div className="checkout-total">
        <span>Total payable</span>
        <strong>{formatINR(totalPaise)}</strong>
      </div>

      <button
        className="button button-dark submit-button"
        onClick={payNow}
        disabled={!cart.length}
      >
        Proceed securely with payment <span>→</span>
      </button>

      <p className="form-legal">
        <ShieldCheck size={14} />
        Demo checkout only. No payment will be collected.
      </p>
    </div>
  );
}
