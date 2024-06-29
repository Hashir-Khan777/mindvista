import { Box, Flex, Heading, Image, List, Text } from "@chakra-ui/react";
import React from "react";
import Circularprogress from "../circularProgress";
import Customlistitem from "../customListItem";
import { TiTick } from "react-icons/ti";
import CustomButton from "../button";
import style from "./style";

const Aboutsection = () => {
  return (
    <Box sx={style.aboutContainer}>
      <Box sx={style.imageContainer}>
        <Image sx={style.aboutImage2} src="./images/about-image-2.jpg" />
        <Box sx={style.aboutImage1} />
        <Image sx={style.borderImage} src="./images/about-image-1.png" />
      </Box>
      <Box sx={style.aboutContent}>
        <Heading sx={style.aboutHeading}>
          We Prominent Truly Trusted IT Business Solutions
        </Heading>
        <Text sx={style.aboutText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis cum
          magnam repellat?
        </Text>
        <Box ms={{ md: "30px" }}>
          <Flex mt="20px" gap="10px">
            <Circularprogress value={68} label="68%" text="Business Strategy" />
            <Circularprogress
              value={81}
              label="81%"
              text="Real Time Solution"
            />
          </Flex>
          <List sx={style.list} spacing="18px">
            <Customlistitem icon={TiTick} text="Professional Team Member" />
            <Customlistitem
              icon={TiTick}
              text="Awards Winning IT Solutions Company"
            />
            <Customlistitem icon={TiTick} text="Dedicated Tech Services" />
          </List>
          <CustomButton text="Explore More" />
        </Box>
      </Box>
    </Box>
  );
};

export default Aboutsection;
