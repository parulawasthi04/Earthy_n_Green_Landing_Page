import { HeartHandshake, Sprout, Sun } from "lucide-react";
export default function OurStory() {
  return (
    <section className="page-section story-page">
      <div className="page-heading">
        <span className="section-kicker">OUR STORY · OUR PURPOSE</span>
        <h1>
          Small choices.
          <br />A <em>greater connection.</em>
        </h1>
        <p>
          What we eat, how we farm, and the health of our soil are more
          connected than we think.
        </p>
      </div>
      <div className="story-page-grid">
        <img
          className="story-page-photo"
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85"
          alt="Agricultural fields"
        />
        <div className="story-accordions">
          <details className="story-accordion" open>
            <summary>
              <span className="story-summary-icon">
                <Sprout size={19} />
              </span>
              <span className="story-summary-copy">
                <strong>
                  The Unspoken <em>Connection.</em>
                </strong>
                <small>How food, farming and soil connect us all</small>
              </span>
              <span className="accordion-icon">+</span>
            </summary>
            <div className="accordion-content">
              <p>
                The world—and India in particular—faces three silent yet
                critical crises: widespread malnutrition in rural communities,
                widespread unhealthy eating in urban centers, and the alarming
                decline of soil fertility across our farmlands. At first glance,
                these challenges seem separate, but they are deeply
                interconnected. The food we grow, how we nourish our soils, and
                what we choose to put on our plates form a single loop. Earthy n
                Green was founded on a simple conviction: by fixing the way we
                eat, we can restore the health of our people and our planet.
              </p>
            </div>
          </details>
          <details className="story-accordion">
            <summary>
              <span className="story-summary-icon">
                <HeartHandshake size={19} />
              </span>
              <span className="story-summary-copy">
                <strong>
                  A Purpose-Driven <em>Choice.</em>
                </strong>
                <small>Good food with a greater purpose</small>
              </span>
              <span className="accordion-icon">+</span>
            </summary>
            <div className="accordion-content">
              <p>
                We are an impact-first business creating a direct bridge between
                conscious consumers and farmer organizations. Every grain of
                millet we source comes directly from local farmer collectives,
                ensuring fair prices and sustainable livelihoods at the roots.
                To complete the cycle of restoration, we reinvest our profits
                directly into sustainable soil-regeneration practices. Whether
                you are a long-time advocate seeking pure millet grains and
                stone-ground flours, or someone taking their first step toward
                mindful eating with our handcrafted, ready-to-eat millet laddus,
                we make it simple to integrate ancient grains into modern lives.
              </p>
            </div>
          </details>
          <details className="story-accordion">
            <summary>
              <span className="story-summary-icon">
                <Sun size={19} />
              </span>
              <span className="story-summary-copy">
                <strong>
                  Our Journey <em>Ahead.</em>
                </strong>
                <small>A million laddus, one mindful mission</small>
              </span>
              <span className="accordion-icon">+</span>
            </summary>
            <div className="accordion-content">
              <p>
                Our mission is straightforward: to make millets a natural, daily
                choice for every household. As a first milestone on this
                journey, we have set an ambitious goal to share 1 million millet
                laddus—one million healthy, guilt-free moments that spark a
                habit of wellness. Beyond this, we are building Earthy n Green
                to be your trusted gateway to a complete range of millet-based
                foods. Every bite you take is more than just good nutrition—it
                is an active step toward a healthier body, empowered farmers,
                and living soil.
              </p>
            </div>
          </details>
        </div>
      </div>
      <p className="story-signoff">
        Better choices for today. A more thoughtful tomorrow.
      </p>
    </section>
  );
}
