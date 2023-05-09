import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";

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
        <NavBar></NavBar>
        <HeroSection></HeroSection>
      </div>
    </ChakraProvider>
  );
}

export default App;
