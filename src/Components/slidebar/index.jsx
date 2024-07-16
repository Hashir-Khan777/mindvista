import { Box, Circle, Flex, Icon, Stack, Text, Collapse } from "@chakra-ui/react";
import React, { useState } from "react";
import style from "./style";
import { NavLink } from "react-router-dom";
import { IoMdClose, IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Slidebar = ({ setIsOpen }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <Box zIndex="999" sx={style.slideBar}>
      <Flex justify={"end"}>
        <Circle as="button" onClick={() => setIsOpen(false)} sx={style.cross}>
          <Icon as={IoMdClose} />
        </Circle>
      </Flex>
      <Stack gap="20px" overflowY="auto" maxH="calc(100vh - 60px)">
        <Box as={NavLink} to="/">
          <Text sx={style.links}>Home</Text>
        </Box>
        <Box>
          <Flex sx={style.links} onClick={toggleServices} cursor="pointer">
            <Text>Services</Text>
            <Icon as={isServicesOpen ? FaChevronUp : FaChevronDown} />
          </Flex>
          <Collapse in={isServicesOpen}>
            <Box sx={style.dropdownMenu}>
              <Box as={NavLink} to="/services/web-design" sx={style.dropdownItem}>
                Web Design
              </Box>
              <Box as={NavLink} to="/services/web-development" sx={style.dropdownItem}>
                Web Development
              </Box>
              <Box as={NavLink} to="/services/app-development" sx={style.dropdownItem}>
                App Development
              </Box>
              <Box as={NavLink} to="/services/branding" sx={style.dropdownItem}>
                Branding
              </Box>
              <Box as={NavLink} to="/services/seo" sx={style.dropdownItem}>
                SEO Optimization
              </Box>
              <Box as={NavLink} to="/services/content-writing" sx={style.dropdownItem}>
                Content Writing
              </Box>
            </Box>
          </Collapse>
        </Box>
        <Box as={NavLink} to="/aboutUs">
          <Text sx={style.links}>About Us</Text>
        </Box>
        <Box as={NavLink} to="/portfolio">
          <Text sx={style.links}>Portfolio</Text>
        </Box>
        <Box as={NavLink} to="/contactUs">
          <Text sx={style.links}>Contact Us</Text>
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
