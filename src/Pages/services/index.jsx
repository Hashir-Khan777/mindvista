// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Accordion,
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import style from "./style";
import Card from "../../Components/card";
import CustomButton from "../../Components/button";
import Customaccordian from "../../Components/customAccordian";
import { GiMaterialsScience } from "react-icons/gi";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <Box>
      <Box py="4rem" pt={"8rem"} px="20px" textAlign="center" bgColor="#000">
        <Box m="auto" maxWidth={1440}>
          <Heading color="#F8BE28" sx={style.heading}>
            Services
          </Heading>
          <Heading color="#fff" fontWeight="normal" mt="10px" sx={style.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
            consectetur sit minus. Lorem ipsum dolor sit amet.
          </Heading>
          <Box
            py="4rem"
            pt={"8rem"}
            px="20px"
            textAlign="center"
            bgColor="#000"
          >
            <Box my="3rem" textAlign="center">
              <Text sx={style.subHeading}>our focusable services</Text>
              <Heading sx={style.heading}>
                How Do We Work To Help You In Startup Business
              </Heading>
            </Box>
            <SimpleGrid
              as={motion.div}
              initial={{ opacity: 0, transform: "translateY(50px)" }}
              whileInView={{
                opacity: 1,
                transform: "translateY(0)",
                transition: { duration: 1 },
              }}
              mb="30px"
              position="relative"
              placeItems="center"
              gap={{ base: "20px", lg: "40px 0" }}
              columns={{ base: 1, md: 2, lg: 4 }}
            >
              <Card
                icon={GiMaterialsScience}
                heading="Customer Software Development"
                text="We approached WiaTech with complex project deliver"
              />
              <Card
                icon={GiMaterialsScience}
                heading="Customer Software Development"
                text="We approached WiaTech with complex project deliver"
              />
              <Card
                icon={GiMaterialsScience}
                heading="Customer Software Development"
                text="We approached WiaTech with complex project deliver"
              />
              <Card
                icon={GiMaterialsScience}
                heading="Customer Software Development"
                text="We approached WiaTech with complex project deliver"
              />
              <Card
                icon={GiMaterialsScience}
                heading="Customer Software Development"
                text="We approached WiaTech with complex project deliver"
              />
              <Card
                icon={GiMaterialsScience}
                heading="Customer Software Development"
                text="We approached WiaTech with complex project deliver"
              />
              <Card
                icon={GiMaterialsScience}
                heading="Customer Software Development"
                text="We approached WiaTech with complex project deliver"
              />
              <Card
                icon={GiMaterialsScience}
                heading="Customer Software Development"
                text="We approached WiaTech with complex project deliver"
              />
            </SimpleGrid>
          </Box>
          <Stack
            placeItems="center"
            bgColor="#1E1E1E"
            padding={{ base: "20px", md: "40px" }}
          >
            <Flex
              flexDirection={{ base: "column", lg: "row" }}
              align="center"
              justify={{ base: "center", lg: "space-between" }}
              gap="30px"
              width="100%"
            >
              <Box
                textAlign={{ base: "center", lg: "left" }}
                mb={{ base: "20px", lg: "0" }}
              >
                <Heading mb="20px" fontWeight={700} color="#fff">
                  Frequently Asked Questions
                </Heading>
                <Text fontSize="17px" color="#fff">
                  We hope this section will help you better understand the
                  issues related to software.
                </Text>
              </Box>
              <CustomButton text="Contact Us" />
            </Flex>
            <Accordion
              as={Flex}
              flexDirection={{ base: "column", lg: "row" }}
              mt="3rem"
              gap={10}
              allowMultiple
              width="100%"
            >
              <Stack gap={8} flex="1" justifyContent={"center"} m={"auto"}>
                <Customaccordian
                  question="What do I need to know before contacting you?"
                  answer="The most important thing to know is what you want to accomplish. Why do I need this software? What for? What should it do? Having a clear vision in mind is crucial when ordering a software application."
                />
                <Customaccordian
                  question="What do I need to know before contacting you?"
                  answer="The most important thing to know is what you want to accomplish. Why do I need this software? What for? What should it do? Having a clear vision in mind is crucial when ordering a software application."
                />
                <Customaccordian
                  question="What do I need to know before contacting you?"
                  answer="The most important thing to know is what you want to accomplish. Why do I need this software? What for? What should it do? Having a clear vision in mind is crucial when ordering a software application."
                />
              </Stack>
              <Stack gap={8} flex="1" justifyContent={"center"} m={"auto"}>
                <Customaccordian
                  question="What do I need to know before contacting you?"
                  answer="The most important thing to know is what you want to accomplish. Why do I need this software? What for? What should it do? Having a clear vision in mind is crucial when ordering a software application."
                />
                <Customaccordian
                  question="What do I need to know before contacting you?"
                  answer="The most important thing to know is what you want to accomplish. Why do I need this software? What for? What should it do? Having a clear vision in mind is crucial when ordering a software application."
                />
                <Customaccordian
                  question="What do I need to know before contacting you?"
                  answer="The most important thing to know is what you want to accomplish. Why do I need this software? What for? What should it do? Having a clear vision in mind is crucial when ordering a software application."
                />
              </Stack>
            </Accordion>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
