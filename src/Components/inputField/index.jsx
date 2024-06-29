import { Input } from "@chakra-ui/react";
import React from "react";
import style from "./style";

const CustomInput = ({ changed , placeholder, required, type, customStyle }) => {
  return (
    <Input
      variant="unstyled"
      sx={{ ...style.defaultStyle, ...customStyle }}
      placeholder={placeholder}
      onChange={changed}
      type={type}
      required={required}
    />
  );
};

export default CustomInput;
