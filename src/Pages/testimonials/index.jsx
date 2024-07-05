import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./style";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import CustomButton from "../button";
import { motion } from "framer-motion";

export default function App() {
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

  return (
    <Box minH="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Box sx={style.background}>
        <Box>
          <Heading sx={style.heading}>Portfolio</Heading>
          <Text sx={style.text}>
            Explore Our Success Stories and Innovative Projects
          </Text>
          <Box
            as={motion.div}
            initial={{ opacity: 0, transform: "translateY(50px)" }}
            whileInView={{
              opacity: 1,
              transform: "translateX(0)",
              transition: { duration: 1 },
            }}
            sx={style.protfolioSlider}
          >
            <Swiper
              loop={true}
              autoplay={{
                delay: 2500,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
              }}
              effect={"coverflow"}
              spaceBetween={15}
              grabCursor={true}
              centeredSlides={true}
              initialSlide={2}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
              {slides.map((slide, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Box border="2px solid #e7e5ea" rounded="3xl">
                      <Box
                        onMouseOver={() => setHoverEffect(index)}
                        onMouseOut={() => setHoverEffect(false)}
                        bgImage={`url(${slide.url})`}
                        sx={style.slider}
                      >
                        <Box
                          transition="all 0.4s ease-in-out"
                          w="100%"
                          h="100%"
                          borderRadius="3xl"
                          bgColor={
                            hoverEffect === index ? "rgba(0,0,0,0.4)" : null
                          }
                        ></Box>
                      </Box>
                      <Flex px="20px" align="center" h="80px">
                        <Text fontSize="23px" fontWeight={700}>
                          EtechGems
                        </Text>
                      </Flex>
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
          <Button
            sx={{
              fontSize: { base: "10px", md: "12px" },
              fontWeight: 700,
              mt: "10px",
              color: "#000",
              bgColor: "#f8be28",
              margin: "auto",
              display: "block",
            }}
          >
            View All Portfolio
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

