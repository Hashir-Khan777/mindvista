import React from "react";
import style from "./style";
import { Box, Circle, Text } from "@chakra-ui/react";
import CustomButton from "../button";

const ServiceCard = (service) => {
  return (
    <Box sx={style.services}>
      <Circle sx={style.serviceIcon}>{service.icon}</Circle>
      <Text sx={style.serviceHeading}>{service.heading}</Text>
      <Text sx={style.serviceText}>{service.text}</Text>
      <CustomButton text="Veiw More"></CustomButton>
    </Box>
  );
};

export default ServiceCard;
