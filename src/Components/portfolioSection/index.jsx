import React from "react";
import CustomButton from "../button";
import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import style from "./style";

const PortfolioSection = (props) => {
  return (
    <Flex
      sx={props.customStyle}
      direction={{ base: "column", lg: "row" }}
      justify="center"
      gap="30px"
      align="center"
    >
      <Stack px="20px" w={{ base: "100%", lg: "550px" }}>
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
      <Image src={props.image} />
    </Flex>
  );
};

export default PortfolioSection;
