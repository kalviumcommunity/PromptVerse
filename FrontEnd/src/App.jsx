import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./Pages/HomePage";
// import ModalForm from "./Components/ModalForm";
import ModalPage from "./Components/ModalPage";
import "./App.css";

const theme = extendTheme({
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "Open Sans, sans-serif",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<ModalPage />} />
          {/* <Route element={<ModalPage />} /> */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
