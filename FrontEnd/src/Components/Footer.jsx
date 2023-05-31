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
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "./assets/logo1.svg";
import PropTypes from "prop-types";

const Logo = () => {
  return (
    <Link href="#">
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
    </Link>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.span
      display="inline-block"
      position="relative"
      zIndex={0}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        opacity: 0,
        transition: "opacity 0.3s ease",
        bg: useColorModeValue("blackAlpha.100", "whiteAlpha.100"),
        borderRadius: "full",
      }}
      _hover={{
        _before: {
          opacity: 1,
        },
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <chakra.span>{children}</chakra.span>
      </Link>
    </chakra.span>
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
            <SocialButton
              label={"GitHub"}
              href={"https://github.com/leovaldez08/"}
            >
              <FaGithub size={30} />
            </SocialButton>
            <SocialButton
              label={"LinkedIn"}
              href={"https://www.linkedin.com/in/rishi-ganesh/"}
            >
              <FaLinkedin size={30} />
            </SocialButton>
            <SocialButton
              label={"Twitter"}
              href={"https://twitter.com/Rishi_Ganesh_I/"}
            >
              <FaTwitter size={30} />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com/leo_valdez_28/"}
            >
              <FaInstagram size={30} />
            </SocialButton>
            <SocialButton
              label="Buy me a coffee"
              href={"https://www.buymeacoffee.com/rishiganesh/"}
            >
              <img
                src="https://res.cloudinary.com/dosqxcotq/image/upload/v1684041342/PromptVerse%20Assets/BMC/bmc-logo-yellow_1_1_mewyii.png"
                alt="Buy Me A Coffee"
                style={{ height: 34, width: 32 }}
              />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

SocialButton.propTypes = {
  children: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Footer;
