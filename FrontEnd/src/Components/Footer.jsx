import {
  Box,
  chakra,
  Container,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import logo from "./assets/logo1.svg";
import PropTypes from "prop-types";

const Logo = () => {
  return (
    <a href="#">
      <Flex mb="24px" mt="24px">
        <img src={logo} alt="logo" />
        <Text
          fontSize={{ base: "20px", md: "34px" }}
          fontWeight="Bold"
          ml="12px"
        >
          PromptVerse
        </Text>
      </Flex>
    </a>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box bg="black" color="white" mt="120px">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
        mb="24px"
      >
        <Logo />
        <Stack direction={"row"} spacing={6} textAlign="center">
          <Link href={"#"}>Privacy Policy</Link>
          <Link href={"#"}>Terms & Conditions</Link>
          <Link
            href={`https://wa.me/9344981500/?text=${encodeURIComponent(
              "Hey there!"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text fontSize="16px">© 2022 PromptVerse. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Github"}>
              <a
                href="https://github.com/leovaldez08"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={32} />
              </a>
            </SocialButton>
            <SocialButton label="Instagram">
              <a
                href="https://www.instagram.com/leo_valdez_28/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={32} />
              </a>
            </SocialButton>
            <SocialButton label="Twitter">
              <a
                href="https://twitter.com/Rishi_Ganesh_I"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={32} />
              </a>
            </SocialButton>
            <SocialButton label="Buy me a coffee">
              <a
                href="https://www.buymeacoffee.com/rishiganesh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dosqxcotq/image/upload/v1684041342/PromptVerse%20Assets/BMC/bmc-logo-yellow_1_1_mewyii.png"
                  alt="Buy Me A Coffee"
                  style={{ height: 34, width: 32 }}
                />
              </a>
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

SocialButton.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.func,
};

export default Footer;
