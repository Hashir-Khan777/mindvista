import { Box, Flex, Slide } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../Components/navbar";
import { Outlet } from "react-router-dom";
import Slidebar from "../Components/slidebar";
import Footer from "../Components/footer";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex flexDirection="column" height="100vh">
      <Navbar clicked={() => setIsOpen(true)} />
      <Box flex={1}>
        <Outlet />
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
