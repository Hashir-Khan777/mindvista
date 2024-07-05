import {
  Box,
  Circle,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import React from "react";
import { motion } from "framer-motion";

const Clientcard = ({ heading, image, subHeading, text, rating , bgColor}) => {
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, transform: "translateY(50px)" }}
      whileInView={{
        opacity: 1,
        transform: "translateY(0)",
        transition: { duration: 1 },
      }}
      sx={{ ...style.reviewBox, bgColor: bgColor }}
    >
      <Text sx={style.text}>{text}</Text>
      <HStack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          my: "1rem",
        }}
        mt="20px"
      >
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} color={i < rating ? "#ffb800" : "gray.600"} />
        ))}
      </HStack>
      <Flex align="center" gap="30px" flexDir={"column"}>
        <Circle>
          <Image src={image} borderRadius="full" width={12} />
        </Circle>
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Heading fontSize="14px" color={"#fff"}>
            {heading}
          </Heading>
          <Text color="gray.400" fontSize="10px">
            {subHeading}
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Clientcard;

const style = {
  reviewBox: {
    p: { base: "20px", sm: "40px", lg: "20px", xl: "40px" },
    // bgColor: "#090909",
    boxShadow: "md",
    

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "350px",
  },
 
  text: {
    color: "white",
    fontSize: "10px",
    lineHeight: "1.2rem",
  },
};
