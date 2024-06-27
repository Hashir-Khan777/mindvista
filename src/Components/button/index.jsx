import { Button, Icon, Text } from "@chakra-ui/react";
import React from "react";
import style from "./style";

const CustomButton = ({ type, text, clicked, customStyle }) => {
  return (
    <Button
      type={type}
      onClick={clicked}
      variant="unstyled"
      sx={{ ...style.defaultStyle, ...customStyle }}
    >
      <Text>{text}</Text>
    </Button>
  );
};

export default CustomButton;
