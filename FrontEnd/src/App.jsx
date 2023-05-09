import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";

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
      </div>
    </ChakraProvider>
  );
}

export default App;
