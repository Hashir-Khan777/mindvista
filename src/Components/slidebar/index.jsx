import { Box, Button, Circle, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import style from "./style";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const Slidebar = ({ clicked }) => {
  return (
    <Box zIndex="999" sx={style.slideBar}>
      <Flex justify={"end"}>
        <Circle as="button" onClick={clicked} sx={style.cross}>
          <Icon as={IoMdClose} />
        </Circle>
      </Flex>
      <Stack gap="20px" >
        <Box as={NavLink}>
          <Text sx={style.links}>Home</Text>
        </Box>
        <Box as={NavLink}>
          <Text sx={style.links}>Services</Text>
        </Box>
        <Box as={NavLink}>
          <Text sx={style.links}>About Us</Text>
        </Box>
        <Box to="/contactUs" as={NavLink}>
          <Text sx={style.links}>Contact Us</Text>
        </Box>
        <Box as={NavLink}>
          <Text sx={style.links}>Portfolio</Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default Slidebar;
