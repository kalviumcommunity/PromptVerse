import PropTypes from "prop-types";
import { useState, useCallback } from "react";
import {
  Button,
  Image,
  Stack,
  Box,
  Modal,
  ModalContent,
} from "@chakra-ui/react";
import Form1 from "./Description";
import Form2 from "./Details";

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

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log(formValues);
      handleCloseModal();
      setPage(1);
    },
    [formValues, handleCloseModal]
  );

  const handleNextPage = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  const handlePreviousPage = useCallback(() => {
    setPage((prevPage) => prevPage - 1);
  }, []);

  return (
    <>
      <Button colorScheme="blue" onClick={handleOpenModal}>
        Open
      </Button>
      <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered size="xl">
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
                src="https://res.cloudinary.com/dosqxcotq/image/upload/v1683973727/PromptVerse%20Assets/SVGs/undraw_logic_re_nyb4_n75ldh.svg"
                alt="Logic Image"
                h="45%"
                w="90%"
                mb="10px"
                mr="10%"
              />
              <Image
                src="https://res.cloudinary.com/dosqxcotq/image/upload/v1683973727/PromptVerse%20Assets/SVGs/undraw_my_password_re_ydq7_vmohib.svg"
                alt="Password Image"
                h="45%"
                w="90%"
                ml="15%"
              />
            </Box>
            <Stack w="65%" p={10} spacing={4} bg="#333333" color="white">
              {page === 1 && (
                <Form1
                  formValues={formValues}
                  handleInputChange={handleInputChange}
                  handleCloseModal={handleCloseModal}
                  nextPage={handleNextPage}
                />
              )}
              {page === 2 && (
                <Form2
                  formValues={formValues}
                  handleInputChange={handleInputChange}
                  previousPage={handlePreviousPage}
                  handleSubmit={handleSubmit}
                  onClose={onClose}
                />
              )}
            </Stack>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}

ModalForm.propTypes = {
  onClose: PropTypes.func,
};

export default ModalForm;
