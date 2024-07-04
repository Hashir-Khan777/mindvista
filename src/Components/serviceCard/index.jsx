import React from "react";
import style from "./style";
import { Box, Circle, Text } from "@chakra-ui/react";
import CustomButton from "../button";
import { motion } from "framer-motion";

const ServiceCard = (service) => {
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, transform: "translateY(50px)" }}
      whileInView={{
        opacity: 1,
        transform: "translateY(0)",
        transition: { duration: 1 },
      }}
      sx={style.services}
    >
      <Circle sx={style.serviceIcon}>{service.icon}</Circle>
      <Text sx={style.serviceHeading}>{service.heading}</Text>
      <Text sx={style.serviceText}>{service.text}</Text>
      <CustomButton
        text="View More"
      ></CustomButton>
    </Box>
  );
};

export default ServiceCard;
