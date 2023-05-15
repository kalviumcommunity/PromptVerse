import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import Midjourney from "./Components/MidJourney";
import ChatGpt from "./Components/ChatGpt";
import StableDiffusion from "./Components/StableDiffusion";
import Footer from "./Components/Footer";

const theme = extendTheme({
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "Open Sans, sans-serif",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <NavBar />
        <HeroSection />
        <Midjourney />
        <ChatGpt />
        <StableDiffusion />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
