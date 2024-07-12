import React from "react";
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
  Image,
  List,
  SimpleGrid,
  Stack,
  TabIndicator,
  Text,
  keyframes,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { TiTick } from "react-icons/ti";
import style from "./style";
import Customlistitem from "../../Components/customListItem";
import { MdArrowOutward } from "react-icons/md";
import Herosection from "../../Components/heroSection";
import Aboutsection from "../../Components/aboutSection";
import { motion } from "framer-motion";

const AboutUs = () => {
  const animationKeyframes = keyframes`
  0% { transform:  translateY(0px)   }
  100% { transform: translateY(-15px) }
`;

  const animation_1 = `${animationKeyframes} 1s alternate ease-in-out infinite`;

  return (
    <Box py="4rem" pt={"8rem"} px="20px" textAlign="center" bgColor="#000">
      <Box m="auto" maxWidth={1440}>
        <Heading
          color="#F8BE28"
          sx={{
            m: "auto",
            fontSize: { base: "1.5rem", md: "3rem" },
            color: "#fff",
            w: { base: "100%", md: "600px", lg: "700px" },
          }}
        >
          Services
        </Heading>
        <Heading
          sx={{
            m: "auto",
            fontSize: { base: "14px", lg: "18px" },
            color: "#fff",
            w: { base: "100%", md: "600px", lg: "700px" },
            mt: "1rem",
            lineHeight: "1.5rem",
            fontWeight: "normal",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
          consectetur sit minus. Lorem ipsum dolor sit amet.
        </Heading>
        <Box bgColor={"#090909"}>
          <Box m="auto">
            <Aboutsection />
            <Flex
              gap="5rem"
              direction={{ base: "column", lg: "row" }}
              justify="center"
              align="center"
              py="6rem"
            >
              <Box
                as={motion.div}
                initial={{ opacity: 0, transform: "translateX(-20px)" }}
                whileInView={{
                  opacity: 1,
                  transform: "translateX(0)",
                  transition: { duration: 1 },
                }}
                mx="20px"
                w={{ base: "95%", md: "600px", lg: "570px" }}
              >
                <Text mb="10px" sx={style.textUnderline}>
                  HOW TO MANAGE
                </Text>
                <Heading
                  w={{ sm: "450px", lg: "100%" }}
                  color="#fff"
                  fontSize={{ base: "25px", md: "30px", lg: "50px" }}
                >
                  Our Managed IT Services Let You Concentrate On What Matters
                </Heading>
                <Tabs mt="30px" variant="unstyled">
                  <TabList gap={{ base: "20px", lg: "40px" }}>
                    <Tab sx={style.tab}>Our Approach</Tab>
                    <Tab color={"#fff"} sx={style.tab}>
                      Project Goals
                    </Tab>
                  </TabList>
                  <TabIndicator sx={style.tabIndicator} />
                  <Text sx={style.tabHeading}>Advisory</Text>
                  <TabPanels>
                    <TabPanel>
                      <Text sx={style.tabpanel}>
                        At veroeos accusamus dignissimos ducimus blanditiis
                        volupta delenite atque corrupti quos dolores et quas
                        molestias excepturi sint occaecatie
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
                          <Customlistitem
                            icon={TiTick}
                            text="Standups and Demos"
                          />
                        </List>
                        <List spacing="20px" sx={style.list}>
                          <Customlistitem
                            icon={TiTick}
                            text="Iterative Delivery Approach"
                          />
                          <Customlistitem
                            icon={TiTick}
                            text="Problem-solving"
                          />
                        </List>
                      </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                      <Text sx={style.tabpanel}>
                        At veroeos accusamus dignissimos ducimus blanditiis
                        volupta delenite atque corrupti quos dolores et quas
                        molestias excepturi sint occaecatie
                      </Text>
                      <SimpleGrid
                        columns={{ base: 1, lg: 2 }}
                        mt="20px"
                        gap={10}
                      >
                        <List spacing="20px" sx={style.list}>
                          <Customlistitem
                            icon={TiTick}
                            text="Efficient Sprint Planning"
                          />
                          <Customlistitem
                            icon={TiTick}
                            text="Standups and Demos"
                          />
                        </List>
                        <List spacing="20px" sx={style.list}>
                          <Customlistitem
                            icon={TiTick}
                            text="Iterative Delivery Approach"
                          />
                          <Customlistitem
                            icon={TiTick}
                            text="Problem-solving"
                          />
                        </List>
                      </SimpleGrid>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
              <Box
                as={motion.div}
                initial={{ opacity: 0, transform: "translateX(20px)" }}
                whileInView={{
                  opacity: 1,
                  transform: "translateX(0)",
                  transition: { duration: 1 },
                }}
                sx={style.backgroundImage}
              >
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
                      <Text sx={style.circularProgressText}>
                        Project Success
                      </Text>
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
      </Box>
    </Box>
  );
};

export default AboutUs;
