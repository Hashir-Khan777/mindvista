import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import style from "./style";

const Herosection = ({ heading, text }) => {
  const [animation, setAnimation] = useState();

  useEffect(() => {
    setAnimation(true);
  }, []);

  return (
    <Box sx={style.background}>
      <Flex sx={style.overlay}>
        <Heading
          left={animation ? "600px" : "-180px"}
          sx={style.contactHeading}
        >
          {heading}
        </Heading>
        <Text bottom={animation ? "160px" : "-120px"} sx={style.contactText}>
          {text}
        </Text>
      </Flex>
    </Box>
  );
};

export default Herosection;
