import { useRef } from "react";
import "../../styles/scenery.css";

// ⬇️ Replace these imports with your actual image paths
import gomBurzaImg from "../../assets/images/gomburza.png";
import naiaImg from "../../assets/images/naia.png";
import museumImg from "../../assets/images/nationalmuseum.png";
import intramurosImg from "../../assets/images/intramuros.png";
import malacanImg from "../../assets/images/malacanang.png";

const SCENES = [
  {
    id: 1,
    name: "GomBurza",
    image: gomBurzaImg,
  },
  {
    id: 2,
    name: "NAIA",
    image: naiaImg,
  },
  {
    id: 3,
    name: "National Museum",
    image: museumImg,
  },
  {
    id: 4,
    name: "Intramuros",
    image: intramurosImg,
  },
  {
    id: 5,
    name: "Malacañang",
    image: malacanImg,},
];

const ScenerySection = () => {
  const carouselRef = useRef(null);

  const scrollByCard = (direction) => {
    const container = carouselRef.current;
    if (!container) return;

    // scroll roughly one card at a time
    const scrollAmount = container.clientWidth * 0.6;
    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="scenery-section" id="scenery">
      <div className="scenery-inner">
        {/* TITLE  */}
        <header className="scenery-header">
          <h2 className="scenery-title">Scenery</h2>
          <p className="scenery-subtitle">
            Key locations you can visit in Siklab’s low-poly world.
          </p>
        </header>

        {/* CAROUSEL */}
        <div className="scenery-carousel-wrapper">
          <button
            type="button"
            className="scenery-arrow left"
            onClick={() => scrollByCard("prev")}
            aria-label="Previous scenery"
          >
            ‹
          </button>

          <div className="scenery-carousel" ref={carouselRef}>
            {SCENES.map((scene) => (
              <article className="scenery-card" key={scene.id}>
                <div className="scenery-card-glass">
                  <div className="scenery-image-wrap">
                    <img
                      src={scene.image}
                      alt={scene.name}
                      className="scenery-image"
                    />
                  </div>

                  <button type="button" className="scenery-pill">
                    {scene.name}
                  </button>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="scenery-arrow right"
            onClick={() => scrollByCard("next")}
            aria-label="Next scenery"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScenerySection;
