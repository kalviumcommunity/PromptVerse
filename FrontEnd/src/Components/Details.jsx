import {
  FormControl,
  Textarea,
  Button,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const Page2 = ({
  formValues,
  handleInputChange,
  previousPage,
  handleSubmit,
}) => {
  return (
    <Box>
      <Box mb="24px">
        <Text fontSize="14px" color="#B3B3B3">
          Step 2/2
        </Text>
        <Text fontSize="28px" fontWeight="bold" mt="0px">
          Prompt Details
        </Text>
        <Text fontSize="17px" color="#B3B3B3">
          Please upload the original AI generated content
        </Text>
      </Box>
      <FormControl id="originalPrompt" mt="24px">
        <Box mb="12px">
          <Text fontSize="20px" fontWeight="semibold">
            Original Prompt
          </Text>
          <Text fontSize="14px" fontStyle="italic" color="#B3B3B3">
            Please enter your original prompt here
          </Text>
        </Box>
        <Textarea
          name="originalPrompt"
          value={formValues.originalPrompt}
          onChange={handleInputChange}
          color="#333333"
          bg="white"
          borderRadius="4px"
          maxH="130px"
        />
      </FormControl>
      <FormControl id="exampleOutput" mt="18px">
        <Box mb="12px">
          <Text fontSize="20px" fontWeight="semibold">
            Example Output
          </Text>
          <Text fontSize="14px" fontStyle="italic" color="#B3B3B3">
            Please enter your generated output here
          </Text>
        </Box>
        <Textarea
          name="exampleOutput"
          value={formValues.exampleOutput}
          onChange={handleInputChange}
          color="#333333"
          bg="white"
          borderRadius="4px"
          maxH="130px"
        />
      </FormControl>
      <Flex justifyContent="space-between" alignItems="center" mt={30}>
        <Box>
          <Text fontSize="14px" fontStyle="italic" color="#B3B3B3">
            *All fields are mandatory to fill
          </Text>
        </Box>
        <Flex justifyContent="flex-end">
          <Button
            bg="#E5E3FF"
            color="#6C63FF"
            borderRadius="3px"
            onClick={previousPage}
            mr="30px"
            _hover={{}}
          >
            Back
          </Button>
          <Button
            bg="#6C63FF"
            color="white"
            borderRadius="3px"
            onClick={handleSubmit}
            _hover={{}}
          >
            Submit
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

Page2.propTypes = {
  formValues: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Page2;
