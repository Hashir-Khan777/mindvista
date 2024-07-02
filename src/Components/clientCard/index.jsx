import {
  Box,
  Circle,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import style from "./style";
import { motion } from "framer-motion";

const Clientcard = ({ heading, image, subHeading, text }) => {
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, transform: "translateY(50px)" }}
      whileInView={{
        opacity: 1,
        transform: "translateY(0)",
        transition: { duration: 1 },
      }}
      sx={style.reviewBox}
    >
      <Flex align="center" gap="30px">
        <Circle h="80px" w="80px">
          <Image src={image} />
        </Circle>
        <Stack>
          <Heading fontSize="20px">{heading}</Heading>
          <Text color="bisque.100">{subHeading}</Text>
        </Stack>
      </Flex>
      <Text sx={style.text}>{text}</Text>
    </Box>
  );
};

export default Clientcard;
