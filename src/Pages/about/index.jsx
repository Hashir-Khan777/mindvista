import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box m="auto" maxW="1440px">
      <Flex align="center" justify="center" h="300px">
        <Heading color="bisque.100" fontSize="45px">
          About Us
        </Heading>
      </Flex>
      <Flex gap={10}>
        <Image w="800px" src="./images/About-us-image-1.jpg" />
        <Stack justify="center" w="300px">
          <Text fontSize="19px" letterSpacing="2px" fontWeight={700}>
            Who We Are
          </Text>
          <Heading color="bisque.100" fontSize="45px">
            Smart Platform Integration
          </Heading>
          <Text mt="10px">
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Nam
            quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
          </Text>
        </Stack>
      </Flex>
      <Flex my="4rem" border="2px solid black">
        <Box w="500px" >
          <Text>BRANDS</Text>
          <Heading fontSize="40px" fontWeight={600}>
            Trusted
          </Heading>
          <Heading fontSize="40px" fontWeight={600}>
            and Supported
          </Heading>
          <Heading fontSize="40px" fontWeight={600}>
            by Many
          </Heading>
          <Tabs>
            <TabList gap="20px">
              <Tab fontSize="25px" color="bisque.100">
                Desings
              </Tab>
              <Tab fontSize="25px" color="bisque.100">
                Marketing
              </Tab>
              <Tab fontSize="25px" color="bisque.100">
                Dev
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Text my="1rem" >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod reus tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam.
                </Text>
                <UnorderedList>
                  <ListItem>Maecenas nec odio ante</ListItem>
                  <ListItem>Maecenas nec odio ante</ListItem>
                  <ListItem>Maecenas nec odio ante</ListItem>
                  <ListItem>Maecenas nec odio ante</ListItem>
                </UnorderedList>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutUs;
