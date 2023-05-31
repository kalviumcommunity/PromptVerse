import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import {
  Image,
  Stack,
  Box,
  Modal,
  ModalContent,
  Button,
  Text,
} from "@chakra-ui/react";
import { MdAddCircle } from "react-icons/md";
import DescriptionForm from "./Description";
import DetailsForm from "./Details";

const images = [
  {
    id: 1,
    firstImage:
      "https://res.cloudinary.com/dosqxcotq/image/upload/v1683973727/PromptVerse%20Assets/SVGs/undraw_logic_re_nyb4_n75ldh.svg",
    secondImage:
      "https://res.cloudinary.com/dosqxcotq/image/upload/v1683973727/PromptVerse%20Assets/SVGs/undraw_my_password_re_ydq7_vmohib.svg",
  },
  {
    id: 2,
    firstImage:
      "https://res.cloudinary.com/dosqxcotq/image/upload/v1684463504/PromptVerse%20Assets/SVGs/undraw_sign_in_re_o58h_hzffcf.svg",
    secondImage:
      "https://res.cloudinary.com/dosqxcotq/image/upload/v1683973727/PromptVerse%20Assets/SVGs/undraw_joyride_re_968t_lswiv1.svg",
  },
];

function ModalForm({ onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [formValues, setFormValues] = useState({
    promptType: "",
    promptName: "",
    promptDescription: "",
    originalPrompt: "",
    exampleOutput: "",
  });
  const [selectedImages, setSelectedImages] = useState(images[0]);

  useEffect(() => {
    if (isOpen) {
      setSelectedImages(images[0]);
      setPage(1);
    }
  }, [isOpen]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    onClose();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    handleCloseModal();
  };

  const handleNextPage = () => {
    setPage(page + 1);
    setSelectedImages(images[page]);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
    setSelectedImages(images[page - 2]);
  };

  return (
    <div>
      <Button
        variant="solid"
        color="white"
        bg="#6C63FF"
        padding="10px 16px"
        marginBottom={{ base: "12px", md: 0 }}
        marginRight={{ base: 0, md: "28px" }}
        borderRadius="3px"
        _hover={{}}
        _focus={{}}
        _active={{}}
        onClick={handleOpenModal}
      >
        <Text fontSize="15px" fontWeight="bold" pr="8px">
          Add Prompt
        </Text>
        <MdAddCircle size={24} />
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        isCentered
        size="xl"
        closeOnOverlayClick={false}
        motionPreset="scale"
      >
        <ModalContent
          maxWidth="80%"
          h="86vh"
          borderRadius="10px"
          overflow="hidden"
          border="2px solid #333333"
        >
          <Box display="flex" h="100%">
            <Box
              w="35%"
              bg="white"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src={selectedImages.firstImage}
                alt="Logic Image"
                h="45%"
                w="90%"
                mb="10px"
                mr="10%"
              />
              <Image
                src={selectedImages.secondImage}
                alt="Password Image"
                h="45%"
                w="90%"
                ml="15%"
              />
            </Box>
            <Stack w="65%" p={10} spacing={4} bg="#333333" color="white">
              {page === 1 && (
                <DescriptionForm
                  formValues={formValues}
                  handleInputChange={handleInputChange}
                  handleCloseModal={handleCloseModal}
                  nextPage={handleNextPage}
                />
              )}
              {page === 2 && (
                <DetailsForm
                  formValues={formValues}
                  handleInputChange={handleInputChange}
                  previousPage={handlePreviousPage}
                  handleSubmit={handleSubmit}
                  handleCloseModal={handleCloseModal}
                  promptType={formValues.promptType}
                />
              )}
            </Stack>
          </Box>
        </ModalContent>
      </Modal>
    </div>
  );
}

ModalForm.propTypes = {
  onClose: PropTypes.func,
};

export default ModalForm;
