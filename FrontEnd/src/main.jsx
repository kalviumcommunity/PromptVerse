import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <Auth0Provider
      domain="prompt-verse.us.auth0.com"
      clientId="2XRl73hk3fjMQt96LxKmjhVFCaxxgF8E"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </ChakraProvider>
);
