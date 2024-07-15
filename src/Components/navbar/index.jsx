import React from "react";
import { Box, Circle, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import style from "./style";

const Navbar = ({ clicked, isOpen }) => {
  return (
    <Flex sx={style.navBar} zIndex={1}>
      <Flex
        gap={{ base: "20px", md: "60px" }}
        ml={{ base: "1rem", md: "4rem" }}
      >
        <Box w={{ base: "50px", md: "90px" }} as={NavLink} to="/">
          <Image src="/images/logopng.png" />
        </Box>
        <Flex sx={{ ...style.navMenu }}>
          <Box to="/" as={NavLink}>
            <Text sx={style.links}>Home</Text>
          </Box>
          <Box to="/aboutUs" as={NavLink}>
            <Text sx={style.links}>About Us</Text>
          </Box>
          <Box sx={{ ...style.links, ...style.linksWithDropdown }}>
            <Box as={NavLink} to="#">
              <Text sx={style.links}>Services</Text>
            </Box>
            <Flex sx={style.dropdownMenu} className="dropdownMenu">
              <Box
                as={NavLink}
                to="/services/web-design"
                sx={style.dropdownItem}
              >
                <Image
                  sx={{
                    w: "20px",
                  }}
                  src={"/images/webdesignlogo.png"}
                />{" "}
                <Text>Web Design</Text>
              </Box>
              <Box
                as={NavLink}
                to="/services/web-development"
                sx={style.dropdownItem}
              >
                <Image
                  sx={{
                    w: "20px",
                  }}
                  src={"/images/webdevlogo.webp"}
                />{" "}
                <Text>Web Development</Text>
              </Box>
              <Box
                as={NavLink}
                to="/services/app-development"
                sx={style.dropdownItem}
              >
                <Image
                  sx={{
                    w: "20px",
                  }}
                  src={"/images/androidlogo.png"}
                />{" "}
                <Text>App Development</Text>
              </Box>
              <Box as={NavLink} to="/services/branding" sx={style.dropdownItem}>
                <Image
                  sx={{
                    w: "20px",
                  }}
                  src={"/images/brandinglogo.png"}
                />{" "}
                <Text>Branding</Text>
              </Box>
              <Box as={NavLink} to="/services/seo" sx={style.dropdownItem}>
                <Image
                  sx={{
                    w: "20px",
                  }}
                  src={"/images/seologo.png"}
                />{" "}
                <Text>SEO Optimization</Text>
              </Box>
              <Box
                as={NavLink}
                to="/services/content-writing"
                sx={style.dropdownItem}
              >
                <Image
                  sx={{
                    w: "20px",
                  }}
                  src={"/images/contentwritinglogo.png"}
                />{" "}
                <Text>Content Writing</Text>
              </Box>
            </Flex>
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
        </Box>
        <Box as="button" sx={style.iconButton}>
          <Icon fontSize="24px" as={MdOutlinePhone} />
        </Box>
      </Flex>
      {!isOpen && (
        <Circle as="button" onClick={clicked} sx={style.hamBurger}>
          <Box sx={style.bar} as="span" />
          <Box sx={style.bar} as="span" />
          <Box sx={style.bar} as="span" />
        </Circle>
      )}
    </Flex>
  );
};

export default Navbar;
