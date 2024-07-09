import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  Text,
} from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <Box
      bgImage={`/images/contact-image.jpg`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      <Box
        bg="rgba(0, 0, 0, 0.6)"
        p={8}
        borderRadius="md"
        width={["100%", "80%", "60%", "40%"]}
      >
        <Heading color="white" textAlign="center" mb={4}>
          Contact Us
        </Heading>
        <Text color="gray.200" textAlign="center" mb={8}>
          Reach Out to Elevate Your Business. Contact Us for Premium Services
          and Tailored Solutions.
        </Text>
        <Box
          bg="rgba(255, 255, 255, 0.1)"
          p={6}
          borderRadius="md"
          border="1px solid rgba(255, 255, 255, 0.2)"
        >
          <FormControl mb={4}>
            <FormLabel color="white">
              Name <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <Input placeholder="Name" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel color="white">
              Email <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <Input placeholder="Email" type="email" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel color="white">Phone Number</FormLabel>
            <Input placeholder="Phone Number" type="tel" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel color="white">Message</FormLabel>
            <Textarea placeholder="Message" />
          </FormControl>
          <Button colorScheme="teal" width="full">
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
