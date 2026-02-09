// src/pages/Landing/DownloadSection.jsx

import "../../styles/download.css";
import coverImg from "../../assets/images/game2.jpg";          // left card image
import btnDownload from "../../assets/images/dl_btn.png"; // orange button
import btnPlayDemo from "../../assets/images/demobtn.png"; // blue button

const DownloadSection = () => {
  return (
    <section className="download-section" id="download">
      <div className="download-inner">

        {/* LEFT – GAME CARD */}
        <div className="download-card">
          <img
            src={coverImg}
            alt="Siklab cover"
            className="download-card-image"
          />
        </div>

        {/* RIGHT – IMAGE BUTTONS */}
        <div className="download-buttons">
          <h2 className="download-heading">Download Demo</h2>
          <p className="download-caption">
            Choose how you want to play Siklab.
          </p>

          <a href="#apk" className="image-btn">
            <img src={btnDownload} alt="Download APK" />
          </a>

          <a href="#web-demo" className="image-btn">
            <img src={btnPlayDemo} alt="Play Demo on Website" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
