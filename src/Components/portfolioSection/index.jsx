import React from "react";
import CustomButton from "../button";
import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import style from "./style";
import { motion } from "framer-motion";

const PortfolioSection = (props) => {
  return (
    <Flex
      sx={props.customStyle}
      direction={{ base: "column", lg: "row" }}
      justify="center"
      gap="30px"
      align="center"
    >
      <Stack
        as={motion.div}
        initial={{
          opacity: 0,
          transform: `translateX(${props.reverse ? "20px" : "-20px"})`,
        }}
        whileInView={{
          opacity: 1,
          transform: "translateX(0)",
          transition: { duration: 1 },
        }}
        px="20px"
        w={{ base: "100%", lg: "550px" }}
      >
        <Image mb="20px" w="80px" src={props.iconImage} />
        <Text sx={style.portfolioText}>{props.subHeading}</Text>
        <Heading mb="20px" fontWeight={700}>
          {props.heading}
        </Heading>
        <Text fontSize="20px" lineHeight="1.8em">
          {props.text}
        </Text>
        <CustomButton
          customStyle={{ w: "180px", mt: "30px" }}
          text="View Case Study"
        />
      </Stack>
      <Box
        as={motion.div}
        initial={{
          opacity: 0,
          transform: `translateX(${props.reverse ? "-20px" : "20px"})`,
        }}
        whileInView={{
          opacity: 1,
          transform: "translateX(0)",
          transition: { duration: 1 },
        }}
      >
        <Image src={props.image} />
      </Box>
    </Flex>
  );
};

export default PortfolioSection;
