import { Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Technologycard = ({ image, text }) => {
  return (
    <Stack align="center" w="100px">
      <Image w="60px" h="60px" src={image} />
      <Text fontWeight={700}>{text}</Text>
    </Stack>
  );
};

export default Technologycard;
