// import {
//   Box,
//   Heading,
//   Image,
//   List,
//   ListItem,
//   SimpleGrid,
//   Text,
// } from "@chakra-ui/react";
// import React from "react";
// import style from "./style";

// const Footer = () => {
//   return (
//     <Box sx={style.background}>
//       <Box w="100%" bgColor="rgba(22,28,34,0.68)">
//         <SimpleGrid columns={{base:1 , md:2 , lg:4  }} spacing={10} m="auto" pt="40px  " maxW="1440px">
//           <Box p="30px" h="220px" w={{base:"300px" , lg:"240px" }}>
//             <Image w="140px" src="./images/MindVista-Logo-05.jpg" />
//             <Text mt="30px" color="white" fontSize="18px">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Id animi
//               totam nam blanditiis.
//             </Text>
//           </Box>
//           <Box sx={style.footerBox} >
//             <Heading sx={style.footerHeading} >
//               Services
//             </Heading>
//             <List mt="20px" fontSize="20px" spacing="10px" color="#fff">
//               <ListItem>Lorem, ipsum.</ListItem>
//               <ListItem>Lorem, ipsum.</ListItem>
//               <ListItem>Lorem, ipsum.</ListItem>
//               <ListItem>Lorem, ipsum.</ListItem>
//               <ListItem>Lorem, ipsum.</ListItem>
//               <ListItem>Lorem, ipsum.</ListItem>
//               <ListItem>Lorem, ipsum.</ListItem>
//             </List>
//           </Box>
//           <Box sx={style.footerBox}>
//             <Heading sx={style.footerHeading}>
//               Services
//             </Heading>
//             <List mt="20px" fontSize="20px" spacing="10px" color="#fff">
//               <ListItem>Lorem, ipsum.</ListItem>
//               <ListItem>Lorem, ipsum.</ListItem>
//               <ListItem>Lorem, ipsum.</ListItem>
//               <ListItem>Lorem, ipsum.</ListItem>
//               <ListItem>Lorem, ipsum.</ListItem>
//               <ListItem>Lorem, ipsum.</ListItem>
//               <ListItem>Lorem, ipsum.</ListItem>
//             </List>
//           </Box>
//           <Box sx={style.footerBox}>
//             <Heading sx={style.footerHeading}>
//               Services
//             </Heading>
//             <List mt="20px" fontSize="20px" spacing="10px" color="#fff">
//               <ListItem>Lorem, ipsum.</ListItem>
//               <ListItem>Lorem, ipsum.</ListItem>
//               <ListItem>Lorem, ipsum.</ListItem>
//               <ListItem>Lorem, ipsum.</ListItem>
//               <ListItem>Lorem, ipsum.</ListItem>
//               <ListItem>Lorem, ipsum.</ListItem>
//               <ListItem>Lorem, ipsum.</ListItem>
//             </List>
//           </Box>
//         </SimpleGrid>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;

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
        justifyContent={"center"}
        m={"auto"}
      >
        <Box>
          <Box w="90px" as={NavLink} to="/">
            <Image
              sx={{
                justifyContent: "center",
                m: "auto",
                mb: "2rem",
              }}
              src="./images/logopng.png"
            />
          </Box>
          <Flex mt={{ base: 4, md: 0 }} justifyContent={"center"} mb={14}>
            <Link href="/about-us" mr={4} mb={{ base: 2, md: 0 }}>
              About Us
            </Link>
            <Link href="/contact-us" mr={4} mb={{ base: 2, md: 0 }}>
              Contact Us
            </Link>
            <Link href="/features" mr={4} mb={{ base: 2, md: 0 }}>
              Features
            </Link>
            <Link href="/terms-and-conditions" mr={4} mb={{ base: 2, md: 0 }}>
              Terms and Conditions
            </Link>
            <Link href="/help" mr={4} mb={{ base: 2, md: 0 }}>
              Help
            </Link>
            <Link href="/privacy-policy" mb={{ base: 2, md: 0 }}>
              Privacy Policy
            </Link>
          </Flex>
        </Box>
      </Flex>
      <Divider mt={4} />
      <Flex mx={10} mb={5} flexWrap="wrap" justifyContent="space-between">
        <Text textAlign="center" mt={2}>
          © 2021 MindVista. All rights reserved
        </Text>
        <Flex
          mt={2}
          flexWrap="wrap"
          justifyContent={{ base: "center", md: "flex-start" }}
        >
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
