import { Box, Button, Flex, Icon, Slide } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/navbar";
import { Outlet } from "react-router-dom";
import Slidebar from "../Components/slidebar";
import Footer from "../Components/footer";
import { IoIosArrowUp } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState("");

  const TopBottom = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setScrollPosition(true);
      } else {
        setScrollPosition(false);
      }
    });
  }, []);

  return (
    <Flex position="relative" flexDirection="column" height="100vh">
      <Navbar clicked={() => setIsOpen(true)} />
      <Box flex={1}>
        <Outlet />
      </Box>
      <Flex
        as={Button}
        onClick={() => TopBottom()}
        variant="unstyled"
        align="center"
        justify="center"
        right="10"
        display={scrollPosition ? "flex" : "none"}
        bottom="10"
        zIndex="999"
        position="fixed"
        h="40px"
        borderRadius="lg"
        w="40px"
        bgColor="bisque.100"
      >
        <Icon fontSize="20px" as={IoIosArrowUp} />
      </Flex>
      <Box
        as="a"
        left="10"
        bottom="10"
        zIndex="999"
        position="fixed"
        display="flex"
        justifyContent="center"
        alignItems="center"
        href="https://api.whatsapp.com/send?phone=+923110011927&text=Hello"
        target="_blank"
        bgColor="green"
        h="80px"
        w="80px"
        borderRadius="50%"
      >
        <Icon fontSize="50px" as={FaWhatsapp} color="white" />
      </Box>
      <Footer />
      <Slide
        transition={{
          exit: { duration: 0.5 },
          enter: { duration: 0.5 },
        }}
        direction="left"
        in={isOpen}
      >
        <Slidebar clicked={() => setIsOpen(false)} />
      </Slide>
    </Flex>
  );
};

export default Layout;
