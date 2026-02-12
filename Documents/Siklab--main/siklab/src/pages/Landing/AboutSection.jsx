import "../../styles/about.css";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">

      {/* ABOUT CARD */}
      <div className="about-card">
        <h2 className="about-title">About</h2>

        <p className="about-text">
          SIKLAB is an immersive, top-down adventure that rescues Philippine
          history from dusty textbooks and drops it into a vibrant digital world.
          Embark on a legendary trek from National University Dasmariñas to the
          heart of Intramuros, navigating a landscape where real-world landmarks,
          kalye traditions, and folklore collide.
        </p>

        <p className="about-text">
          Along the way, you’ll engage with diverse NPCs, tackle historical
          challenges, and collect rare Mythology Cards that preserve the spirits
          and stories of our past.
        </p>

        <p className="about-text">
          By blending gamification with augmented reality, SIKLAB transforms
          learning from boring memorization into a journey of discovery. It’s
          more than just a game; it’s a modern digital archive designed to spark
          cultural pride and turn every player into a hero of their own heritage.
        </p>
      </div>

      {/* STORY IMAGES CARD */}
      <div className="story-images-card">
        <div className="story-images">
          <img src="/story1.png" alt="Scene 1" />
          <img src="/story2.png" alt="Scene 2" />
          <img src="/story3.png" alt="Scene 3" />
          <img src="/story4.png" alt="Scene 4" />
        </div>
      </div>

      {/* STORY DESCRIPTION CARD */}
      <div className="story-description-card">
        <h2 className="story-title">Story</h2>

        <p className="story-text">
          When a student in the NUD library slips through a mysterious distortion,
          they awaken within fragmented echoes of the Philippine past. From the
          quiet unrest of Cavite to the heavy corridors of Malacañang, every
          landmark feels like a pre-designed puzzle where artifacts and clues
          wait to be discovered.
        </p>

        <p className="story-text">
          Townsfolk speak in riddles of a long-awaited arrival, and every
          challenge reveals another piece of an unseen design. While the path
          points toward Rizal, a deeper force hides behind every flickering
          candle and whispered revolution.
        </p>

        <p className="story-text">
          You aren’t just visiting history — you are the key to a mystery older
          than the nation itself. What power is drawing you into the past, and to
          what end?
        </p>
      </div>

    </section>
  );
};

export default AboutSection;
