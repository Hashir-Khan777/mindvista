import React, { useState } from "react";
import {
  Box,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Card,
  CardBody,
  Image,
  Text,
  Button,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Herosection from "../../Components/heroSection";
import { CiMobile4 } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";
import style from "./style";
import { projectData, tagColors } from "./PortfolioData";

const Portfolio = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("app");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const renderProjects = () => {
    if (!selectedCategory) return null;
    return (
      <Box py="6rem" bgColor="#090909">
        <SimpleGrid
          my="20px"
          mt="2rem"
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          spacing="30px"
          justifyItems="center"
          alignItems={"center"}
          m="auto"
          placeItems={"center"}
          mx={"4rem"}
        >
          {projectData[selectedCategory].map((project, index) => (
            <Card maxW="sm" key={index} minH={"500px"} bgColor={"#1E1E1E"}>
              <CardBody>
                <Image
                  h={"auto"}
                  w={"100%"}
                  src={project.image[0]}
                  alt={project.title}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="1.2rem" color={"#F8BE28"}>
                    {project.title}
                  </Heading>
                  <Text color={"#fff"} fontSize={"0.8rem"}>
                    {project.description}
                  </Text>
                  <Stack direction="row" spacing={2} mt={2}>
                    {project.tags.map((tag, idx) => (
                      <Tag key={idx} colorScheme={tagColors[tag]}>
                        <TagLabel fontSize={"0.7rem"}>{tag}</TagLabel>
                      </Tag>
                    ))}
                  </Stack>
                  <Button
                    sx={{
                      fontSize: { base: "10px", md: "12px" },
                      fontWeight: 700,
                      mt: "10px",
                      bgColor: "#F8BE28",
                    }}
                    onClick={() =>
                      navigate(`/project/${selectedCategory}/${index}`)
                    }
                  >
                    View More Details
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    );
  };

  return (
    <Box>
      <Herosection
        heading="PORTFOLIO"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
        consectetur, in neque quia hic odit ab porro molestias culpa, atque
        deleniti dolorem necessitatibus sed nobis maiores! Obcaecati nam
        quod vel?"
      />
      <Box py="4rem" px="20px" textAlign="center" bgColor="#000">
        <Box m="auto" maxWidth={1440}>
          <Heading sx={style.heading}>
            Develop results-driven products for entrepreneurs, startups, and
            enterprises with a leading software development company.
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            mt={{ base: "0", lg: "4rem" }}
            justifyContent="center"
            placeItems="center"
          >
            <Stack
              sx={{
                ...style.iconBox,
                backgroundColor:
                  selectedCategory === "app" ? "#F8BE28" : "#090909",
                color: selectedCategory === "app" ? "black" : "#F8BE28",
                _hover: {
                  bgColor: "#F8BE28",
                  color: "#000",
                },
              }}
              onClick={() => handleCategoryClick("app")}
            >
              <Icon mb="20px" fontSize="60px" as={CiMobile4} />
              <Heading fontSize="20px">Web</Heading>
              <Heading fontSize="20px">Application</Heading>
            </Stack>
            <Stack
              sx={{
                ...style.iconBox,
                backgroundColor:
                  selectedCategory === "game" ? "#F8BE28" : "#090909",
                color: selectedCategory === "game" ? "black" : "#F8BE28",
                _hover: {
                  bgColor: "#F8BE28",
                  color: "#000",
                },
              }}
              onClick={() => handleCategoryClick("game")}
            >
              <Icon mb="20px" fontSize="60px" as={CiMobile4} />
              <Heading fontSize="20px">Mobile</Heading>
              <Heading fontSize="20px">Application</Heading>
            </Stack>
            <Stack
              sx={{
                ...style.iconBox,
                backgroundColor:
                  selectedCategory === "web" ? "#F8BE28" : "#090909",
                color: selectedCategory === "web" ? "black" : "#F8BE28",
                _hover: {
                  bgColor: "#F8BE28",
                  color: "#000",
                },
              }}
              onClick={() => handleCategoryClick("web")}
            >
              <Icon mb="20px" fontSize="60px" as={FaLaptopCode} />
              <Heading fontSize="20px">Admin</Heading>
              <Heading fontSize="20px">Panel</Heading>
            </Stack>
            <Stack
              sx={{
                ...style.iconBox,
                backgroundColor:
                  selectedCategory === "blockchain" ? "#F8BE28" : "#090909",
                color: selectedCategory === "blockchain" ? "black" : "#F8BE28",
                _hover: {
                  bgColor: "#F8BE28",
                  color: "#000",
                },
              }}
              onClick={() => handleCategoryClick("blockchain")}
            >
              <Icon mb="20px" fontSize="60px" as={SiHiveBlockchain} />
              <Heading fontSize="20px">UI UX</Heading>
              <Heading fontSize="20px">Designing</Heading>
            </Stack>
          </SimpleGrid>
        </Box>
      </Box>
      {renderProjects()}
    </Box>
  );
};

export default Portfolio;
