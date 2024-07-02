import { Box, Button, Circle, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import style from "./style";
import { NavLink } from "react-router-dom";
import { IoMdClose, IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Slidebar = ({ clicked }) => {
  return (
    <Box zIndex="999" sx={style.slideBar}>
      <Flex justify={"end"}>
        <Circle as="button" onClick={clicked} sx={style.cross}>
          <Icon as={IoMdClose} />
        </Circle>
      </Flex>
      <Stack gap="20px">
        <Box as={NavLink}>
          <Text sx={style.links}>Home</Text>
        </Box>
        <Box to="/services" as={NavLink}>
          <Text sx={style.links}>Services</Text>
        </Box>
        <Box to="/portfolio" as={NavLink}>
          <Text sx={style.links}>About Us</Text>
        </Box>
        <Box to="/contactUs" as={NavLink}>
          <Text sx={style.links}>Contact Us</Text>
        </Box>
        <Box as={NavLink}>
          <Text sx={style.links}>Portfolio</Text>
        </Box>
        <Flex my="20px" gap="30px">
          <Circle as="button" sx={style.iconButton}>
            <Icon fontSize="25px" as={IoMdMail} />
          </Circle>
          <Circle as="button" sx={style.iconButton}>
            <Icon fontSize="25px" as={FaPhoneAlt} />
          </Circle>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Slidebar;
