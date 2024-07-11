import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Circle,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Herosection from "../../Components/heroSection";
import style from "./style";
import Card from "../../Components/card";
import CustomButton from "../../Components/button";
import { IoLocationSharp, IoSettingsOutline } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Customaccordian from "../../Components/customAccordian";
import { FaPhone } from "react-icons/fa";
import CustomInput from "../../Components/inputField";
import { GiMaterialsScience } from "react-icons/gi";
import Advisorcard from "../../Components/advisorCard";
import { CiMail } from "react-icons/ci";
import ContactSection from "../../Components/contactSection";
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
          <Stack placeItems="center" sx={style.FAQsection} bgColor="#1E1E1E">
            <Flex
              flexDirection={{ base: "column", lg: "row" }}
              align="center"
              justify={{ base: "center", lg: "space-between" }}
              gap="30px"
            >
              <Box>
                <Heading mb="20px" fontWeight={700} color={"#fff"}>
                  Frequently Asked Questions
                </Heading>
                <Text fontSize="17px" color={"#fff"}>
                  We hope this section will help you better understand the
                  issues related to software
                </Text>
              </Box>
              <CustomButton text="Contact Us" />
            </Flex>
            <Accordion
              as={Flex}
              flexDirection={{ base: "column", md: "row" }}
              mt="3rem"
              gap={10}
              allowMultiple
            >
              <Stack gap={8}>
                <Customaccordian
                  question="What do i need to know before contacting you ?"
                  answer="The most important thing to know is what do you want to accomplish.
            Why do I need this software? What for? What should it do? Having a
            clear vision in mind is crucial when ordering a software
            application."
                />
                <Customaccordian
                  question="What do i need to know before contacting you ?"
                  answer="The most important thing to know is what do you want to accomplish.
            Why do I need this software? What for? What should it do? Having a
            clear vision in mind is crucial when ordering a software
            application."
                />
                <Customaccordian
                  question="What do i need to know before contacting you ?"
                  answer="The most important thing to know is what do you want to accomplish.
            Why do I need this software? What for? What should it do? Having a
            clear vision in mind is crucial when ordering a software
            application."
                />
              </Stack>
              <Stack gap={8}>
                <Customaccordian
                  question="What do i need to know before contacting you ?"
                  answer="The most important thing to know is what do you want to accomplish.
            Why do I need this software? What for? What should it do? Having a
            clear vision in mind is crucial when ordering a software
            application."
                />
                <Customaccordian
                  question="What do i need to know before contacting you ?"
                  answer="The most important thing to know is what do you want to accomplish.
            Why do I need this software? What for? What should it do? Having a
            clear vision in mind is crucial when ordering a software
            application."
                />
                <Customaccordian
                  question="What do i need to know before contacting you ?"
                  answer="The most important thing to know is what do you want to accomplish.
            Why do I need this software? What for? What should it do? Having a
            clear vision in mind is crucial when ordering a software
            application."
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
