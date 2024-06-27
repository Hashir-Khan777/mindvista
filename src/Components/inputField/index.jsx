import { Input } from "@chakra-ui/react";
import React from "react";
import style from "./style";

const CustomInput = ({placeholder}) => {
  return (
    <Input
      variant="unstyled"
      sx={style.defaultStyle}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
