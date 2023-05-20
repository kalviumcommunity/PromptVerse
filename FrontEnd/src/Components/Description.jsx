import {
  Box,
  Flex,
  FormControl,
  Select,
  Text,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const Page1 = ({
  formValues,
  handleInputChange,
  nextPage,
  handleCloseModal,
}) => {
  return (
    <Box>
      <Box mb="24px">
        <Text fontSize="14px" color="#B3B3B3">
          Step 1/2
        </Text>
        <Text fontSize="28px" fontWeight="bold" mt="0px">
          Prompt Description
        </Text>
        <Text fontSize="17px" color="#B3B3B3">
          Tell us about the prompt you want to upload
        </Text>
      </Box>
      <Flex justifyContent="space-between" mb="24px">
        <FormControl id="promptType" fontSize="14px">
          <Box mb="12px">
            <Text fontSize="20px" fontWeight="semibold">
              Prompt Type
            </Text>
            <Text fontSize="14px" fontStyle="italic" color="#B3B3B3">
              Select the type of prompt you want to upload
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
            <option value="Stable Diffusion">Stable Diffusion</option>
          </Select>
        </FormControl>
        <FormControl id="promptName">
          <Box mb="12px">
            <Text fontSize="20px" fontWeight="semibold">
              Prompt Name
            </Text>
            <Text fontSize="14px" fontStyle="italic" color="#B3B3B3">
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
          h="120px"
          maxH="200px"
        />
      </FormControl>
      <Flex justifyContent="space-between" alignItems="center" mt={30}>
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
            onClick={nextPage}
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
  );
};

Page1.propTypes = {
  formValues: PropTypes.object.isRequired,
  handleCloseModal: PropTypes.func,
  nextPage: PropTypes.func,
  handleInputChange: PropTypes.func,
};

export default Page1;
