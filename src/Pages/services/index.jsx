// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Accordion,
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Grid,
  Stack,
  Text,
} from "@chakra-ui/react";
import style from "./style";
import Card from "../../Components/card";
import CustomButton from "../../Components/button";
import Customaccordian from "../../Components/customAccordian";
import { GiMaterialsScience } from "react-icons/gi";
import { motion } from "framer-motion";
import ServiceCard from "../../Components/serviceCard";

const Services = () => {
  const servicesData = [
    {
      heading: "Web Designing",
      text: "Crafting visually stunning and user-friendly websites that captivate and engage visitors. Our designs are tailored to reflect your brand identity while ensuring an optimal user experience.",
      img: "/images/web-design.png",
    },
    {
      heading: "Web Development",
      text: "Building robust and scalable websites using the latest technologies to ensure optimal performance. Our development services include everything from custom website creation to e-commerce solutions and web applications.",
      img: "/images/web-dev.png",
    },
    {
      heading: "App Development",
      text: "Developing intuitive and high-performing mobile applications for both iOS and Android platforms. We focus on creating apps that offer seamless functionality and an engaging user experience.",
      img: "/images/app-dev.png",
    },
    {
      heading: "Content Writing",
      text: "Producing compelling and relevant content that resonates with your target audience. Our content writing services cover everything from website copy to blog posts and social media content.",
      img: "/images/content-writing.png",
    },
    {
      heading: "Branding and PR",
      text: "Build a strong brand identity and enhance your reputation with our branding and PR services. We help you define your brand story, manage your online reputation, and develop strategic PR campaigns to increase visibility and credibility.",
      img: "/images/branding-pr.png",
    },
    {
      heading: "SEO Optimization",
      text: "Enhancing online visibility and search engine rankings to attract more organic traffic. Our SEO strategies are designed to improve your website's performance and help you reach a larger audience.",
      img: "/images/seo.png",
    },
  ];
  return (
    <Box>
      <Box py="4rem" pt={"8rem"} px="20px" textAlign="center" bgColor="#000">
        <Box m="auto" maxWidth={1440}>
          <Heading color="#F8BE28" sx={style.heading}>
            Services
          </Heading>
          <Heading color="#fff" fontWeight="normal" mt="10px" sx={style.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
            consectetur sit minus. Lorem ipsum dolor sit amet.
          </Heading>
          <Box
            py="4rem"
            pt={"8rem"}
            px="20px"
            textAlign="center"
            bgColor="#000"
          >
            <Box my="3rem" textAlign="center">
              <Text sx={style.subHeading}>our focusable services</Text>
              <Heading sx={style.heading}>
                How Do We Work To Help You In Startup Business
              </Heading>
            </Box>
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
          <Stack
            placeItems="center"
            bgColor="#1E1E1E"
            padding={{ base: "20px", md: "40px" }}
          >
            <Flex
              flexDirection={{ base: "column", lg: "row" }}
              align="center"
              justify={{ base: "center", lg: "space-between" }}
              gap="30px"
              width="100%"
            >
              <Box
                textAlign={{ base: "center", lg: "left" }}
                mb={{ base: "20px", lg: "0" }}
              >
                <Heading mb="20px" fontWeight={700} color="#fff">
                  Frequently Asked Questions
                </Heading>
                <Text fontSize="17px" color="#fff">
                  We hope this section will help you better understand the
                  issues related to software.
                </Text>
              </Box>
              <CustomButton text="Contact Us" />
            </Flex>
            <Accordion
              as={Flex}
              flexDirection={{ base: "column", lg: "row" }}
              mt="3rem"
              gap={10}
              allowMultiple
              width="100%"
            >
              <Stack gap={8} flex="1" justifyContent={"center"} m={"auto"}>
                <Customaccordian
                  question="What do I need to know before contacting you?"
                  answer="The most important thing to know is what you want to accomplish. Why do I need this software? What for? What should it do? Having a clear vision in mind is crucial when ordering a software application."
                />
                <Customaccordian
                  question="What do I need to know before contacting you?"
                  answer="The most important thing to know is what you want to accomplish. Why do I need this software? What for? What should it do? Having a clear vision in mind is crucial when ordering a software application."
                />
                <Customaccordian
                  question="What do I need to know before contacting you?"
                  answer="The most important thing to know is what you want to accomplish. Why do I need this software? What for? What should it do? Having a clear vision in mind is crucial when ordering a software application."
                />
              </Stack>
              <Stack gap={8} flex="1" justifyContent={"center"} m={"auto"}>
                <Customaccordian
                  question="What do I need to know before contacting you?"
                  answer="The most important thing to know is what you want to accomplish. Why do I need this software? What for? What should it do? Having a clear vision in mind is crucial when ordering a software application."
                />
                <Customaccordian
                  question="What do I need to know before contacting you?"
                  answer="The most important thing to know is what you want to accomplish. Why do I need this software? What for? What should it do? Having a clear vision in mind is crucial when ordering a software application."
                />
                <Customaccordian
                  question="What do I need to know before contacting you?"
                  answer="The most important thing to know is what you want to accomplish. Why do I need this software? What for? What should it do? Having a clear vision in mind is crucial when ordering a software application."
                />
              </Stack>
            </Accordion>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
