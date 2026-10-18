export const products = [
  {
    id: "millet-laddus",
    name: "Millet Laddus",
    type: "OUR SIGNATURE PRODUCT",
    description:
      "Traditional goodness, thoughtfully crafted for festive gifting and mindful moments.",
    price: 100000,
    displayPrice: 1000,
    image: "/millet-laddu-packaging.png",
    tag: "Featured product",
    isDiwaliHamper: false,
  },
  {
    id: "diwali-hamper",
    name: "Diwali Hamper",
    type: "FESTIVE SPECIAL",
    description:
      "A thoughtful festive gift, made for sharing a little more goodness.",
    price: 100000,
    displayPrice: 1000,
    image: "/diwali-hamper.png",
    tag: "20% Diwali offer",
    isDiwaliHamper: true,
  },
];
export const getUnitPricePaise = (product) =>
  Math.round(product.price * (product.isDiwaliHamper ? 0.8 : 1));
export const formatINR = (paise) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(paise / 100);
