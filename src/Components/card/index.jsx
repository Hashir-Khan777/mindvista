import React, { useEffect, useState } from "react";
import {
  Box,
  Circle,
  Heading,
  Icon,
  Stack,
  Text,
  keyframes,
} from "@chakra-ui/react";
import { GiMaterialsScience } from "react-icons/gi";
import style from "./style";

const Card = ({icon , heading , text}) => {
  const [hover, setHover] = useState(false);


  return (

    <Box
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      _before={hover ? null :{ bottom:"100%" , h:"0" }  }
      sx={{...style.card}}
    >
      <Stack gap="20px">
        <Box transform={hover ? "rotateY(180deg)" : "null"} sx={style.icon}>
          <Circle display={hover ? "none" : "block"} sx={style.circle} />
          <Icon
            position="relative"
            fontSize="60px"
            color={hover ? "#fff" : "bisque.100"}
            as={icon}
          />
        </Box>
        <Heading fontSize="20px" fontWeight={600}>
          {heading}
        </Heading>
        <Text fontSize="16px" lineHeight="1.7em">
          {text}
        </Text>
      </Stack>
    </Box>
  );
};

export default Card;
