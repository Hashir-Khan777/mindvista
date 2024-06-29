import {
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import style from "./style";

const Circularprogress = ({ value , label, text }) => {
  return (
    <Flex align="center" gap="8px" >
      <CircularProgress
        as={Flex}
        justify="center"
        align="center"
        value={value}
        size={{ base: "50px", sm: "40px" , md:"80px"}}
        thickness="7px"
      >
        <CircularProgressLabel>{label}</CircularProgressLabel>
      </CircularProgress>
      <Text sx={style.progressText}>{text}</Text>
    </Flex>
  );
};

export default Circularprogress;
