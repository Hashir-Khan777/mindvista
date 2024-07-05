import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import React from "react";
import Slider from "../../Components/slider";
import { IoFolder } from "react-icons/io5";
import ServiceCard from "../../Components/serviceCard";
import Clientcard from "../../Components/clientCard";
import Protfolio from "../../Components/portfolioSlider";
import Aboutsection from "../../Components/aboutSection";
import style from "./style";

const Home = () => {
  return (
    <>
      <Box flex={1}>
        <Box sx={style.background}>
          <Flex
            sx={style.overlay}
            flexDirection={{ base: "column", md: "row" }}
            display={{ base: "block", md: "flex" }}
          >
            <Box
              sx={{
                flex: { base: "1", md: "0.4" },
                textAlign: { base: "left", md: "left" },
                maxW: "80%",
                m: "auto",
                pt: { base: "7rem", md: "0" },
              }}
            >
              <Text
                sx={{
                  fontSize: { base: "0.8rem", md: "1.2rem" },
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                MindVista
              </Text>
              <Text
                sx={{
                  fontSize: { base: "1.8rem", md: "2.2rem" },
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
                  fontSize: { base: "10px", md: "12px" },
                  fontWeight: 400,
                  color: "#fff",
                  letterSpacing: "1px",
                  lineHeight: "20px",
                  mt: 4,
                }}
              >
                Unlock your business potential with MindVista! If you can dream
                it, we can make it happen. Start your journey to success now!
                Click the button below to get in touch.
              </Heading>
              <Button
                sx={{
                  fontSize: { base: "10px", md: "12px" },
                  fontWeight: 700,
                  mt: "10px",
                }}
              >
                Book a Free Call
              </Button>
            </Box>
            <Box
              sx={{
                textAlign: { base: "center", md: "left" },
                flex: { base: "0", md: "0.4" },
              }}
            >
              <Image
                src="./images/bannerimage.png"
                sx={{
                  width: "auto",
                  height: "auto",
                  display: { base: "none", md: "block" },
                }}
              />
            </Box>
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
              heading="Content Writing"
              text="Producing compelling and relevant content that resonates with your target audience. Our content writing services cover everything from website copy to blog posts and social media content."
            />
            <ServiceCard
              icon={<IoFolder />}
              heading="Branding and PR"
              text="Build a strong brand identity and enhance your reputation with our branding and PR services. We help you define your brand story, manage your online reputation, and develop strategic PR campaigns to increase visibility and credibility."
            />
            <ServiceCard
              icon={<IoFolder />}
              heading="SEO Optimization"
              text="Enhancing online visibility and search engine rankings to attract more organic traffic. Our SEO strategies are designed to improve your website's performance and help you reach a larger audience."
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
