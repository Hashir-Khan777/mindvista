import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import style from "./style";

const Herosection = ({ heading, text }) => {
  return (
    <Box sx={style.background}>
      <Flex sx={style.overlay}>
        <Heading sx={style.contactHeading}>{heading}</Heading>
        <Text sx={style.contactText}>{text}</Text>
      </Flex>
    </Box>
  );
};

export default Herosection;
