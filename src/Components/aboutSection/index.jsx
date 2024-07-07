import { Box, Grid, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import CustomButton from "../button";
import style from "./style";
import { motion } from "framer-motion";

const Aboutsection = () => {
  return (
    <Box sx={style.aboutContainer}>
      <Box
        as={motion.div}
        initial={{ opacity: 0, transform: "translateX(-20px)" }}
        whileInView={{
          opacity: 1,
          transform: "translateX(0)",
          transition: { duration: 1 },
        }}
        sx={style.aboutContent}
      >
        <Text
          sx={{
            fontSize: { base: "0.8rem", md: "1.2rem" },
            fontWeight: 600,
            color: "#fff",
          }}
        >
          About Us
        </Text>
        <Heading
          sx={{
            fontSize: { base: "1.8rem", md: "2.2rem" },
            fontWeight: 600,
            color: "#fff",
          }}
        >
          Driving Business Success Through Innovation
        </Heading>
        <Text
          //  sx={style.aboutText}
          sx={{
            fontSize: { base: "12px", md: "14px" },
            fontWeight: 400,
            color: "#fff",
            letterSpacing: "1px",
            lineHeight: "20px",
            mt: 4,
          }}
        >
          {` MindVista is an innovative IT services company enhancing business
          efficiency with cutting-edge digital solutions. With a proven track
          record of over 100 satisfied clients, partner with us to unlock your
          business's full potential and thrive in today's competitive market.`}
        </Text>
        <Box bg="black" color="white" py={10}>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "1fr 1fr",
              lg: "repeat(2, 1fr)",
            }}
            gap={6}
            maxW="1200px"
            mx="auto"
            mb="15px"
          >
            <Box textAlign="left">
              <Text
                sx={{
                  fontSize: { base: "1.2rem", md: "2rem" },
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                50+ Years
              </Text>
              <Text
                sx={{
                  fontSize: { base: "10px", md: "16px" },
                  fontWeight: 400,
                  color: "#fff",
                  letterSpacing: "1px",
                }}
              >
                of leading Innovation in IT Services
              </Text>
            </Box>
            <Box textAlign="left">
              <Text
                sx={{
                  fontSize: { base: "1.2rem", md: "2rem" },
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                100+ Projects
              </Text>
              <Text
                sx={{
                  fontSize: { base: "10px", md: "16px" },
                  fontWeight: 400,
                  color: "#fff",
                  letterSpacing: "1px",
                }}
              >
                Successfully delivered with excellence.
              </Text>
            </Box>
            <Box textAlign="left">
              <Text
                sx={{
                  fontSize: { base: "1.2rem", md: "2rem" },
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                20+ Awards
              </Text>
              <Text
                sx={{
                  fontSize: { base: "10px", md: "16px" },
                  fontWeight: 400,
                  color: "#fff",
                  letterSpacing: "1px",
                }}
              >
                Recognizing Excellence in Innovation and Service
              </Text>
            </Box>
            <Box textAlign="left">
              <Text
                sx={{
                  fontSize: { base: "1.2rem", md: "2rem" },
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                99+ Success
              </Text>
              <Text
                sx={{
                  fontSize: { base: "10px", md: "16px" },
                  fontWeight: 400,
                  color: "#fff",
                  letterSpacing: "1px",
                }}
              >
                Driving Excellence and Achievement
              </Text>
            </Box>
          </Grid>
          {/* <CustomButton text="Know more about us"></CustomButton> */}
          <Button
            sx={{
              fontSize: { base: "10px", md: "12px" },
              fontWeight: 700,
              mt: "10px",
              color: "#f8be28",
              borderWidth: "1px",
              borderColor: "#f8be28",
              bgColor: "#000",
            }}
          >
            Know more about us
          </Button>
        </Box>
      </Box>
      <Box
        sx={style.imageContainer}
        as={motion.div}
        initial={{ opacity: 0, transform: "translateX(20px)" }}
        whileInView={{
          opacity: 1,
          transform: "translateX(0)",
          transition: { duration: 1 },
        }}
      >
        <Image src="./images/about-bg.png" />
      </Box>
    </Box>
  );
};

export default Aboutsection;
