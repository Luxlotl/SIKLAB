import "../../styles/collectibles.css";
import { useState } from "react";

const TRINKETS = [
  {
    id: 1,
    name: "Gumamela Charm",
    short: "A bright red gumamela keychain.",
    lore:
      "Inspired by the gumamela often found in old town plazas. It symbolizes resilience and everyday beauty in Filipino life.",
  },
  {
    id: 2,
    name: "Sampaguita Loop",
    short: "A ring of tiny white blossoms.",
    lore:
      "Represents purity and the humble strength of national identity. Often sold near churches and plazas.",
  },
  {
    id: 3,
    name: "Sunburst Pendant",
    short: "A golden flower with a warm glow.",
    lore:
      "Echoes the sun on the Philippine flag. Collecting it unlocks trivia about heroes from different provinces.",
  },
  {
    id: 4,
    name: "Festival Rosette",
    short: "A layered rosette for celebrations.",
    lore:
      "Found during in-game fiestas. It highlights how local festivals keep history and tradition alive.",
  },
  {
    id: 5,
    name: "Lantern Bloom",
    short: "A flower with lantern-like petals.",
    lore:
      "Lights up hidden facts in the collectibles menu, guiding players to lesser-known events and figures.",
  },
  {
    id: 6,
    name: "Field Daisy Pin",
    short: "A simple yellow daisy pin.",
    lore:
      "Appears in quieter story moments, reminding players that history isn’t only big battles—it’s everyday lives, too.",
  },
];

function TrinketCard({ trinket }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <button
      className={`trinket-card ${isFlipped ? "is-flipped" : ""}`}
      onClick={handleClick}
      type="button"
    >
      <div className="trinket-card-inner">
        {/* FRONT */}
        <div className="trinket-card-face trinket-card-front">
          <div className="trinket-icon" />
          <h3>{trinket.name}</h3>
          <p>{trinket.short}</p>
          <span className="flip-hint">Click to flip</span>
        </div>

        {/* BACK */}
        <div className="trinket-card-face trinket-card-back">
          <h3>{trinket.name}</h3>
          <p>{trinket.lore}</p>
          <span className="flip-hint">Click to flip back</span>
        </div>
      </div>
    </button>
  );
}

const CollectiblesSection = () => {
  return (
    <section className="collectibles-section" id="collectibles">
      <div className="collectibles-inner">
        {/* LEFT PANEL */}
        <div className="collectibles-info">
          <h2 className="collectibles-label">Collectibles</h2>
          <h1 className="collectibles-title">Trinkets</h1>

          <p className="collectibles-text">
            In-game trinkets are collectible items that players can find during
            the adventure. Each trinket represents a piece of history, culture,
            or lore, and can be viewed in a dedicated menu to show descriptions,
            origins, and their significance.
          </p>
          <p className="collectibles-text">
            These collectibles help players track what they&apos;ve discovered
            and deepen the connection to the lessons hidden throughout the game.
          </p>
        </div>

        {/* RIGHT PANEL – GRID OF FLIP CARDS */}
        <div className="collectibles-grid-panel">
          <div className="collectibles-grid">
            {TRINKETS.map((t) => (
              <TrinketCard key={t.id} trinket={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectiblesSection;
