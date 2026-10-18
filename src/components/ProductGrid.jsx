import { products } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";
export default function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
