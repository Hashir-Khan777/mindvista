import {
  Box,
  Circle,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import style from "./style";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import CustomInput from "../../Components/inputField";
import CustomButton from "../../Components/button";

const ContactUs = () => {
  return (
    <Box>
      <Box sx={style.background}>
        <Flex sx={style.overlay}>
          <Heading sx={style.contactHeading}>CONTACT US</Heading>
          <Text sx={style.contactText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
            consectetur, in neque quia hic odit ab porro molestias culpa, atque
            deleniti dolorem necessitatibus sed nobis maiores! Obcaecati nam
            quod vel?
          </Text>
        </Flex>
      </Box>
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        mx={{ base: "10pz", lg: "20px" }}
        gap="30px"
        my="6rem"
        justify="center"
      >
        <Stack
          gap="20px"
          px="20px"
          w={{ base: "100%", lg: "550px", xl: "600px" }}
        >
          <Text sx={style.infoText}>GET IN TOUCH</Text>
          <Heading fontSize="45px">Contact Us</Heading>
          <Text fontSize="20px">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque
            inventore
          </Text>
          <SimpleGrid spacingY={5} columns={{ base: 1, lg: 2 }}>
            <Flex width="300px" gap="20px">
              <Icon sx={style.infoIcon} as={IoLocationSharp} />
              <Stack>
                <Heading sx={style.infoHeding}>Location</Heading>
                <Text sx={style.text}>
                  55 Main street, 2nd block, Melbourne, Australia
                </Text>
              </Stack>
            </Flex>
            <Flex width="300px" gap="20px">
              <Icon sx={style.infoIcon} as={FaPhone} />
              <Stack>
                <Heading sx={style.infoHeding}>Phone</Heading>
                <Text sx={style.text}>+00000000000</Text>
              </Stack>
            </Flex>
            <Flex width="300px" gap="20px">
              <Icon sx={style.infoIcon} as={CiMail} />
              <Stack>
                <Heading sx={style.infoHeding}>Email</Heading>
                <Text sx={style.text}>info@example.com</Text>
                <Text sx={style.text}>info@example.com</Text>
              </Stack>
            </Flex>
            <Flex width="300px" gap="20px">
              <Icon sx={style.infoIcon} as={IoShareSocialSharp} />
              <Stack gap="15px">
                <Heading sx={style.infoHeding}>Social</Heading>
                <Flex gap="15px">
                  <Circle sx={style.socialLinks}>
                    <Icon as={FaFacebookF} />
                  </Circle>
                  <Circle sx={style.socialLinks}>
                    <Icon as={IoLogoTwitter} />
                  </Circle>
                  <Circle sx={style.socialLinks}>
                    <Icon as={FaInstagram} />
                  </Circle>
                </Flex>
              </Stack>
            </Flex>
          </SimpleGrid>
          <Image mt="20px" src="./images/contact.jpg" />
        </Stack>
        <Box
          p="40px 30px "
          bgColor="bisque.100"
          w={{ base: "90%", lg: "500px", xl: "550px" }}
        >
          <Heading mb="35px">Fill Up The Form</Heading>
          <Stack gap="50px" as="form">
            <CustomInput placeholder="YOUR NAME" />
            <CustomInput placeholder="EMAIL ADDRESS" />
            <Textarea
              variant="unstyled"
              sx={style.textArea}
              size="lg"
              placeholder="ENTER YOUR MASSAGE HERE"
            />
            <CustomButton text="Get in touch" customStyle={style.formButtom} />
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactUs;
