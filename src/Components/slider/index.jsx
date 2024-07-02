import { Box, Button, Circle, Fade, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import style from "./style";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Slider = () => {
  const [current, setCurrent] = useState(1);
  const [autoplay, setAutoplay] = useState();

  const slides = [
    {
      url: "./images/hero-image-1.jpg",
    },
    {
      url: "./images/hero-image-2.jpg",
    },
    {
      url: "./images/hero-image-3.jpg",
    },
  ];

  useEffect(() => {
    startAutoplay();
    return () => {
      stopAutoplay();
    };
  }, []);

  const startAutoplay = () => {
    setAutoplay(
      setInterval(() => {
        setCurrent((current) => (current + 1) % slides.length);
      }, 5000)
    );
  };

  const stopAutoplay = () => {
    if (autoplay) {
      clearInterval(autoplay);
    }
  };

  const prevSlide = () => {
    stopAutoplay();
    setCurrent((current + 1) % slides.length);
    startAutoplay();
  };

  const nextSlide = () => {
    stopAutoplay();
    setCurrent((current - 1 + slides.length) % slides.length);
    startAutoplay();
  };

  return (
    <Box position="relative" height="600px">
      <Box sx={style.sliderContainer}>
        <Box sx={style.slider}>
          {slides.map((slide, index) => {
            return (
              <Box
                key={index}
                sx={style.slide}
                backgroundImage={`url(${slide.url})`}
                transform={`translateX(-${current * 100}%)`}
              >
                <Box position="relative" w="100%" h="100%" bgColor="rgba(0,0,0,0.4)" />
              </Box>
            );
          })}
        </Box>
      </Box>
      <Circle
        as={Button}
        variant="unstyle"
        onClick={() => nextSlide()}
        sx={style.prev}
      >
        <MdOutlineArrowBackIos />
      </Circle>
      <Circle
        onClick={() => prevSlide()}
        as={Button}
        variant="unstyle"
        sx={style.next}
      >
        <MdOutlineArrowForwardIos />
      </Circle>
    </Box>
  );
};

export default Slider;
