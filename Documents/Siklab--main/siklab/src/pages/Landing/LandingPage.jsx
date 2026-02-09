import MainLayout from "../../layouts/MainLayout";
import HeroSection from "./HeroSection";
import CollectibleSection from "./CollectiblesSection";
import MapSection from "./MapSection";
import DownloadSection from "./DownloadSection";
import ScenerySection from "./ScenerySection";

const LandingPage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <ScenerySection />
      <DownloadSection />
      <CollectibleSection />
      <MapSection />
    </MainLayout>

    
  );
};

export default LandingPage;
