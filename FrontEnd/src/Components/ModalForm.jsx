import { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Image,
  FormControl,
  FormLabel,
  Select,
  Input,
  Textarea,
  Stack,
  Box,
  Flex,
  Modal,
  Text,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";

function ModalForm({ onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [formValues, setFormValues] = useState({
    promptType: "",
    promptName: "",
    promptDescription: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    setFormValues({
      promptType: "",
      promptName: "",
      promptDescription: "",
    });
    onClose();
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button colorScheme="blue" onClick={handleOpenModal}>
        Open
      </Button>
      <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered size="xl">
        <ModalContent
          // fontFamily="open-sans, sans-serif"
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
              <Box mb="24px">
                <Text fontSize="14px" color="#B3B3B3">
                  Step 1/2
                </Text>
                <Text fontSize="28px" fontWeight="bold" mt="0px">
                  Prompt Description
                </Text>
                <Text fontSize="18px" color="#B3B3B3">
                  Tell us about the prompt you want to upload
                </Text>
              </Box>
              <ModalCloseButton />
              {page === 1 && (
                <Box>
                  <Flex justifyContent="space-between" mb="24px">
                    <FormControl id="promptType" fontSize="14px">
                      <Box mb="12px">
                        <Text fontSize="20px" fontWeight="semibold">
                          Prompt Type
                        </Text>
                        <Text
                          fontSize="14px"
                          fontStyle="italic"
                          color="#B3B3B3"
                        >
                          Select the type of prompt you want to sell
                        </Text>
                      </Box>
                      <Select
                        name="promptType"
                        placeholder="Select Prompt Type"
                        value={formValues.promptType}
                        onChange={handleInputChange}
                        color="#333333"
                        bg="white"
                        width="86%"
                        borderRadius="4"
                      >
                        <option value="Midjourney">Midjourney</option>
                        <option value="ChatGPT">ChatGPT</option>
                        <option value="Dall-E">Dall-E</option>
                        <option value="Stable Diffusion">
                          Stable Diffusion
                        </option>
                      </Select>
                    </FormControl>
                    <FormControl id="promptName">
                      <Box mb="12px">
                        <Text fontSize="20px" fontWeight="semibold">
                          Prompt Name
                        </Text>
                        <Text
                          fontSize="14px"
                          fontStyle="italic"
                          color="#B3B3B3"
                        >
                          Suggest a title for this prompt
                        </Text>
                      </Box>
                      <Input
                        type="text"
                        name="promptName"
                        value={formValues.promptName}
                        onChange={handleInputChange}
                        color="#333333"
                        bg="white"
                        borderRadius="4px"
                        placeholder="Writing Assistant..."
                      />
                      <Text fontSize="14px" color="#B3B3B3" textAlign="right">
                        0/40
                      </Text>
                    </FormControl>
                  </Flex>
                  <FormControl id="promptDescription" mt="24px">
                    <Box mb="12px">
                      <Text fontSize="20px" fontWeight="semibold">
                        Prompt Description
                      </Text>
                      <Text fontSize="14px" fontStyle="italic" color="#B3B3B3">
                        Describe what your prompt does to a potential user
                      </Text>
                    </Box>
                    <Textarea
                      name="promptDescription"
                      value={formValues.promptDescription}
                      onChange={handleInputChange}
                      color="#333333"
                      bg="white"
                      borderRadius="4px"
                    />
                    <Text fontSize="14px" color="#B3B3B3" textAlign="right">
                      0/500
                    </Text>
                  </FormControl>
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    mt="24px"
                  >
                    <Box>
                      <Text fontSize="14px" fontStyle="italic" color="#B3B3B3">
                        *All the Fields are Mandatory to fill
                      </Text>
                    </Box>
                    <Box justifyContent="space-between">
                      <Button
                        bg="#E5E3FF"
                        color="#6C63FF"
                        borderRadius="3px"
                        onClick={handleCloseModal}
                        mr="30px"
                        _hover={{}}
                        disabled={
                          !formValues.promptType ||
                          !formValues.promptName ||
                          !formValues.promptDescription
                        }
                      >
                        Cancel
                      </Button>
                      <Button
                        bg="#6C63FF"
                        color="white"
                        borderRadius="3px"
                        onClick={() => setPage(2)}
                        _hover={{}}
                        disabled={
                          !formValues.promptType ||
                          !formValues.promptName ||
                          !formValues.promptDescription
                        }
                      >
                        Next
                      </Button>
                    </Box>
                  </Flex>
                </Box>
              )}
              {page === 2 && (
                <Box>
                  <FormControl id="message">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      name="message"
                      value={formValues.message}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <Stack direction="row" justifyContent="space-between">
                    <Button onClick={() => setPage(1)}>Back</Button>
                    <Button colorScheme="blue" onClick={handleSubmit}>
                      Submit
                    </Button>
                  </Stack>
                </Box>
              )}
            </Stack>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}

ModalForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalForm;
