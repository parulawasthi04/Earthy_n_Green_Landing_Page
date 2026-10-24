
import { HeartHandshake, Sprout, Sun } from "lucide-react";
import "../styles/story.css";

const storyItems = [
  {
    icon: Sprout,
    title: <>The Unspoken <em>Connection.</em></>,
    subtitle: "How food, farming and soil connect us all",
    content:
      "The world—and India in particular—faces three silent yet critical crises: widespread malnutrition in rural communities, unhealthy eating in urban centres, and the alarming decline of soil fertility across our farmlands. At first glance, these challenges seem separate, but they are deeply interconnected. The food we grow, how we nourish our soils, and what we choose to put on our plates form a single loop. Earthy n Green was founded on a simple conviction: by improving the way we eat, we can support the health of our people and our planet.",
  },
  {
    icon: HeartHandshake,
    title: <>A Purpose-Driven <em>Choice.</em></>,
    subtitle: "Good food with a greater purpose",
    content:
      "We are an impact-first business creating a direct bridge between conscious consumers and farmer organisations. We source millet from local farmer collectives, supporting fair prices and sustainable livelihoods. We also aim to support soil-regeneration practices. Whether you are exploring traditional grains or taking your first step towards mindful eating with our handcrafted millet laddus, we want to make it easier to bring ancient grains into modern lives.",
  },
  {
    icon: Sun,
    title: <>Our Journey <em>Ahead.</em></>,
    subtitle: "A million laddus, one mindful mission",
    content:
      "Our mission is to make millets a more natural, everyday choice for households. As our first milestone, we aspire to share one million millet laddus—one million moments that encourage more mindful food choices. Beyond this, we hope to grow Earthy n Green into a trusted destination for millet-based foods. Every thoughtful choice can support a healthier lifestyle, farmer communities, and more responsible farming.",
  },
];

export default function OurStory() {
  return (
    <section className="page-section story-page">
      <div className="story-heading">
        <span className="section-kicker">
          <Sprout size={17} />
          OUR STORY · OUR PURPOSE
        </span>

        <h1>
          Small choices.
          <br />
          A <em>greater connection.</em>
        </h1>

        <p>
          What we eat, how we farm, and the health of our soil
          are more connected than we think.
        </p>
      </div>

      <div className="story-page-grid">
        <div className="story-photo-wrap">
          <img
            className="story-page-photo"
            src="/millet-story.png"
            alt="Millet grains in a wooden bowl with natural greenery"
            loading="lazy"
          />
          <div className="story-photo-caption">
            <Sprout size={17} />
            <span>Rooted in nature. Made with purpose.</span>
          </div>
        </div>

        <div className="story-accordions">
          {storyItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <details
                className="story-accordion"
                key={index}
                open={index === 0}
              >
                <summary>
                  <span className="story-summary-icon">
                    <Icon size={22} strokeWidth={1.7} />
                  </span>

                  <span className="story-summary-copy">
                    <strong>{item.title}</strong>
                    <small>{item.subtitle}</small>
                  </span>

                  <span className="accordion-icon" aria-hidden="true" />
                </summary>

                <div className="accordion-content">
                  <p>{item.content}</p>
                </div>
              </details>
            );
          })}

          <div className="story-signoff">
            <span className="story-signoff-divider">
              <span />
              <Sprout size={18} />
              <span />
            </span>
            <p>Better choices for today. A more thoughtful tomorrow.</p>
          </div>
        </div>
      </div>
    </section>
  );
}