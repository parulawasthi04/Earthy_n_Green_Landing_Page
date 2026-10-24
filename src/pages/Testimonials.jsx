import { useEffect } from "react";
import "../styles/testimonials.css";

const reels = [
  {
    title: "Customer Reel 1",
    url: "https://www.instagram.com/p/DezJh8pyz6R/",
  },
  {
    title: "Customer Reel 2",
    url: "https://www.instagram.com/p/DetzcfXyCCX/",
  },
  {
    title: "Customer Reel 3",
    url: "https://www.instagram.com/p/DeOKzFlCO7c/",
  },
];

export default function Testimonials() {
  useEffect(() => {
    const scriptId = "instagram-embed-script";

    const processEmbeds = () => {
      window.instgrm?.Embeds?.process();
    };

    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = processEmbeds;
      document.body.appendChild(script);
    } else {
      processEmbeds();
    }

    return undefined;
  }, []);

  return (
    <section className="page-section instagram-testimonials">
      <div className="page-heading">
        <span className="section-kicker">
          REAL MOMENTS, SHARED WITH PERMISSION
        </span>

        <h1>
          Goodness is better <em>when shared.</em>
        </h1>

        <p>
          A little glimpse of the love, goodness and joy
          shared by our community.
        </p>
      </div>

      <div className="instagram-reel-grid">
        {reels.map((reel) => (
          <article className="instagram-reel-card" key={reel.title}>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={reel.url}
              data-instgrm-version="14"
            >
              <a
                href={reel.url}
                target="_blank"
                rel="noreferrer"
              >
                Watch this Reel on Instagram
              </a>
            </blockquote>
          </article>
        ))}
      </div>

      <div className="instagram-follow">
        <p>More goodness, straight from our Instagram.</p>

        <a
          href="https://www.instagram.com/officialearthyngreen/"
          target="_blank"
          rel="noreferrer"
          className="instagram-follow-btn"
        >
          Follow us on Instagram ↗
        </a>
      </div>
    </section>
  );
}
