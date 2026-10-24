import { Mail, MapPin, Phone } from "lucide-react";
import CheckoutPanel from "../components/CheckoutPanel.jsx";
export default function Contact() {
  return (
    <section className="page-section contact-page">
      <div className="page-heading">
        <span className="section-kicker">LET'S CONNECT</span>
        <h1>
          Let's make something <em>good.</em>
        </h1>
        <p>
          For product questions, festive gifting, bulk orders or partnerships,
          get in touch.
        </p>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <div
            onClick={() =>
              (window.location.href = "mailto:earthyngreen@gmail.com")
            }
            style={{ cursor: "pointer" }}
          >
            <Mail />
            <span>
              <b>Email</b>
              <a
                href="mailto:earthyngreen@gmail.com"
                onClick={(e) => e.stopPropagation()}
              >
                earthyngreen@gmail.com
              </a>
            </span>
          </div>
          <div
            onClick={() =>
              window.open(
                "https://wa.me/919876543210",
                "_blank",
                "noopener,noreferrer",
              )
            }
            style={{ cursor: "pointer" }}
          >
            <Phone />
            <span>
              <b>Phone / WhatsApp</b>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                +91 92113 45600
              </a>
            </span>
          </div>

          <div
            onClick={() =>
              window.open(
                "https://www.google.com/maps?ll=28.612598,77.392232&z=10&t=m&hl=en-GB&gl=US&mapclient=embed&q=A+226+Transport+Nagar+Sector+69+Noida+201301",
                "_blank",
                "noopener,noreferrer",
              )
            }
            style={{ cursor: "pointer" }}
          >
            <MapPin />
            <span>
              <b>Location</b>
              <a
                href="https://www.google.com/maps?ll=28.612598,77.392232&z=10&t=m&hl=en-GB&gl=US&mapclient=embed&q=A+226+Transport+Nagar+Sector+69+Noida+201301"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                A-264, B Block Rd, Chotpur, G Block, Sector 69, Noida, Uttar Pradesh 201309
              </a>
            </span>
          </div>
        </div>
        <CheckoutPanel />
      </div>
    </section>
  );
}
