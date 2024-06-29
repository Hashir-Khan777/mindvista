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

const Clientcard = ({heading , image , subHeading , text }) => {
  return (
    <Box sx={style.reviewBox}>
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
