import { Box, Circle, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import style from "./style";

const Clientcard = () => {
  return (
    <Box sx={style.reviewBox}>
      <Flex align="center" gap="30px">
        <Circle h="80px" w="80px">
            <Image src="./images/client-image-1.webp" />
        </Circle>
        <Stack>
          <Heading fontSize="20px">Ernest Smith</Heading>
          <Text color="bisque.100">Developer At MindVista</Text>
        </Stack>
      </Flex>
      <Text mt="30px" color="rgb(123, 136, 168)" fontSize="18px">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
        officiis veniam
      </Text>
    </Box>
  );
};

export default Clientcard;
