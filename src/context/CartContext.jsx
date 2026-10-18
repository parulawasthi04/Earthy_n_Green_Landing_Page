import { createContext, useContext, useMemo, useState } from 'react';
import { products, getUnitPricePaise } from '../data/products.js';
const CartContext = createContext(null);
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const add = (productId) => setItems(old => old.some(i => i.productId === productId) ? old.map(i => i.productId === productId ? { ...i, qty: i.qty + 1 } : i) : [...old, { productId, qty: 1 }]);
  const setQty = (productId, qty) => setItems(old => qty <= 0 ? old.filter(i => i.productId !== productId) : old.map(i => i.productId === productId ? { ...i, qty: Math.min(99, qty) } : i));
  const cart = items.map(i => ({ ...products.find(p => p.id === i.productId), qty: i.qty })).filter(i => i.id);
  const totalPaise = cart.reduce((sum, i) => sum + getUnitPricePaise(i) * i.qty, 0);
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  const value = useMemo(() => ({ cart, add, setQty, totalPaise, count, clear: () => setItems([]) }), [items, totalPaise, count]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export const useCart = () => useContext(CartContext);
