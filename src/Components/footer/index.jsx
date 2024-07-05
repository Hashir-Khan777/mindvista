import React from "react";
import {
  Box,
  Flex,
  Link,
  Text,
  Divider,
  IconButton,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const bg = useColorModeValue("black", "gray.800");
  const color = useColorModeValue("white", "gray.200");

  return (
    <Box bg={bg} color={color} py={4}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        textAlign="center"
      >
        <Box mb={4}>
          <NavLink to="/">
            <Image
              w="90px"
              src="./images/logopng.png"
              mx="auto"
              mb={4}
            />
          </NavLink>
        </Box>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          wrap="wrap"
          mb={8}
        >
          <Link href="/about-us" mx={2} mb={{ base: 2, md: 0 }}>
            About Us
          </Link>
          <Link href="/contact-us" mx={2} mb={{ base: 2, md: 0 }}>
            Contact Us
          </Link>
          <Link href="/features" mx={2} mb={{ base: 2, md: 0 }}>
            Features
          </Link>
          <Link href="/terms-and-conditions" mx={2} mb={{ base: 2, md: 0 }}>
            Terms and Conditions
          </Link>
          <Link href="/help" mx={2} mb={{ base: 2, md: 0 }}>
            Help
          </Link>
          <Link href="/privacy-policy" mx={2} mb={{ base: 2, md: 0 }}>
            Privacy Policy
          </Link>
        </Flex>
      </Flex>
      <Divider />
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
        mt={4}
      >
        <Text mb={{ base: 4, md: 0 }}>© 2021 MindVista. All rights reserved</Text>
        <Flex>
          <IconButton
            as="a"
            href="https://www.instagram.com"
            target="_blank"
            aria-label="Instagram"
            icon={<FaInstagram />}
            variant="ghost"
            colorScheme="whiteAlpha"
            mr={2}
          />
          <IconButton
            as="a"
            href="https://www.twitter.com"
            target="_blank"
            aria-label="Twitter"
            icon={<FaTwitter />}
            variant="ghost"
            colorScheme="whiteAlpha"
            mr={2}
          />
          <IconButton
            as="a"
            href="https://www.youtube.com"
            target="_blank"
            aria-label="YouTube"
            icon={<FaYoutube />}
            variant="ghost"
            colorScheme="whiteAlpha"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
