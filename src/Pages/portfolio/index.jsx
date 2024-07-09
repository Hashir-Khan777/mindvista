import React from "react";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Herosection from "../../Components/heroSection";
import CustomButton from "../../Components/button";
import PortfolioSection from "../../Components/portfolioSection";
import ContactSection from "../../Components/contactSection";
import style from "./style";
import Technologycard from "../../Components/technologyCard";
import { CiMobile4 } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <Box>
      <Herosection
        heading="PORTFOLIO"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
        consectetur, in neque quia hic odit ab porro molestias culpa, atque
        deleniti dolorem necessitatibus sed nobis maiores! Obcaecati nam
        quod vel?"
      />
      <Box py="4rem" px="20px" textAlign="center" bgColor="#F8BE28">
        <Box m="auto" maxWidth={1440}>
          <Heading sx={style.heading}>
            Develop results-driven products for entrepreneurs, startups, and
            enterprises with a leading software development company.
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            mt={{ base: "0", lg: "4rem" }}
            justifyContent="center"
            placeItems="center"
          >
            <Stack sx={style.iconBox}>
              <Icon mb="20px" fontSize="60px" as={CiMobile4} />
              <Heading fontSize="20px">App</Heading>
              <Heading fontSize="20px">Development</Heading>
            </Stack>
            <Stack sx={style.iconBox}>
              <Icon mb="20px" fontSize="60px" as={CiMobile4} />
              <Heading fontSize="20px">Game</Heading>
              <Heading fontSize="20px">Development</Heading>
            </Stack>
            <Stack sx={style.iconBox}>
              <Icon mb="20px" fontSize="60px" as={FaLaptopCode} />
              <Heading fontSize="20px">Web</Heading>
              <Heading fontSize="20px">Development</Heading>
            </Stack>
            <Stack sx={style.iconBox}>
              <Icon mb="20px" fontSize="60px" as={SiHiveBlockchain} />
              <Heading fontSize="20px">Blockchain</Heading>
              <Heading fontSize="20px">Development</Heading>
            </Stack>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
