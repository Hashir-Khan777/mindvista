import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CustomButton from "../button";
import style from "./style";

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
      {/* <CustomButton text="View More"></CustomButton> */}
      <Button
        sx={{
          fontSize: { base: "10px", md: "12px" },
          fontWeight: 700,
          mt: "10px",
          color: "#f8be28",
          borderColor: "#f8be28",
          borderWidth: "1px",
          bgColor: "black",
          margin: "auto",
          display: "block",
          _hover: {
            color: "#090909",
            bgColor:"white"
          },
        }}
      >
        View More
      </Button>
    </Box>
  );
};

export default ServiceCard;
