import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
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
        <Text sx={style.aboutText}>About Us</Text>
        <Heading sx={style.aboutHeading}>
          Driving Business Success Through Innovation
        </Heading>
        <Text sx={style.aboutText}>
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
              <Text fontSize="3xl" fontWeight="bold">
                50+ Years
              </Text>
              <Text>of leading Innovation in IT Services</Text>
            </Box>
            <Box textAlign="left">
              <Text fontSize="3xl" fontWeight="bold">
                100+ Projects
              </Text>
              <Text>Successfully delivered with excellence.</Text>
            </Box>
            <Box textAlign="left">
              <Text fontSize="3xl" fontWeight="bold">
                20+ Awards
              </Text>
              <Text>Recognizing Excellence in Innovation and Service</Text>
            </Box>
            <Box textAlign="left">
              <Text fontSize="3xl" fontWeight="bold">
                99+ Success
              </Text>
              <Text>Driving Excellence and Achievement</Text>
            </Box>
          </Grid>
          <CustomButton text="Know more about us"></CustomButton>
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
        <Image sx={style.borderImage} src="./images/about us.png" />
      </Box>
    </Box>
  );
};

export default Aboutsection;
