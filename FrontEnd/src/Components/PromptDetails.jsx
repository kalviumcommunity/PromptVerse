import { Box, Flex, Divider, Image, Text, Badge } from "@chakra-ui/react";
import ImageCarousel from "./ImageCarousel";

const PromptPage = () => {
  return (
    <Flex w="100%" justify="space-between" px="5%">
      <Box w="42%">
        <Image
          src="https://res.cloudinary.com/dosqxcotq/image/upload/v1683950805/DALLE_IMAGES_Py0cMFCOa99UoKVivLFG_resized_1679399318826_1000x1000_jgevsl.webp"
          w="100%"
          h="280px"
          objectFit="cover"
          borderRadius="8px"
        />
        <Text fontSize="28px" fontWeight="bold" mt="12px">
          Doodle Pop Art Illustrations
        </Text>
        <Badge rounded="full" px={2} py={1} colorScheme="teal" fontSize="12px">
          ⛵ Midjourney
        </Badge>
        <Divider
          mt="12px"
          borderBottomWidth="0.8px"
          borderBottomColor="#333333"
        />
        <Text
          fontSize="14px"
          fontStyle="italic"
          color="#787878"
          mb="12px"
          mt="6px"
        >
          Author: Marshall Bruce Mathers
        </Text>
        <Text fontSize="22px" fontWeight="bold">
          Prompt Description
        </Text>
        <Text fontSize="16px" my="12px">
          This prompt generates images of various objects in a doodle style.
          Each image is unique and creatively designed, featuring simple,
          hand-drawn lines and shapes that create a playful, whimsical feel.
          Whether you&apos;re looking for inspiration for your next art project
          or just want to have fun exploring your imagination, this prompt is
          perfect for creating a diverse range of doodle-style images. Perfect
          for profile pics, storybooks, art prints, gifts, concept art and to
          have fun. They have a friendly hand-drawn look and are often found on
          different type of digital design backgrounds. Stop paying for stock
          images for this purpose and generate your own with the type of subject
          that you want.
        </Text>
      </Box>
      <Box
        w="54%"
        bg="white"
        borderRadius="4px"
        border="2px solid black"
        p="3%"
      >
        <Text fontSize="28px" fontWeight="bold" mb="30px">
          Prompt Details
        </Text>
        <Box mb="24px">
          <Text fontSize="18px" fontWeight="bold">
            Model
          </Text>
          <Text fontSize="16px" mt="8px">
            Midjourney v4
          </Text>
        </Box>
        <Box mb="24px">
          <Text fontSize="18px" fontWeight="bold">
            Original Prompt
          </Text>
          <Text fontSize="16px" mt="8px">
            Quirky, imaginative, hand-drawn doodle pop illustrations, whimsical
            characters, surreal, detailed, playful. Abstract, imaginative
            creatures, imaginative landscapes, cartoonish, fun-filled, Vibrant,
            warm, hyper-focused.
          </Text>
        </Box>
        <Box mb="24px">
          <Text fontSize="18px" fontWeight="bold" mb="16px">
            Example Output
          </Text>
          <ImageCarousel />
        </Box>
      </Box>
    </Flex>
  );
};

export default PromptPage;
