import { Box, Circle, Flex, Icon, Image, Text } from "@chakra-ui/react";
import style from "./style";
import { NavLink } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";

const Navbar = ({ clicked }) => {
  return (
    <Flex sx={style.navBar} zIndex={1}>
      <Flex gap="60px" ml={"4rem"}>
        <Box w="90px" as={NavLink} to="/">
          <Image src="/images/logopng.png" />
        </Box>
        <Flex sx={{ ...style.navMenu }}>
          <Box to="/" as={NavLink}>
            <Text sx={style.links}>Home</Text>
          </Box>
          <Box to="/aboutUs" as={NavLink}>
            <Text sx={style.links}>About Us</Text>
          </Box>
          <Box to="/services" as={NavLink}>
            <Text sx={style.links}>Services</Text>
          </Box>
          <Box to="/portfolio" as={NavLink}>
            <Text sx={style.links}>Portfolio</Text>
          </Box>
          <Box to="/contactUs" as={NavLink}>
            <Text sx={style.links}>Contact Us</Text>
          </Box>
        </Flex>
      </Flex>
      <Flex display={{ base: "none", lg: "flex" }} gap="16px">
        <Box as="button" sx={style.iconButton}>
          <Icon fontSize="24px" as={IoMailOutline} />
          <Image 
          />
        </Box>
        <Box as="button" sx={style.iconButton}>
          <Icon fontSize="24px" as={MdOutlinePhone} />
        </Box>
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
