import { Plus, ArrowRight, Tag } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import { formatINR } from "../data/products.js";
export default function ProductCard({ product }) {
  const { add } = useCart();
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.parentElement.classList.add("image-fallback");
          }}
        />
        <span className="product-tag">{product.tag}</span>
        {product.isDiwaliHamper && (
          <span className="discount-pill">
            <Tag size={12} /> 20% OFF
          </span>
        )}
        <button
          className="quick-add"
          onClick={() => add(product.id)}
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus size={20} />
        </button>
        <span className="image-fallback-label">✦ Earthy n Green ✦</span>
      </div>
      <div className="product-info">
        <span className="product-type">{product.type}</span>
        <div className="product-title-row">
          <h3>{product.name}</h3>
          <span className="product-price">
            {formatINR(product.price * (product.isDiwaliHamper ? 0.8 : 1))}
            {product.isDiwaliHamper && <del>{formatINR(product.price)}</del>}
          </span>
        </div>
        <p>{product.description}</p>
        <button className="text-link" onClick={() => add(product.id)}>
          Add to your order <ArrowRight size={15} />
        </button>
      </div>
    </article>
  );
}
