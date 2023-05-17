import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import PropTypes from "prop-types";

const Card = ({ imageUrl, imageAlt, title, tag }) => (
  <Box
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    maxW="xs"
    maxH="xs"
    borderWidth="0.5px"
    rounded="md"
    shadow="md"
    m={2}
  >
    <Image src={imageUrl} alt={imageAlt} roundedTop="md" h={36} />

    <Box p={3}>
      <Badge rounded="full" px={2} colorScheme="teal" mb={2} fontSize="12px">
        {tag}
      </Badge>
      <Text fontWeight="bold" fontSize="16px" noOfLines={1}>
        {title}
      </Text>
    </Box>
  </Box>
);

const CardCarousel = ({ cardData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardData.length - 5 ? prevIndex : prevIndex + 1
    );
  };

  const visibleCards = cardData.slice(currentIndex, currentIndex + 5);

  const disablePrevButton = currentIndex === 0;
  const disableNextButton = currentIndex === cardData.length - 5;

  return (
    <Flex alignItems="center">
      <Box
        as={FaChevronLeft}
        fontSize="3xl"
        color={disablePrevButton ? "gray.300" : "gray.400"}
        cursor={disablePrevButton ? "not-allowed" : "pointer"}
        onClick={disablePrevButton ? null : handlePrevClick}
      />
      <Flex overflowX="auto" flexWrap="nowrap" alignItems="center">
        {visibleCards.map((card) => (
          <Card
            key={card.id}
            imageUrl={card.imageUrl}
            imageAlt={card.imageAlt}
            title={card.title}
            tag={card.tag}
          />
        ))}
      </Flex>
      <Box
        as={FaChevronRight}
        fontSize="3xl"
        color={disableNextButton ? "gray.300" : "gray.400"}
        cursor={disableNextButton ? "not-allowed" : "pointer"}
        onClick={disableNextButton ? null : handleNextClick}
      />
    </Flex>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

CardCarousel.propTypes = {
  cardData: PropTypes.array.isRequired,
};

export default CardCarousel;
