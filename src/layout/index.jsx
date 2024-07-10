import { Box, Button, Flex, Icon, Slide, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/navbar";
import { Outlet, useLocation } from "react-router-dom";
import Slidebar from "../Components/slidebar";
import Footer from "../Components/footer";
import { FaWhatsapp } from "react-icons/fa";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Flex position="relative" flexDirection="column" height="100vh">
      <Navbar clicked={() => setIsOpen(true)} />
      <Box flex={1}>
        <Outlet />
      </Box>
      <Box
        as="a"
        right="5"
        bottom="10"
        zIndex="999"
        position="fixed"
        display="flex"
        justifyContent="center"
        alignItems="center"
        href="https://api.whatsapp.com/send?phone=+923110011927&text=Hello"
        target="_blank"
        // bgColor="green"
        sx={{
          h: { base: "40px", md: "60px" },
          w: { base: "40px", md: "60px" },
        }}
      >
        <Image
          src={"/images/whatsappIcon.png"}
          borderRadius={"10px"}
          width={"auto"}
        />
      </Box>
      <Footer />
      <Slide
        transition={{
          exit: { duration: 0.5 },
          enter: { duration: 0.5 },
        }}
        direction="left"
        in={isOpen}
        style={{ zIndex: 2 }}
      >
        <Slidebar clicked={() => setIsOpen(false)} />
      </Slide>
    </Flex>
  );
};

export default Layout;
