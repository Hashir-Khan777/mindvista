import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import style from "./style";
import { motion } from "framer-motion";

const Herosection = ({ heading, text }) => {
  return (
    <Box sx={style.background}>
      <Flex sx={style.overlay}>
        <Heading
          as={motion.div}
          initial={{ opacity: 0, transform: "translateY(-20px)" }}
          animate={{
            opacity: 1,
            transform: "translateY(0)",
            transition: { duration: 1 },
          }}
          sx={style.contactHeading}
        >
          {heading}
        </Heading>
        <Text
          as={motion.div}
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          animate={{
            opacity: 1,
            transform: "translateY(0)",
            transition: { duration: 1, delay: 1 },
          }}
          sx={style.contactText}
        >
          {text}
        </Text>
      </Flex>
    </Box>
  );
};

export default Herosection;
