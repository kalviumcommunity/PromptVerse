import { Box, Flex, Button, Link } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import logo from "./assets/logo1.svg";

const NavBar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      document.getElementById("auth-button").textContent = "Logout";
    } else {
      document.getElementById("auth-button").textContent = "Register / Login";
    }
  }, [isAuthenticated]);

  const handleButtonClick = () => {
    if (isAuthenticated) {
      logout({ logoutParams: { returnTo: window.location.origin } });
    } else {
      loginWithRedirect();
    }
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      color="#333333"
      px={{ base: "5%", md: "5%" }}
      py={{ base: "20px", md: "40px" }}
      mx="auto"
    >
      <Flex alignItems="center">
        <Box
          height={{ base: "32px", md: "auto" }}
          width={{ base: "32px", md: "auto" }}
          position="relative"
          mt="0.8%"
        >
          <img
            src={logo}
            alt="image"
            style={{ marginRight: "10%" }}
            width="82%"
            height="82%"
          />
        </Box>
        <Box fontSize={{ base: "20px", md: "34px" }} fontWeight="bold">
          PromptVerse
        </Box>
        <Link
          href="https://learnprompting.org/docs/intro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="link"
            color="#6C63FF"
            fontSize={{ base: "14px", md: "17px" }}
            fontWeight="bold"
            pt="4px"
            ml={{ base: "16px", md: "48px" }}
            mb={{ base: "8px", md: "0" }}
            display={{ base: "none", md: "block" }}
          >
            Learn
          </Button>
        </Link>
        <Link href="#" onClick={handleScrollToBottom}>
          <Button
            variant="link"
            color="#6C63FF"
            fontSize={{ base: "14px", md: "17px" }}
            fontWeight="bold"
            pt="4px"
            ml={{ base: "10px", md: "36px" }}
            mb={{ base: "8px", md: "0" }}
            display={{ base: "none", md: "block" }}
          >
            About
          </Button>
        </Link>
      </Flex>
      <Button
        variant="solid"
        bg="#6C63FF"
        color="white"
        fontSize={{ base: "12px", md: "16px" }}
        fontWeight="bold"
        borderRadius="3"
        px="16px"
        py="10px"
        _hover={{}}
        _focus={{}}
        _active={{}}
        onClick={handleButtonClick}
        id="auth-button"
      />
    </Flex>
  );
};

export default NavBar;
