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
      <Box py="4rem" px="20px" textAlign="center" bgColor="bisque.100">
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
      <Stack gap={5} my="30px">
        <PortfolioSection
          subHeading="MOBILE APP"
          heading="Hictic - revolutionizing traditional advertising & digital marketing"
          text="Launch new adverts and engage with your customers - an all-in-one
          platform that promotes your brand and builds engagement."
          iconImage="./images/portfolio-icon-1.png"
          image="./images/portfolio-image-4.webp"
        />
        <PortfolioSection
          customStyle={{
            flexDirection: { base: "column-reverse", lg: "row-reverse" },
          }}
          subHeading="MOBILE APP"
          heading="Hictic - revolutionizing traditional advertising & digital marketing"
          text="Launch new adverts and engage with your customers - an all-in-one
          platform that promotes your brand and builds engagement."
          iconImage="./images/portfolio-icon-1.png"
          image="./images/portfolio-image-4.webp"
        />
      </Stack>
      <Box my="6rem" textAlign="center">
        <Heading
          px="20px"
          fontSize={{ base: "25px", lg: "45px" }}
          fontWeight={700}
          mb="4rem"
        >
          Technologies we work with
        </Heading>
        <Tabs position="relative" variant="unstyled">
          <TabList
            w="fit-content"
            gap={{ base: "0px", lg: "30px" }}
            m="auto"
            textAlign="center"
          >
            <Tab sx={style.tab}>Mobile</Tab>
            <Tab sx={style.tab}>Frontend</Tab>
            <Tab sx={style.tab}>Database</Tab>
            <Tab sx={style.tab}>Backend</Tab>
          </TabList>
          <TabIndicator sx={style.tabIndicator} />
          <TabPanels>
            <TabPanel as={Flex} sx={style.tabPanel}>
              <Technologycard
                image="./images/technology-image-1.png"
                text="Ios"
              />
              <Technologycard
                image="./images/technology-image-2.png"
                text="Android"
              />
              <Technologycard
                image="./images/technology-image-3.png"
                text="React native"
              />
              <Technologycard
                image="./images/technology-image-4.png"
                text="Flutter"
              />
              <Technologycard
                image="./images/technology-image-5.png"
                text="Ionic"
              />
              <Technologycard
                image="./images/technology-image-6.png"
                text="Swift"
              />
              <Technologycard
                image="./images/technology-image-7.png"
                text="Kotlin"
              />
              <Technologycard
                image="./images/technology-image-8.png"
                text="Objective-c"
              />
            </TabPanel>
            <TabPanel as={Flex} sx={style.tabPanel}>
              <Technologycard
                image="./images/technology-image-9.png"
                text="Agular js"
              />
              <Technologycard
                image="./images/technology-image-2.png"
                text="React js"
              />
              <Technologycard
                image="./images/technology-image-10.png"
                text="Typescript"
              />
              <Technologycard
                image="./images/technology-image-11.png"
                text="Vue"
              />
              <Technologycard
                image="./images/technology-image-12.png"
                text="Wpf"
              />
              <Technologycard
                image="./images/technology-image-13.png"
                text="Html5"
              />
            </TabPanel>
            <TabPanel as={Flex} sx={style.tabPanel}>
              <Technologycard
                image="./images/technology-image-14.png"
                text="Mongodb"
              />
              <Technologycard
                image="./images/technology-image-15.png"
                text="Mysql"
              />
              <Technologycard
                image="./images/technology-image-16.png"
                text="Ms sql"
              />
              <Technologycard
                image="./images/technology-image-17.png"
                text="Firebase"
              />
              <Technologycard
                image="./images/technology-image-18.png"
                text="Dynamodb"
              />
              <Technologycard
                image="./images/technology-image-19.png"
                text="Redis"
              />
            </TabPanel>
            <TabPanel as={Flex} sx={style.tabPanel}>
              <Technologycard
                image="./images/technology-image-20.png"
                text="Php"
              />
              <Technologycard
                image="./images/technology-image-21.png"
                text="Java"
              />{" "}
              <Technologycard
                image="./images/technology-image-22.png"
                text="Node js"
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <ContactSection />
    </Box>
  );
};

export default Portfolio;
