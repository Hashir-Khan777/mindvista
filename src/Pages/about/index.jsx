import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  TabIndicator,
  Text,
  UnorderedList,
  keyframes,
} from "@chakra-ui/react";
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { TiTick } from "react-icons/ti";
import style from "./style";
import Customlistitem from "../../Components/customListItem";
import { MdArrowOutward } from "react-icons/md";
import Herosection from "../../Components/heroSection";
import Aboutsection from "../../Components/aboutSection";

const AboutUs = () => {
  const animationKeyframes = keyframes`
  0% { transform:  translateY(0px)   }
  100% { transform: translateY(-15px) }

`;

  const animation_1 = `${animationKeyframes} 1s alternate ease-in-out infinite`;

  return (
    <Box>
      <Herosection
        heading="ABOUT US"
        text="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
            consectetur, in neque quia hic odit ab porro molestias culpa, atque
            deleniti dolorem necessitatibus sed nobis maiores! Obcaecati nam
            quod vel?"
      />
      <Box m="auto" maxW="1440px">
        <Flex
          my="5rem"
          mx={{ base: "20px", lg: "0" }}
          align="center"
          direction={{ base: "column", lg: "row" }}
          gap={10}
        >
          <Image
            w={{ md: "600px", lg: "650px", xl: "800px" }}
            src="./images/About-us-image-1.jpg"
          />
          <Stack
            justify="center"
            w={{ base: "100%", md: "600px", lg: "300px" }}
          >
            <Text sx={style.text}>Who We Are</Text>
            <Heading color="bisque.100" fontSize="45px">
              Smart Platform Integration
            </Heading>
            <Text mt="10px">
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
              Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
            </Text>
          </Stack>
        </Flex>
        <Aboutsection />
        <Flex
          gap="5rem"
          direction={{ base: "column", lg: "row" }}
          justify="center"
          align="center"
          my="6rem"
        >
          <Box mx="20px" w={{ base: "95%", md: "600px", lg: "570px" }}>
            <Text mb="10px" sx={style.textUnderline}>
              HOW TO MANAGE
            </Text>
            <Heading
              w={{ sm: "450px", lg: "100%" }}
              color="black.900"
              fontSize={{ base: "25px", md: "30px", lg: "50px" }}
            >
              Our Managed IT Services Let You Concentrate On What Matters
            </Heading>
            <Tabs mt="30px" variant="unstyled">
              <TabList gap={{ base: "20px", lg: "40px" }}>
                <Tab sx={style.tab}>Our Approach</Tab>
                <Tab sx={style.tab}>Project Goals</Tab>
              </TabList>
              <TabIndicator sx={style.tabIndicator} />
              <Text sx={style.tabHeading}>Advisory</Text>
              <TabPanels>
                <TabPanel>
                  <Text sx={style.tabpanel}>
                    At veroeos accusamus dignissimos ducimus blanditiis volupta
                    delenite atque corrupti quos dolores et quas molestias
                    excepturi sint occaecatie
                  </Text>

                  <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    mt="20px"
                    gap={{ base: 5, lg: 3, xl: 10 }}
                  >
                    <List spacing="20px" sx={style.list}>
                      <Customlistitem
                        icon={TiTick}
                        text="Efficient Sprint Planning"
                      />
                      <Customlistitem icon={TiTick} text="Standups and Demos" />
                    </List>
                    <List spacing="20px" sx={style.list}>
                      <Customlistitem
                        icon={TiTick}
                        text="Iterative Delivery Approach"
                      />
                      <Customlistitem icon={TiTick} text="Problem-solving" />
                    </List>
                  </SimpleGrid>
                </TabPanel>
                <TabPanel>
                  <Text sx={style.tabpanel}>
                    At veroeos accusamus dignissimos ducimus blanditiis volupta
                    delenite atque corrupti quos dolores et quas molestias
                    excepturi sint occaecatie
                  </Text>
                  <SimpleGrid columns={{ base: 1, lg: 2 }} mt="20px" gap={10}>
                    <List spacing="20px" sx={style.list}>
                      <Customlistitem
                        icon={TiTick}
                        text="Efficient Sprint Planning"
                      />
                      <Customlistitem icon={TiTick} text="Standups and Demos" />
                    </List>
                    <List spacing="20px" sx={style.list}>
                      <Customlistitem
                        icon={TiTick}
                        text="Iterative Delivery Approach"
                      />
                      <Customlistitem icon={TiTick} text="Problem-solving" />
                    </List>
                  </SimpleGrid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
          <Box sx={style.backgroundImage}>
            <Stack animation={animation_1} gap="4rem" sx={style.stack}>
              <Flex gap="25px">
                <CircularProgress
                  color="black.900"
                  value={80}
                  size="75px"
                  thickness="7px"
                >
                  <CircularProgressLabel
                    as={Flex}
                    justify="center"
                    align="center"
                  >
                    <MdArrowOutward fontSize="25px" />
                  </CircularProgressLabel>
                </CircularProgress>
                <Box>
                  <Heading color="black.900">98%</Heading>
                  <Text sx={style.circularProgressText}>Project Success</Text>
                </Box>
              </Flex>
              <Flex gap="25px">
                <CircularProgress
                  color="black.900"
                  value={63}
                  size="75px"
                  thickness="7px"
                >
                  <CircularProgressLabel
                    as={Flex}
                    justify="center"
                    align="center"
                  >
                    <MdArrowOutward fontSize="25px" />
                  </CircularProgressLabel>
                </CircularProgress>
                <Box>
                  <Heading color="black.900">63%</Heading>
                  <Text sx={style.circularProgressText}>Happy clients</Text>
                </Box>
              </Flex>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutUs;
