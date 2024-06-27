import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Slider from "../../Components/slider";
import style from "./style";
import { IoFolder } from "react-icons/io5";
import ServiceCard from "../../Components/serviceCard";
import { TiTick } from "react-icons/ti";
import CustomButton from "../../Components/button";
import Circularprogress from "../../Components/circularProgress";
import Clientcard from "../../Components/clientCard";
import Protfolio from "../../Components/portfolio";

const Home = () => {
  return (
    <Box flex={1}>
      <Slider />
      <Heading sx={style.heading}>
        Outstanding Software And Services That Solve Your Hassle
      </Heading>
      <Box sx={style.serviceContainer}>
        <ServiceCard
          icon={<IoFolder />}
          heading="Flutter And Native Apps"
          text="Lorem ipsum dolor sit amet consectetur adipisicing."
        />
        <ServiceCard
          icon={<IoFolder />}
          heading="Website Developmet"
          text="Lorem ipsum dolor sit amet consectetur adipisicing."
        />
        <ServiceCard
          icon={<IoFolder />}
          heading="Software Development"
          text="Lorem ipsum dolor sit amet consectetur adipisicing."
        />
      </Box>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            cum magnam repellat?
          </Text>
          <Box ms={{ md: "30px" }}>
            <Flex mt="20px" gap="10px">
              <Circularprogress
                value="68%"
                label="68%"
                text="Business Strategy"
              />
              <Circularprogress
                value="81%"
                label="81%"
                text="Real Time Solution"
              />
            </Flex>
            <List sx={style.list} spacing="18px">
              <ListItem>
                <ListIcon as={TiTick} color="#F4A950" fontSize="25px" />
                Professional Team Member
              </ListItem>
              <ListItem>
                <ListIcon as={TiTick} color="#F4A950" fontSize="25px" />
                Awards Winning IT Solutions Company
              </ListItem>
              <ListItem>
                <ListIcon as={TiTick} color="#F4A950" fontSize="25px" />
                Dedicated Tech Services
              </ListItem>
            </List>
            <CustomButton text="Explore More" />
          </Box>
        </Box>
      </Box>
      <Protfolio />
      <Box sx={style.reviewContainer}>
        <Heading sx={style.reviewHeading}>
          What our Customers Are Saying
        </Heading>
        <Flex
          my="40px"
          justify="center"
          flexDirection={{ base: "column", lg: "row" }}
          align="center"
          gap="30px"
        >
          <Clientcard />
          <Clientcard />
          <Clientcard />
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
