import { Text, Box, Flex, Button, Link, Image } from "@chakra-ui/react";
import { MdOpenInNew } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import heroimage from "./assets/heroimage.svg";
import ModalForm from "./ModalForm";

const HeroSection = () => {
  let x = Infinity;

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      bg="#FFFFFF"
      mx="auto"
      px={{ base: "4%", md: "5%" }}
      py={{ base: "20px", sm: "40px" }}
      flexDirection={{ base: "column-reverse", md: "row" }}
    >
      <Box
        maxWidth={{ base: "100%", md: "100%" }}
        paddingBottom={{ base: "48px", md: 0 }}
      >
        <Box
          paddingBottom={{ base: "16px", md: "48px" }}
          height={{ base: "60px", md: "110px" }}
        >
          <Text
            fontSize={{ base: "26px", md: "48px" }}
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

        <Box
          fontSize={{ base: "22px", md: "36px" }}
          fontWeight="extrabold"
          paddingBottom="4px"
          color="#333333"
          minHeight="50px"
        >
          Discover the Power of AI Prompts
        </Box>

        <Box
          fontSize={{ base: "18px", md: "24px" }}
          fontWeight="bold"
          paddingBottom="12px"
          color="#333333"
        >
          Join our AI prompt community
        </Box>

        <Box
          fontSize={{ base: "12px", md: "14px" }}
          paddingBottom="28px"
          color="#333333"
        >
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

        <Flex flexDirection={{ base: "column", md: "row" }}>
          <ModalForm />
          <Link
            href="https://learnprompting.org/docs/intro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="solid"
              color="#6C63FF"
              bg="#E5E3FF"
              padding="10px 16px"
              borderRadius="3px"
              border="0.5px solid rgba(205, 205, 205, 0.1)"
              _hover={{}}
              _focus={{}}
              _active={{}}
            >
              <Text fontSize="14px" fontWeight="bold" pr="8px">
                Learn Prompting
              </Text>
              <MdOpenInNew size={20} />
            </Button>
          </Link>
        </Flex>
      </Box>

      <Box
        position="relative"
        height={{ base: "240px", md: "auto" }}
        width={{ base: "100%", md: "50%" }}
      >
        <Image
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
