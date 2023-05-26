import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { MdAddCircle } from "react-icons/md";
import { useState, useEffect } from "react";
import Carousel from "./Carousel";

const GptPrompts = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:4002/api/prompts/chatgpt");
      const data = await response.json();
      setCardData(data);
    }

    fetchData();
  }, []);

  return (
    <Box>
      <Box px="4%">
        <Flex mt="36px" mb="12px" ml="12px" alignItems="center">
          <Text fontSize="28px" fontWeight="bold" mr="12px">
            ChatGPT Prompts
          </Text>
          <MdAddCircle size={36} />
        </Flex>
        <Divider mb="16px" borderColor="gray.400" borderBottomWidth="1.5px" />
      </Box>
      <Box px="2%">
        <Carousel cardData={cardData} />
      </Box>
    </Box>
  );
};

export default GptPrompts;
