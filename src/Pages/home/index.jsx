import React, { useState } from "react";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import ServiceCard from "../../Components/serviceCard";
import Clientcard from "../../Components/clientCard";
import { Swiper, SwiperSlide } from "swiper/react";
import Protfolio from "../../Components/portfolioSlider";
import Aboutsection from "../../Components/aboutSection";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import style from "./style";
import { motion } from "framer-motion";

const Home = () => {
  const [hoverEffect, setHoverEffect] = useState("");

  const slides = [
    {
      url: "./images/portfolio-image-1.jpg",
    },
    {
      url: "./images/portfolio-image-1.jpg",
    },
    {
      url: "./images/portfolio-image-1.jpg",
    },
    {
      url: "./images/portfolio-image-1.jpg",
    },
    {
      url: "./images/portfolio-image-1.jpg",
    },
    {
      url: "./images/portfolio-image-1.jpg",
    },
  ];

  const servicesData = [
    {
      heading: "Web Designing",
      text: "Crafting visually stunning and user-friendly websites that captivate and engage visitors. Our designs are tailored to reflect your brand identity while ensuring an optimal user experience.",
      img: "./images/web-designing.png",
    },
    {
      heading: "Web Development",
      text: "Building robust and scalable websites using the latest technologies to ensure optimal performance. Our development services include everything from custom website creation to e-commerce solutions and web applications.",
      img: "./images/web-development.png",
    },
    {
      heading: "App Development",
      text: "Developing intuitive and high-performing mobile applications for both iOS and Android platforms. We focus on creating apps that offer seamless functionality and an engaging user experience.",
      img: "./images/app-development.png",
    },
    {
      heading: "Content Writing",
      text: "Producing compelling and relevant content that resonates with your target audience. Our content writing services cover everything from website copy to blog posts and social media content.",
      img: "./images/content-writing.png",
    },
    {
      heading: "Branding and PR",
      text: "Build a strong brand identity and enhance your reputation with our branding and PR services. We help you define your brand story, manage your online reputation, and develop strategic PR campaigns to increase visibility and credibility.",
      img: "./images/branding-pr.png",
    },
    {
      heading: "SEO Optimization",
      text: "Enhancing online visibility and search engine rankings to attract more organic traffic. Our SEO strategies are designed to improve your website's performance and help you reach a larger audience.",
      img: "./images/seo-optimization.png",
    },
  ];

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
            <Grid
              templateColumns={{
                base: "1fr",
                md: "1fr 1fr",
                lg: "repeat(3, 1fr)",
              }}
              gap={6}
            >
              {servicesData.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </Grid>
          </Box>
        </Box>
        <Protfolio />
        <Box sx={style.reviewContainer}>
          <Heading sx={style.serviceHeading}>Testimonial</Heading>
          <Text sx={style.text}>
            {`Don't just take our word for it - see what actual users of our
            service have to say about their experience.`}
          </Text>
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
              text="MindVista transformed our outdated systems into a cutting-edge digital platform. Their expertise and dedication have significantly boosted our efficiency and client satisfaction. We couldn’t be happier with the results!"
            />
            <Clientcard
              image="./images/client-image-1.webp"
              heading="Ernest Smith"
              subHeading="Developer At MindVista"
              text="Working with MindVista has been a game-changer for our company. Their ability to understand our needs and provide tailored solutions has helped us navigate the digital landscape with confidence. Outstanding service!"
            />
            <Clientcard
              image="./images/client-image-1.webp"
              heading="Ernest Smith"
              subHeading="Developer At MindVista"
              text="From the initial consultation to the final implementation, MindVista has been a pleasure to work with. Their innovative approach and professional execution have greatly improved our business efficiency. We highly recommend their services!"
            />
            <Clientcard
              image="./images/client-image-1.webp"
              heading="Ernest Smith"
              subHeading="Developer At MindVista"
              text="MindVista exceeded our expectations at every turn. Their creative strategies and advanced technological solutions have significantly enhanced our operational efficiency. We're thrilled with the partnership and results!"
            />
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Home;
