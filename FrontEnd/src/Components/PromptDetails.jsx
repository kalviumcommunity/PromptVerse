import { Box, Flex, Divider, Image, Text, Badge } from "@chakra-ui/react";
import ImageCarousel from "./ImageCarousel";
import cardData from "./CardData/Midjourney";
import NavBar from "./NavBar";
import Footer from "./Footer";

const PromptPage = () => {
  const card = cardData.find((item) => item.id === 1);

  return (
    <Box>
      <NavBar />
      <Flex w="100%" justify="space-between" px="5%" py="3%">
        <Box w="42%">
          <Image
            src={card.imageUrl}
            w="100%"
            h="280px"
            objectFit="cover"
            borderRadius="8px"
          />
          <Text fontSize="28px" fontWeight="bold" mt="12px">
            {card.title}
          </Text>
          <Badge
            rounded="full"
            px={2}
            py={1}
            colorScheme="teal"
            fontSize="12px"
          >
            {card.tag}
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
            {card.description}
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
              {card.originalprompt}
            </Text>
          </Box>
          <Box mb="24px">
            <Text fontSize="18px" fontWeight="bold" mb="16px">
              Example Output
            </Text>
            <ImageCarousel imgurl={card.outputimages} />
          </Box>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default PromptPage;
