import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CustomButton from "../button";
import style from './style'

const ServiceCard = ({ service }) => {
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
      <Image src={service.img} alt={service.heading} sx={style.serviceImg} />
      <Text sx={style.serviceHeading}>{service.heading}</Text>
      <Text sx={style.serviceText}>{service.text}</Text>
      <CustomButton text="View More"></CustomButton>
    </Box>
  );
};

export default ServiceCard;
