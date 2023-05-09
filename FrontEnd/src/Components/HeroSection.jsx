import { Text, Box, Flex, Button } from "@chakra-ui/react";
import { AddCircleRounded, OpenInNewRounded } from "@mui/icons-material";
import heroimage from "./assets/heroimage.svg";

const HeroSection = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      bg="#FFFFFF"
      maxWidth="1440px"
      mx="auto"
      px="2%"
      py={{ base: "0.5", sm: "20px" }}
      flexDirection={{ base: "column-reverse", md: "row" }}
    >
      {/* Left section */}
      <Box maxWidth="50%" paddingBottom={{ base: "48px", md: 0 }}>
        {/* Dynamic Text */}
        <Box paddingBottom="36px">
          <Text
            fontSize={{ base: "30px", md: "42px" }}
            fontWeight="bold"
            bgGradient="linear-gradient(90.02deg, #01CFC7 0.01%, #6C63FF 32.08%, #00D2C6 64.88%, #6C63FF 98.2%)"
            bgClip="text"
            color="transparent"
          >
            Midjourney, ChatGPT, Dall-E
          </Text>
        </Box>

        {/* Title */}
        <Box
          fontSize={{ base: "24px", md: "36px" }}
          fontWeight="extrabold"
          paddingBottom="4px"
          color="#333333"
        >
          Discover the Power of AI Prompts
        </Box>

        {/* Subtitle */}
        <Box
          fontSize="24px"
          fontWeight="bold"
          paddingBottom="12px"
          color="#333333"
        >
          Join our AI prompt community
        </Box>

        {/* Description */}
        <Box fontSize="14px" paddingBottom="28px" color="#333333">
          <Text>
            Elevate your conversations with our collection of AI prompts. Share
            your unique
          </Text>
          <Text>
            perspective with the world and add your own thought-provoking
            prompts and
          </Text>
          <Text>spark new conversations today!</Text>
        </Box>

        {/* Buttons */}
        <Flex>
          {/* Add Prompts Button */}
          <Button
            variant="solid"
            color="white"
            bg="#6C63FF"
            padding="10px 16px"
            marginRight={{ base: 0, md: "28px" }}
            borderRadius="3px"
            _hover={{ color: "none" }}
          >
            <Text fontSize="14px" fontWeight="bold" pr="8px">
              Add Prompts
            </Text>
            <AddCircleRounded />
          </Button>

          {/* Learn Prompting Button */}
          <Button
            variant="solid"
            color="#6C63FF"
            bg="#E5E3FF"
            padding="10px 16px"
            borderRadius="3px"
            border="0.5px solid rgba(205, 205, 205, 0.1)"
            _hover={{ color: "none" }}
          >
            <Text fontSize="14px" fontWeight="bold" pr="8px">
              Learn Prompting
            </Text>
            <OpenInNewRounded />
          </Button>
        </Flex>
      </Box>

      {/* Right section */}
      <Box
        position="relative"
        height={{ base: "240px", md: "auto" }}
        width={{ base: "100%", md: "50%" }}
      >
        <img
          src={heroimage}
          alt="image"
          style={{ marginLeft: "16%" }}
          width="84%"
          height="84%"
        />
      </Box>
    </Flex>
  );
};

export default HeroSection;
