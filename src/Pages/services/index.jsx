import React, { useState, useRef } from "react";
import {
  Accordion,
  Box,
  Flex,
  Heading,
  Grid,
  Stack,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import style from "./style";
import CustomButton from "../../Components/button";
import Customaccordian from "../../Components/customAccordian";

const Services = () => {
  const servicesData = [
    {
      heading: "Web Designing",
      text: "Crafting visually stunning and user-friendly websites that captivate and engage visitors. Our designs are tailored to reflect your brand identity while ensuring an optimal user experience. C",
      img: "/images/web-design.png",
      technologies: [
        "/images/amazon-logo.png",
        "/images/stripe-logo.png",
        "/images/microsoft-logo.png",
        "/images/shopify-logo.png",
        "/images/google-logo.png",
        "/images/coursera-logo.png",
      ],
    },
    {
      heading: "Web Development",
      text: "Building robust and scalable websites using the latest technologies to ensure optimal performance. Our development services include everything from custom website creation to e-commerce solutions and web applications.",
      img: "/images/web-dev.png",
      technologies: [
        "/images/amazon-logo.png",
        "/images/stripe-logo.png",
        "/images/microsoft-logo.png",
        "/images/shopify-logo.png",
        "/images/google-logo.png",
        "/images/coursera-logo.png",
      ],
    },
    {
      heading: "App Development",
      text: "Developing intuitive and high-performing mobile applications for both iOS and Android platforms. We focus on creating apps that offer seamless functionality and an engaging user experience.",
      img: "/images/app-dev.png",
      technologies: [
        "/images/amazon-logo.png",
        "/images/stripe-logo.png",
        "/images/microsoft-logo.png",
        "/images/shopify-logo.png",
        "/images/google-logo.png",
        "/images/coursera-logo.png",
      ],
    },
    {
      heading: "Content Writing",
      text: "Producing compelling and relevant content that resonates with your target audience. Our content writing services cover everything from website copy to blog posts and social media content.",
      img: "/images/content-writing.png",
      technologies: [
        "/images/amazon-logo.png",
        "/images/stripe-logo.png",
        "/images/microsoft-logo.png",
        "/images/shopify-logo.png",
        "/images/google-logo.png",
        "/images/coursera-logo.png",
      ],
    },
    {
      heading: "Branding and PR",
      text: "Build a strong brand identity and enhance your reputation with our branding and PR services. We help you define your brand story, manage your online reputation, and develop strategic PR campaigns to increase visibility and credibility.",
      img: "/images/branding-pr.png",
      technologies: [
        "/images/amazon-logo.png",
        "/images/stripe-logo.png",
        "/images/microsoft-logo.png",
        "/images/shopify-logo.png",
        "/images/google-logo.png",
        "/images/coursera-logo.png",
      ],
    },
    {
      heading: "SEO Optimization",
      text: "Enhancing online visibility and search engine rankings to attract more organic traffic. Our SEO strategies are designed to improve your website's performance and help you reach a larger audience.",
      img: "/images/seo.png",
      technologies: [
        "/images/amazon-logo.png",
        "/images/stripe-logo.png",
        "/images/microsoft-logo.png",
        "/images/shopify-logo.png",
        "/images/google-logo.png",
        "/images/coursera-logo.png",
      ],
    },
  ];

  const [selectedService, setSelectedService] = useState(servicesData[0]);
  const detailsRef = useRef(null);

  const handleViewMore = (service) => {
    setSelectedService(service);
    detailsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const renderTechnologies = (technologies) => {
    return technologies.map((tech, index) => (
      <Image
        key={index}
        src={tech}
        alt={`technology-${index}`}
        m="5px"
        w={10}
        h={"auto"}
        // sx={{
        //   w: "20px",
        // }}
      />
    ));
  };

  return (
    <Box>
      <Box py="4rem" pt={"8rem"} textAlign="center" bgColor="#000">
        <Box m="auto" maxWidth={1440}>
          <Heading color="#F8BE28" sx={style.heading}>
            Services
          </Heading>
          <Heading color="#fff" fontWeight="normal" mt="10px" sx={style.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
            consectetur sit minus. Lorem ipsum dolor sit amet.
          </Heading>

          <Box py="4rem" mt={"4rem"} textAlign="center" bgColor="#151515">
            <Box my="3rem" textAlign="center">
              <Text sx={style.subHeading}>Our focusable services</Text>
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
                  <Box
                    key={index}
                    as={motion.div}
                    initial={{ opacity: 0, transform: "translateY(50px)" }}
                    whileInView={{
                      opacity: 1,
                      transform: "translateY(0)",
                      transition: { duration: 1 },
                    }}
                    sx={{
                      ...style.services,
                      borderColor:
                        selectedService.heading === service.heading
                          ? "#f8be28"
                          : "transparent",
                      borderWidth:
                        selectedService.heading === service.heading
                          ? "2px"
                          : "0",
                      boxShadow:
                        selectedService.heading === service.heading
                          ? "0 0 10px #f8be28"
                          : "none",
                    }}
                  >
                    <Box sx={style.serviceImgContainer}>
                      <Image
                        src={service.img}
                        alt={service.heading}
                        sx={style.serviceImg}
                      />
                    </Box>
                    <Text sx={style.serviceHeading}>{service.heading}</Text>
                    <Text sx={style.serviceText}>{service.text}</Text>
                    <Button
                      onClick={() => handleViewMore(service)}
                      sx={{
                        fontSize: { base: "10px", md: "12px" },
                        fontWeight: 700,
                        mt: "10px",
                        color: "#f8be28",
                        borderColor: "#f8be28",
                        borderWidth: "1px",
                        bgColor: "black",
                        margin: "auto",
                        display: "block",
                        _hover: {
                          color: "#090909",
                          bgColor: "white",
                        },
                      }}
                    >
                      View More
                    </Button>
                  </Box>
                ))}
              </Grid>
            </Box>
          </Box>
          <Box
            ref={detailsRef}
            bgColor="#000"
            color="white"
            textAlign={"left"}
            maxW={{ base: "100%", md: "80%" }}
            p={{ base: "1.5rem", md: "4rem" }}
            m={"auto"}
          >
            <Heading mb="2rem" color="#f8be28">
              {selectedService.heading}
            </Heading>
            <Text mb="1rem">{selectedService.text}</Text>
            <Text fontWeight="bold" mb="1rem">
              Technologies Used:
            </Text>
            <Flex wrap="wrap">
              {renderTechnologies(selectedService.technologies)}
            </Flex>
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
