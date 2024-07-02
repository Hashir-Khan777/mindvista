import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Slider from "../../Components/slider";
import style from "./style";
import { IoFolder } from "react-icons/io5";
import ServiceCard from "../../Components/serviceCard";
import Clientcard from "../../Components/clientCard";
import Protfolio from "../../Components/portfolioSlider";
import Aboutsection from "../../Components/aboutSection";

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
      <Aboutsection />
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
          <Clientcard
            image="./images/client-image-1.webp"
            heading="Ernest Smith"
            subHeading="Developer At MindVista"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
        officiis veniam"
          />
          <Clientcard
            image="./images/client-image-1.webp"
            heading="Ernest Smith"
            subHeading="Developer At MindVista"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
        officiis veniam"
          />
          <Clientcard
            image="./images/client-image-1.webp"
            heading="Ernest Smith"
            subHeading="Developer At MindVista"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
        officiis veniam"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
