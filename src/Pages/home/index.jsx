import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
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
    <>
      <Box flex={1}>
        <Box sx={style.background}>
          <Flex sx={style.overlay}>
            <Box sx={{ flex: 0.85 }}>
              <Text
                sx={{
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                MindVista
              </Text>
              <Text
                sx={{
                  fontSize: "48px",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Your{" "}
                <Text as="span" sx={{ color: "#F8BE28" }}>
                  Comprehensive
                </Text>{" "}
                Solution for{" "}
                <Text as="span" sx={{ color: "#F8BE28" }}>
                  Online Business.
                </Text>
              </Text>
              <Heading
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#fff",
                  letterSpacing: "1px",
                  lineHeight: "20px",
                }}
              >
                Unlock your business potential with MindVista! If you can dream
                it, we can make it happen. Start your journey to success now!
                Click the button below to get in touch.
              </Heading>
            </Box>
            <Image src="./images/bannerimage.png" />
          </Flex>
        </Box>
        <Aboutsection />
        <Box sx={style.serviceBox}>
          <Heading sx={style.serviceHeading}>Our Services</Heading>
          <Text sx={style.text}>
            We provide tailored IT services using cutting-edge technology and
            creative <br /> strategies to drive efficiency and success.
          </Text>
          <Box sx={style.serviceContainer}>
            <ServiceCard
              icon={<IoFolder />}
              heading="Web Designing"
              text="Crafting visually stunning and user-friendly websites that captivate and engage visitors. Our designs are tailored to reflect your brand identity while ensuring an optimal user experience."
            />
            <ServiceCard
              icon={<IoFolder />}
              heading="Web Development"
              text="Building robust and scalable websites using the latest technologies to ensure optimal performance. Our development services include everything from custom website creation to e-commerce solutions and web applications."
            />
            <ServiceCard
              icon={<IoFolder />}
              heading="App Development"
              text="Developing intuitive and high-performing mobile applications for both iOS and Android platforms. We focus on creating apps that offer seamless functionality and an engaging user experience."
            />
            <ServiceCard
              icon={<IoFolder />}
              heading="Web Designing"
              text="Crafting visually stunning and user-friendly websites that captivate and engage visitors. Our designs are tailored to reflect your brand identity while ensuring an optimal user experience."
            />
            <ServiceCard
              icon={<IoFolder />}
              heading="Web Development"
              text="Building robust and scalable websites using the latest technologies to ensure optimal performance. Our development services include everything from custom website creation to e-commerce solutions and web applications."
            />
            <ServiceCard
              icon={<IoFolder />}
              heading="App Development"
              text="Developing intuitive and high-performing mobile applications for both iOS and Android platforms. We focus on creating apps that offer seamless functionality and an engaging user experience."
            />
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
    </>
  );
};

export default Home;
