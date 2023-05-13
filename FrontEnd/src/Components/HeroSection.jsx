import { Text, Box, Flex, Button } from "@chakra-ui/react";
import { MdAddCircle, MdOpenInNew } from "react-icons/md";
import heroimage from "./assets/heroimage.svg";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  let x = Infinity;

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
      <Box maxWidth="90%" paddingBottom={{ base: "48px", md: 0 }}>
        <Box paddingBottom="36px" height="110px">
          {/* Dynamic Text */}
          <Text
            fontSize={{ base: "30px", md: "46px" }}
            fontWeight="bold"
            bgGradient="linear-gradient(90.02deg, #01CFC7 0.01%, #6C63FF 32.08%, #00D2C6 64.88%, #6C63FF 98.2%)"
            bgClip="text"
            color="transparent"
          >
            <TypeAnimation
              sequence={[
                "Midjourney Prompts",
                1500,
                "Dall-E Prompts",
                1500,
                "Stable Diffusion Prompts",
                1500,
                "ChatGPT Prompts",
                1500,
              ]}
              cursor={true}
              deletionSpeed={20}
              speed={15}
              repeat={x}
            />
          </Text>
        </Box>

        {/* Title */}
        <Box
          fontSize={{ base: "24px", md: "36px" }}
          fontWeight="extrabold"
          paddingBottom="4px"
          color="#333333"
          minHeight="50px"
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
            <MdAddCircle size={24} />
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
            <MdOpenInNew size={20} />
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
          style={{ marginLeft: "12%" }}
          width="88%"
          height="90%"
        />
      </Box>
    </Flex>
  );
};

export default HeroSection;
