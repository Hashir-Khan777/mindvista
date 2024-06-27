import {
  Box,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import style from "./style";

const Footer = () => {
  return (
    <Box sx={style.background}>
      <Box w="100%" bgColor="rgba(22,28,34,0.68)">
        <SimpleGrid columns={{base:1 , md:2 , lg:4  }} spacing={10} m="auto" pt="40px  " maxW="1440px">
          <Box p="30px" h="220px" w={{base:"300px" , lg:"240px" }}>
            <Image w="140px" src="./images/MindVista-Logo-05.jpg" />
            <Text mt="30px" color="white" fontSize="18px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id animi
              totam nam blanditiis.
            </Text>
          </Box>
          <Box sx={style.footerBox} >
            <Heading sx={style.footerHeading} >
              Services
            </Heading>
            <List mt="20px" fontSize="20px" spacing="10px" color="#fff">
              <ListItem>Lorem, ipsum.</ListItem>
              <ListItem>Lorem, ipsum.</ListItem>
              <ListItem>Lorem, ipsum.</ListItem>
              <ListItem>Lorem, ipsum.</ListItem>
              <ListItem>Lorem, ipsum.</ListItem>
              <ListItem>Lorem, ipsum.</ListItem>
              <ListItem>Lorem, ipsum.</ListItem>
            </List>
          </Box>
          <Box sx={style.footerBox}>
            <Heading sx={style.footerHeading}>
              Services
            </Heading>
            <List mt="20px" fontSize="20px" spacing="10px" color="#fff">
              <ListItem>Lorem, ipsum.</ListItem>
              <ListItem>Lorem, ipsum.</ListItem>
              <ListItem>Lorem, ipsum.</ListItem>
              <ListItem>Lorem, ipsum.</ListItem>
              <ListItem>Lorem, ipsum.</ListItem>
              <ListItem>Lorem, ipsum.</ListItem>
              <ListItem>Lorem, ipsum.</ListItem>
            </List>
          </Box>
          <Box sx={style.footerBox}>
            <Heading sx={style.footerHeading}>
              Services
            </Heading>
            <List mt="20px" fontSize="20px" spacing="10px" color="#fff">
              <ListItem>Lorem, ipsum.</ListItem>
              <ListItem>Lorem, ipsum.</ListItem>
              <ListItem>Lorem, ipsum.</ListItem>
              <ListItem>Lorem, ipsum.</ListItem>
              <ListItem>Lorem, ipsum.</ListItem>
              <ListItem>Lorem, ipsum.</ListItem>
              <ListItem>Lorem, ipsum.</ListItem>
            </List>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Footer;
