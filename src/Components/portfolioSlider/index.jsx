import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./style";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";

export default function App() {
  const [hoverEffect, setHoverEffect] = useState("");
  const navigate = useNavigate();

  const slides = [
    {
      url: "/images/portfolio-1.png",
      id: 1,
    },
    {
      url: "/images/portfolio-2.png",
      id: 2,
    },
    {
      url: "/images/portfolio-3.png",
      id: 3,
    },
    {
      url: "/images/portfolio-4.png",
      id: 4,
    },
    {
      url: "/images/portfolio-5.png",
      id: 5,
    },
    {
      url: "/images/portfolio-6.png",
      id: 1,
    },
    {
      url: "/images/portfolio-7.png",
      id: 2,
    },
    {
      url: "/images/portfolio-8.png",
      id: 3,
    },
    {
      url: "/images/portfolio-9.png",
      id: 4,
    },
  ];

  const handleSlideClick = (id) => {
    navigate(`/project/app/${id}`);
  };

  return (
    <Box flex={1}>
      <Box sx={style.background}>
        <Box sx={style.overlay}>
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
            sx={style.portfolioSlider}
          >
            <Swiper
              loop={true}
              autoplay={{ delay: 2500 }}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4, spaceBetween: 0 },
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
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <Box onClick={() => handleSlideClick(slide.id)}>
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
                      ></Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
            <Button
              sx={{
                fontSize: { base: "10px", md: "12px" },
                fontWeight: 700,
                color: "#000",
                bgColor: "#f8be28",
                margin: "auto",
                display: "flex",
                w: "150px",
                mt: "2rem",
              }}
              to="/portfolio"
              as={NavLink}
            >
              View All Portfolio
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
