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
import { CiMobile4 } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";
import { projectData, tagColors } from "./PortfolioData";
import style from "./style";

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
          alignItems="center"
          m="auto"
          placeItems="center"
          mx="4rem"
        >
          {projectData[selectedCategory].map((project, index) => (
            <Card
              maxW="sm"
              key={index}
              minH="500px"
              bgColor="#1E1E1E"
              minHeight="100%"
            >
              <CardBody
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height="100%"
              >
                <Image
                  h="auto"
                  w="100%"
                  src={project.image[0]}
                  alt={project.title}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="1.2rem" color="#F8BE28">
                    {project.title}
                  </Heading>
                  <Text color="#fff" fontSize="0.8rem" minHeight="2rem">
                    {project.description}
                  </Text>
                  <Stack direction="row" spacing={2} mt={2}>
                    {project.tags.map((tag, idx) => (
                      <Tag key={idx} colorScheme={tagColors[tag]}>
                        <TagLabel fontSize="0.7rem">{tag}</TagLabel>
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
      <Box py="4rem" pt={"8rem"} px="20px" textAlign="center" bgColor="#000">
        <Box m="auto" maxWidth={1440}>
          <Heading color="#F8BE28" sx={style.heading}>
            Portfolio
          </Heading>
          <Heading
            color="#fff"
            fontWeight="normal"
            mt="10px"
            sx={style.text}
          >
            Develop results-driven products for entrepreneurs, startups, and
            enterprises with a leading software development company.
          </Heading>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="#F8BE28"
            // borderRadius="40px"
            p="10px"
            m={"auto"}
            h={"6rem"}
            width={"70%"}
            mt="4rem"
          >
            {[
              { label: "Web Application", icon: CiMobile4, category: "app" },
              {
                label: "Mobile Application",
                icon: CiMobile4,
                category: "game",
              },
              { label: "Admin Panel", icon: FaLaptopCode, category: "web" },
              {
                label: "UI UX Designing",
                icon: SiHiveBlockchain,
                category: "blockchain",
              },
            ].map(({ label, icon, category }) => (
              <Box
                key={category}
                display="flex"
                alignItems="center"
                p="15px"
                mx="5px"
                borderRadius="40px"
                bg={selectedCategory === category ? "#fff" : "transparent"}
                color={selectedCategory === category ? "#F8BE28" : "#fff"}
                cursor="pointer"
                onClick={() => handleCategoryClick(category)}
              >
                <Icon as={icon} mr="10px" fontSize="40px" />
                <Heading size="sm">{label}</Heading>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      {renderProjects()}
    </Box>
  );
};

export default Portfolio;
