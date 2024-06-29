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
import React from "react";
import Herosection from "../../Components/heroSection";
import style from "./style";
import Card from "../../Components/card";
import CustomButton from "../../Components/button";
import { IoSettingsOutline } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Customaccordian from "../../Components/customAccordian";
import { FaPhone } from "react-icons/fa";
import CustomInput from "../../Components/inputField";
import { GiMaterialsScience } from "react-icons/gi";
import Advisorcard from "../../Components/advisorCard";

const Services = () => {
  return (
    <Box>
      <Herosection
        heading="SERVICES"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
            consectetur, in neque quia hic odit ab porro molestias culpa, atque
            deleniti dolorem necessitatibus sed nobis maiores! Obcaecati nam
            quod vel?"
      />
      <Box m="auto" my="3rem" maxW="1200px">
        <Box my="3rem" textAlign="center">
          <Text sx={style.subHeading}>our focusable services</Text>
          <Heading sx={style.heading}>
            How Do We Work To Help You In Startup Business
          </Heading>
        </Box>
        <SimpleGrid
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
      <Box sx={style.background}>
        <Box sx={style.overlay}>
          <Flex justify="center" align="center" sx={style.flex}>
            <Box color="#fff">
              <Text sx={style.bacgroundText}>5M+ Trusted Our Clients</Text>
              <Heading sx={style.backgroundHeading}>
                Need It Advisor For Your Bussiness ?
              </Heading>
              <Heading sx={style.backgroundHeading}>
                Please Call : 00000000000
              </Heading>
            </Box>
            <CustomButton text="Get A Free Quote" customStyle={style.button} />
          </Flex>
          <Flex gap={{ base: "30px", lg: "25px" }} sx={style.whiteContainer}>
            <Advisorcard
              icon={IoSettingsOutline}
              heading="It Consultancy"
              text="Average time to resolve a cyber attack."
            />
            <Advisorcard
              icon={IoSettingsOutline}
              heading="It Consultancy"
              text="Average time to resolve a cyber attack."
            />
            <Advisorcard
              icon={IoSettingsOutline}
              heading="It Consultancy"
              text="Average time to resolve a cyber attack."
            />
          </Flex>
        </Box>
      </Box>
      <Stack placeItems="center" sx={style.FAQsection}>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          align="center"
          justify={{ base: "center", lg: "space-between" }}
          gap="30px"
        >
          <Box>
            <Heading mb="20px" fontWeight={700}>
              Frequently Asked Questions
            </Heading>
            <Text fontSize="17px">
              We hope this section will help you better understand the issues
              related to software
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
      <Flex
        justify="center"
        align="center"
        gap="30px"
        sx={style.contactSection}
      >
        <Box w={{ base: "100%", md: "600px", lg: "550px" }}>
          <Text sx={style.contactSubHeading}>IT SUPPORTED HELP</Text>
          <Heading sx={style.contactHeading}>LET,S WORK</Heading>
          <Heading sx={style.contactHeading}>TOGETHER</Heading>
          <Text sx={style.para}>
            We denounce with righteous indignation and like men beguiled and
            demoralized by the charms
          </Text>
          <Stack mt="40px" gap="20px">
            <Flex align="center" gap="40px">
              <Icon sx={style.icon} as={FaPhone} />
              <Box>
                <Text sx={style.infoText}>Call For Inquiry</Text>
                <Text sx={style.info}>+000 00000000</Text>
              </Box>
            </Flex>
            <Flex align="center" gap="40px">
              <Icon sx={style.icon} as={FaPhone} />
              <Box>
                <Text sx={style.infoText}>Send Us Email</Text>
                <Text sx={style.info}>info@example.com</Text>
              </Box>
            </Flex>
            <Flex align="center" gap="40px">
              <Icon sx={style.icon} as={FaPhone} />
              <Box>
                <Text sx={style.infoText}>Location</Text>
                <Text sx={style.info}>info@example.com</Text>
              </Box>
            </Flex>
          </Stack>
        </Box>
        <Box sx={style.contactContainer}>
          <Heading mb="20px" fontWeight={600} fontSize="30px">
            Need Help For Project!
          </Heading>
          <Text fontSize="18px">
            We are ready to help your next projects, let’s work together
          </Text>
          <Stack m="auto" mt="30px" w="90%" gap="25px">
            <Flex
              flexDirection={{ base: "column", lg: "row" }}
              align="center"
              gap={{ base: "20px", lg: "30px" }}
            >
              <CustomInput customStyle={style.input} placeholder="NAME" />
              <CustomInput customStyle={style.input} placeholder="E-MAIL" />
            </Flex>
            <CustomInput
              customStyle={style.input}
              placeholder="KIND OF PROJECT"
            />
            <Textarea
              variant="unstyled"
              sx={style.textArea}
              placeholder="ENTER YOUR MASSAGE"
            />
            <CustomButton
              customStyle={style.contactButton}
              text="GET IN TOUCH"
            />
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Services;
