import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import MidjourneyPrompts from "../Components/MidJourney";
import GptPrompts from "../Components/ChatGpt";
import StableDiffusion from "../Components/StableDiffusion";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <MidjourneyPrompts />
      <GptPrompts />
      <StableDiffusion />
      <Footer />
    </div>
  );
};

export default HomePage;
