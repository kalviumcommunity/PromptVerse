import {
  FormControl,
  Textarea,
  Button,
  Flex,
  Box,
  Text,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
import PropTypes from "prop-types";

const DetailsForm = ({
  formValues,
  handleInputChange,
  previousPage,
  handleSubmit,
  promptType,
}) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const fileURLs = files.map((file) => URL.createObjectURL(file));
    setUploadedFiles((prevFiles) => [...prevFiles, ...fileURLs]);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(index, 1);
    setUploadedFiles(updatedFiles);
  };

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
          Provide additional details about the prompt
        </Text>
      </Box>

      <form onSubmit={handleSubmit}>
        <FormControl id="originalPrompt" mt="24px">
          <Box mb="12px">
            <Text fontSize="20px" fontWeight="semibold">
              Original Prompt
            </Text>
            <Text fontSize="14px" fontStyle="italic" color="#B3B3B3">
              Enter the original prompt
            </Text>
          </Box>
          <Textarea
            name="originalPrompt"
            color="#333333"
            bg="white"
            borderRadius="4px"
            h="120px"
            maxH="200px"
            value={formValues.originalPrompt}
            onChange={handleInputChange}
            required
          />
        </FormControl>

        {promptType === "ChatGPT" ? (
          <FormControl id="exampleOutput" mt="24px">
            <Box mb="12px">
              <Text fontSize="20px" fontWeight="semibold">
                Example Output
              </Text>
              <Text fontSize="14px" fontStyle="italic" color="#B3B3B3">
                Provide an example output based on the prompt
              </Text>
            </Box>
            <Textarea
              name="exampleOutput"
              color="#333333"
              bg="white"
              borderRadius="4px"
              h="120px"
              maxH="200px"
              value={formValues.exampleOutput}
              onChange={handleInputChange}
              required
            />
          </FormControl>
        ) : (
          <FormControl id="uploadImages" mt="24px">
            <Box mb="12px">
              <Text fontSize="20px" fontWeight="semibold">
                Upload Images
              </Text>
              <Text fontSize="14px" fontStyle="italic" color="#B3B3B3">
                Please choose the images to upload (JPEG / PNG format only)
              </Text>
            </Box>
            <Flex maxW={480}>
              <input
                type="file"
                accept="image/jpeg, image/png"
                multiple
                required
                onChange={handleFileUpload}
              />
            </Flex>
            <Flex flexWrap="wrap">
              {uploadedFiles.map((fileURL, index) => (
                <Box key={index} position="relative" m="1">
                  <Image src={fileURL} alt="Uploaded Photo" h="86px" w="90px" />
                  <IconButton
                    icon={<IoMdCloseCircle size={16} />}
                    size="xs"
                    variant="ghost"
                    colorScheme="red"
                    position="absolute"
                    top="-5px"
                    right="-5px"
                    onClick={() => handleRemoveFile(index)}
                  />
                </Box>
              ))}
            </Flex>
          </FormControl>
        )}

        <Flex justifyContent="space-between" alignItems="center" mt={30}>
          <Box>
            <Text fontSize="14px" fontStyle="italic" color="#B3B3B3">
              *All fields are mandatory to fill
            </Text>
          </Box>
          <Box justifyContent="space-between">
            <Button
              bg="#E5E3FF"
              color="#6C63FF"
              borderRadius="3px"
              onClick={previousPage}
              mr="30px"
              _hover={{}}
            >
              Previous
            </Button>
            <Button
              type="submit"
              bg="#6C63FF"
              color="white"
              borderRadius="3px"
              _hover={{}}
            >
              Submit
            </Button>
          </Box>
        </Flex>
      </form>
    </Box>
  );
};

DetailsForm.propTypes = {
  formValues: PropTypes.object,
  handleInputChange: PropTypes.func,
  previousPage: PropTypes.func,
  handleSubmit: PropTypes.func,
  promptType: PropTypes.string,
};

export default DetailsForm;
