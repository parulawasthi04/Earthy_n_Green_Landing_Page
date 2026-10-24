export const products = [
  {
    id: "barnyard-millet",
    name: "Barnyard Millet",
    type: "HEALTHY MILLET",
    description:
      "Nutritious Barnyard Millet, a traditional grain for wholesome everyday meals.",
    price: 100000,
    displayPrice: 100,
    image: "/Barnyard-Millet.png",
    tag: "Traditional Grains",
    isDiwaliHamper: false,
  },
  {
    id: "browntop-millet",
    name: "Browntop Millet",
    type: "HEALTHY MILLET",
    description:
      "Browntop Millet, a traditional grain to bring variety to your everyday meals.",
    price: 10000,
    displayPrice: 100,
    image: "/Browntop-Millet.png",
    tag: "Traditional Grains",
    isDiwaliHamper: false,
  },
  {
    id: "finger-millet",
    name: "Finger Millet (Ragi)",
    type: "HEALTHY MILLET",
    description:
      "Finger Millet, also known as Ragi, is a versatile traditional grain for everyday recipes.",
    price: 10000,
    displayPrice: 100,
    image: "/Finger-Millet.png",
    tag: "Traditional Grains",
    isDiwaliHamper: false,
  },
  {
    id: "foxtail-millet",
    name: "Foxtail Millet",
    type: "HEALTHY MILLET",
    description:
      "Foxtail Millet, a versatile traditional grain for wholesome everyday cooking.",
    price: 10000,
    displayPrice: 100,
    image: "/Foxtail-Millet.png",
    tag: "Traditional Grains",
    isDiwaliHamper: false,
  },
  {
    id: "kodo-millet",
    name: "Kodo Millet",
    type: "HEALTHY MILLET",
    description:
      "Kodo Millet, a traditional grain for adding variety to your daily meals.",
    price: 10000,
    displayPrice: 100,
    image: "/Kodo-Millet.png",
    tag: "Traditional Grains",
    isDiwaliHamper: false,
  },
  {
    id: "little-millet",
    name: "Little Millet",
    type: "HEALTHY MILLET",
    description:
      "Little Millet, a versatile traditional grain suited to a variety of everyday recipes.",
    price: 10000,
    displayPrice: 100,
    image: "/Little-Millet.png",
    tag: "Traditional Grains",
    isDiwaliHamper: false,
  },
  {
    id: "proso-millet",
    name: "Proso Millet",
    type: "HEALTHY MILLET",
    description:
      "Proso Millet, a traditional grain for wholesome and versatile everyday meals.",
    price: 10000,
    displayPrice: 100,
    image: "/Proso-Millet.png",
    tag: "Traditional Grains",
    isDiwaliHamper: false,
  },
  {
    id: "millet-utsav",
    name: "Millet Utsav",
    type: "DIWALI GIFT COLLECTION",
    description:
      "16 handcrafted foxtail millet laddus, one packet of Ragi Chips and one packet of Ragi Mixture.",
    price: 109900,
    displayPrice: 1099,
    image: "/milet-utsav.png",
    tag: "Festive Gift Box",
    isDiwaliHamper: false,
  },
  {
    id: "millet-mahotsav",
    name: "Millet Mahotsav",
    type: "DIWALI GIFT COLLECTION",
    description:
      "16 millet laddus in four flavours, plus one packet of Ragi Chips and one packet of Ragi Mixture.",
    price: 119900,
    displayPrice: 1199,
    image: "/milet-mahotsav.png",
    tag: "Festive Gift Box",
    isDiwaliHamper: false,
  },
  {
    id: "millet-mithas",
    name: "Millet Mithas",
    type: "DIWALI GIFT COLLECTION",
    description:
      "12 millet laddus in Coconut, Spice, Chocolate and Classic Foxtail flavours. Ragi Chips and Ragi Mixture are not included.",
    price: 64900,
    displayPrice: 649,
    image: "/milet-mithas.png",
    tag: "Festive Gift Box",
    isDiwaliHamper: false,
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
