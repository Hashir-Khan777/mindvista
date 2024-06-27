import {
  Box,
  Circle,
  Container,
  Flex,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import style from "./style";
import { NavLink } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = ({ clicked }) => {
  return (
    <Flex sx={style.navBar}>
      <Image src="./images/MindVista-Logo-05.jpg" />
      <Flex sx={{ ...style.navMenu }}>
        <Box to="/" as={NavLink}>
          <Text sx={style.links}>Home</Text>
        </Box>
        <Box as={NavLink}>
          <Text sx={style.links}>Services</Text>
        </Box>
        <Box to="/aboutUs" as={NavLink}>
          <Text sx={style.links}>About Us</Text>
        </Box>
        <Box to="/contactUs" as={NavLink}>
          <Text sx={style.links}>Contact Us</Text>
        </Box>
        <Box as={NavLink}>
          <Text sx={style.links}>Portfolio</Text>
        </Box>
      </Flex>
      <Flex gap="30px" >
        <Circle
          display={{ base: "none", lg: "block" }}
          as="button"
          h="45px"
          w="45px"
          pt="5px"
          color="#fff"
          bgColor="bisque.100"
        >
          <Icon fontSize="25px" as={IoMdMail} />
        </Circle>
        <Circle
          display={{ base: "none", lg: "block" }}
          as="button"
          h="45px"
          w="45px"
          pt="5px"
          color="#fff"
          bgColor="bisque.100"
        >
          <Icon fontSize="25px" as={FaPhoneAlt} />
        </Circle>
      </Flex>
      <Circle as="button" onClick={clicked} sx={style.hamBurger}>
        <Box sx={style.bar} as="span" />
        <Box sx={style.bar} as="span" />
        <Box sx={style.bar} as="span" />
      </Circle>
    </Flex>
  );
};

export default Navbar;
