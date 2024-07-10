import React, { useState } from "react";
import { Box, Circle, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import style from "./style";

const Card = ({ icon, heading, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      sx={style.card}
      bgColor={isHovered ? "#F8BE28" : "#1E1E1E"}
    >
      <Stack gap="20px">
        <Box sx={style.icon}>
          <Circle display={isHovered ? "none" : "block"} sx={style.circle} />
          <Icon
            position="relative"
            fontSize="60px"
            color={isHovered ? "#fff" : "#F8BE28"}
            as={icon}
          />
        </Box>
        <Heading fontSize="20px" fontWeight={600} color={"#fff"}>
          {heading}
        </Heading>
        <Text fontSize="16px" lineHeight="1.7em" color={"#fff"}>
          {text}
        </Text>
      </Stack>
    </Box>
  );
};

export default Card;
