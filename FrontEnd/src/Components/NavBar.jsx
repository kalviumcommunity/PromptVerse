import { Box, Flex, Button } from "@chakra-ui/react";
// import logo from "./assets/logo1.svg";
import logo from "./assets/logo2.svg";

const NavBar = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      color="#333333"
      px={{ base: "4%", md: "2%" }}
      py={{ base: "20px", md: "40px" }}
      maxWidth="1440px"
      mx="auto"
    >
      <Flex alignItems="center">
        <Box
          height={{ base: "32px", md: "auto" }}
          width={{ base: "32px", md: "50%" }}
          position="relative"
          mt="0.8%"
        >
          <img
            src={logo}
            alt="image"
            style={{ marginRight: "12%" }}
            width="84%"
            height="90%"
          />
        </Box>
        <Box fontSize={{ base: "20px", md: "34px" }} fontWeight="bold">
          PromptVerse
        </Box>
        <Button
          variant="link"
          color="#6C63FF"
          fontSize={{ base: "12px", md: "16px" }}
          fontWeight="bold"
          pt="4px"
          ml={{ base: "16px", md: "48px" }}
          display={{ base: "none", md: "block" }}
        >
          Learn
        </Button>
        <Button
          variant="link"
          color="#6C63FF"
          fontSize={{ base: "12px", md: "16px" }}
          fontWeight="bold"
          pt="4px"
          ml={{ base: "10px", md: "30px" }}
          display={{ base: "none", md: "block" }}
        >
          About
        </Button>
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
      >
        Register / Login
      </Button>
    </Flex>
  );
};

export default NavBar;
