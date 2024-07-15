import {
  Box,
  Circle,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
import Herosection from "../../Components/heroSection";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [scrollPosition, setScrollPosition] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 250) {
        setScrollPosition(true);
      } else {
        setScrollPosition(false);
      }
    });
  }, []);

  return (
    <Box>
      <Box textAlign="center">
        <Box>
          {/* <Heading color="#F8BE28" sx={style.heading}>
            Contact Us
          </Heading>
          <Heading
            color="#fff"
            fontWeight="normal"
            mt="10px"
            sx={style.textHeader}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            deleniti natus voluptate ullam at rerum.
          </Heading> */}
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            px={{ base: "10px", lg: "20px" }}
            gap="30px"
            py="6rem"
            justify="center"
            bg={"#1E1E1E"}
            // mt={"4rem"}
          >
            <Stack
              as={motion.div}
              initial={{ opacity: 0, transform: "translateX(-20px)" }}
              whileInView={{
                opacity: 1,
                transform: "translateX(0)",
                transition: { duration: 1 },
              }}
              gap="10px"
              p="20px"
              w={{ base: "100%", lg: "550px", xl: "600px" }}
              h="100%"
              textAlign={"left"}
            >
              <Text
                sx={{
                  fontSize: { base: "0.8rem", md: "1.2rem" },
                  fontWeight: 600,
                  color: "#F8BE28",
                  letterSpacing: "2px",
                }}
              >
                GET IN TOUCH
              </Text>
              <Heading
                sx={{
                  fontSize: { base: "1.8rem", md: "2.2rem" },
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Contact Us
              </Heading>
              <Text
                sx={{
                  fontSize: { base: "12px", md: "14px" },
                  fontWeight: 400,
                  color: "#fff",
                  letterSpacing: "1px",
                  lineHeight: "20px",
                  mt: 2,
                  mb: 6,
                }}
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque
                inventore
              </Text>
              <SimpleGrid spacingY={5} columns={{ base: 1, lg: 2 }}>
                <Flex width="100%" gap="10px">
                  <Icon sx={style.infoIcon} as={IoLocationSharp} />
                  <Stack justifyContent={"left"} alignItems={"left"}>
                    <Heading
                      sx={{
                        fontSize: { base: "1rem", md: "1.5rem" },
                        fontWeight: 600,
                        color: "#fff",
                      }}
                    >
                      Location
                    </Heading>
                    <Text
                      sx={{
                        fontSize: { base: "12px", md: "14px" },
                        fontWeight: 400,
                        color: "#fff",
                        letterSpacing: "1px",
                        lineHeight: "20px",
                      }}
                    >
                      55 Main street, 2nd block, Melbourne, Australia
                    </Text>
                  </Stack>
                </Flex>
                <Flex width="100%" gap="10px">
                  <Icon sx={style.infoIcon} as={FaPhone} />
                  <Stack>
                    <Heading
                      sx={{
                        fontSize: { base: "1rem", md: "1.5rem" },
                        fontWeight: 600,
                        color: "#fff",
                      }}
                    >
                      Phone
                    </Heading>
                    <Text
                      sx={{
                        fontSize: { base: "12px", md: "14px" },
                        fontWeight: 400,
                        color: "#fff",
                        letterSpacing: "1px",
                        lineHeight: "20px",
                      }}
                    >
                      +00000000000
                    </Text>
                  </Stack>
                </Flex>
                <Flex width="100%" gap="10px">
                  <Icon sx={style.infoIcon} as={CiMail} />
                  <Stack>
                    <Heading
                      sx={{
                        fontSize: { base: "1rem", md: "1.5rem" },
                        fontWeight: 600,
                        color: "#fff",
                      }}
                    >
                      Email
                    </Heading>
                    <Text
                      sx={{
                        fontSize: { base: "12px", md: "14px" },
                        fontWeight: 400,
                        color: "#fff",
                        letterSpacing: "1px",
                        lineHeight: "20px",
                      }}
                    >
                      info@example.com
                    </Text>
                    <Text
                      sx={{
                        fontSize: { base: "12px", md: "14px" },
                        fontWeight: 400,
                        color: "#fff",
                        letterSpacing: "1px",
                        lineHeight: "20px",
                      }}
                    >
                      info@example.com
                    </Text>
                  </Stack>
                </Flex>
                <Flex width="100%" gap="10px">
                  <Icon sx={style.infoIcon} as={IoShareSocialSharp} />
                  <Stack gap="15px">
                    <Heading
                      sx={{
                        fontSize: { base: "1rem", md: "1.5rem" },
                        fontWeight: 600,
                        color: "#fff",
                      }}
                    >
                      Social
                    </Heading>
                    <Flex gap="10px">
                      <Circle sx={style.socialLinks}>
                        <Icon  sx={style.socialIcon} as={FaFacebookF} color={"#fff"} />
                      </Circle>
                      <Circle sx={style.socialLinks}>
                        <Icon  sx={style.socialIcon} as={IoLogoTwitter} color={"#fff"} />
                      </Circle>
                      <Circle sx={style.socialLinks}>
                        <Icon  sx={style.socialIcon} as={FaInstagram} color={"#fff"} />
                      </Circle>
                    </Flex>
                  </Stack>
                </Flex>
              </SimpleGrid>
              <Image mt="20px" src="/images/contact.jpg" />
            </Stack>
            <Box
              as={motion.div}
              initial={{ opacity: 0, transform: "translateX(20px)" }}
              whileInView={{
                opacity: 1,
                transform: "translateX(0)",
                transition: { duration: 1 },
              }}
              p="40px 30px "
              w={{ base: "90%", lg: "500px", xl: "550px" }}
              h="100%"
            >
              <Heading
                mb="35px"
                fontSize={{ base: "25px", md: "35px" }}
                color="#fff"
                textAlign={"left"}
              >
                Fill Up The Form
              </Heading>
              <Stack gap="30px" as="form">
                <CustomInput placeholder="YOUR NAME" />
                <CustomInput placeholder="EMAIL ADDRESS" />
                <Textarea
                  variant="unstyled"
                  sx={style.textArea}
                  size="lg"
                  placeholder="ENTER YOUR MESSAGE HERE"
                  fontSize="14px"
                />
                <CustomButton
                  text="Get in touch"
                  customStyle={style.formButton}
                />
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
