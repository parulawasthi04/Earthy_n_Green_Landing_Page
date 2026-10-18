import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import AnnouncementBar from "./components/AnnouncementBar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import OurStory from "./pages/OurStory.jsx";
import OurProducts from "./pages/OurProducts.jsx";
import OurImpact from "./pages/OurImpact.jsx";
import Contact from "./pages/Contact.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Congratulations from "./components/Congratulations.jsx";

export default function App() {
  return (
    <CartProvider>
      <AnnouncementBar />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/products" element={<OurProducts />} />
          <Route path="/impact" element={<OurImpact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/congratulations" element={<Congratulations />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </CartProvider>
  );
}
