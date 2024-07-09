import React, { useState } from "react";
import {
  Box,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Button,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import Herosection from "../../Components/heroSection";
import { CiMobile4 } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";
import style from "./style";

const projectData = {
  app: [
    {
      title: "Fitness Tracker App",
      description: "A mobile app to track workouts, nutrition, and progress.",
      image: "./images/portfolio-1.png",
      tags: ["React Native", "Redux", "Firebase"],
    },
    {
      title: "Expense Manager App",
      description:
        "An app to manage personal finances, track expenses, and set budgets.",
      image: "./images/portfolio-2.png",
      tags: ["Flutter", "Dart", "SQLite"],
    },
    {
      title: "Meditation App",
      description:
        "A meditation and mindfulness app with guided sessions and breathing exercises.",
      image: "./images/portfolio-3.png",
      tags: ["Kotlin", "Coroutines", "Room"],
    },
    {
      title: "E-Learning App",
      description:
        "An educational app offering courses, quizzes, and progress tracking.",
      image: "./images/portfolio-4.png",
      tags: ["Swift", "Combine", "CoreData"],
    },
    {
      title: "Travel Booking App",
      description:
        "A travel booking app for flights, hotels, and holiday packages.",
      image: "./images/portfolio-5.png",
      tags: ["React Native", "GraphQL", "AWS"],
    },
    {
      title: "Recipe App",
      description:
        "A recipe app with a collection of cooking recipes and meal planning features.",
      image: "./images/portfolio-6.png",
      tags: ["Flutter", "Firebase", "Firestore"],
    },
  ],
  game: [
    {
      title: "Puzzle Adventure Game",
      description:
        "An immersive puzzle adventure game with challenging levels and story-driven gameplay.",
      image: "./images/portfolio-7.png",
      tags: ["Unity", "C#", "Blender"],
    },
    {
      title: "Multiplayer Racing Game",
      description:
        "A fast-paced multiplayer racing game with customizable cars and tracks.",
      image: "./images/portfolio-8.png",
      tags: ["Blueprint", "Photoshop"],
    },
    {
      title: "2D Platformer",
      description:
        "A classic 2D platformer game with retro graphics and challenging levels.",
      image: "./images/portfolio-9.png",
      tags: ["Godot", "GDScript", "Aseprite"],
    },
    {
      title: "Virtual Reality Shooter",
      description:
        "A first-person shooter game designed for virtual reality headsets.",
      image: "./images/portfolio-1.png",
      tags: ["Unity", "C#", "Oculus SDK"],
    },
    {
      title: "Multiplayer Racing Game",
      description:
        "A fast-paced multiplayer racing game with customizable cars and tracks.",
      image: "./images/portfolio-8.png",
      tags: ["Unreal Engine", "Photoshop"],
    },
    {
      title: "2D Platformer",
      description:
        "A classic 2D platformer game with retro graphics and challenging levels.",
      image: "./images/portfolio-9.png",
      tags: ["Godot", "GDScript", "Aseprite"],
    },
    {
      title: "Virtual Reality Shooter",
      description:
        "A first-person shooter game designed for virtual reality headsets.",
      image: "./images/portfolio-1.png",
      tags: ["Unity", "C#", "Oculus SDK"],
    },
  ],
  web: [
    {
      title: "HRM Management Tool",
      description:
        "A comprehensive HRM tool for managing employee data, attendance, and performance.",
      image: "./images/portfolio-2.png",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "E-commerce Store",
      description:
        "An online store with a range of features including product browsing, cart, and checkout.",
      image: "./images/portfolio-3.png",
      tags: ["Vue.js", "Express", "MySQL"],
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects, blog posts, and contact information.",
      image: "./images/portfolio-4.png",
      tags: ["Gatsby", "GraphQL", "CSS"],
    },
    // {
    //   title: "Blog Platform",
    //   description:
    //     "A content management platform for creating and managing blog posts and user comments.",
    //   image: "./images/portfolio-5.png",
    //   tags: ["Next.js", "Firebase", "Tailwind CSS"],
    // },
  ],
  blockchain: [
    {
      title: "Crypto Wallet",
      description:
        "A secure crypto wallet for managing and storing various cryptocurrencies.",
      image: "./images/portfolio-6.png",
      tags: ["Solidity"],
    },
    {
      title: "Decentralized Exchange",
      description:
        "A decentralized exchange platform for trading cryptocurrencies.",
      image: "./images/portfolio-7.png",
      tags: ["Angular", "Ethereum", "Web3.js"],
    },
    {
      title: "NFT Marketplace",
      description:
        "An online marketplace for buying and selling non-fungible tokens (NFTs).",
      image: "./images/portfolio-8.png",
      tags: ["Smart Contracts", "IPFS"],
    },
    {
      title: "Blockchain Voting System",
      description:
        "A secure and transparent voting system based on blockchain technology.",
      image: "./images/portfolio-9.png",
      tags: ["React", "Hyperledger"],
    },
    {
      title: "NFT Marketplace",
      description:
        "An online marketplace for buying and selling non-fungible tokens (NFTs).",
      image: "./images/portfolio-8.png",
      tags: ["Vue.js", "IPFS"],
    },
    {
      title: "Blockchain Voting System",
      description:
        "A secure and transparent voting system based on blockchain technology.",
      image: "./images/portfolio-9.png",
      tags: ["React", "Hyperledger"],
    },
  ],
};

const tagColors = {
  React: "blue",
  "Node.js": "green",
  "Web3.js": "green",
  MongoDB: "orange",
  "React Native": "cyan",
  Redux: "purple",
  Firebase: "red",
  Flutter: "teal",
  Angular: "teal",
  Dart: "yellow",
  SQLite: "pink",
  Kotlin: "red",
  Coroutines: "pink",
  Room: "blue",
  Swift: "gray",
  Combine: "blue",
  CoreData: "green",
  Hyperledger: "green",
  GraphQL: "orange",
  "Smart Contracts": "orange",
  AWS: "cyan",
  Unity: "purple",
  Solidity: "purple",
  Ethereum: "purple",
  "C#": "red",
  Blender: "teal",
  "Unreal Engine": "yellow",
  Blueprint: "pink",
  Photoshop: "cyan",
  Godot: "purple",
  IPFS: "purple",
  GDScript: "yellow",
  Aseprite: "gray",
};

const Portfolio = () => {
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
                  src={project.image}
                  alt={project.title}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" color={"#fff"}>
                    {project.title}
                  </Heading>
                  <Text color={"#fff"}>{project.description}</Text>
                  <Stack direction="row" spacing={2} mt={2}>
                    {project.tags.map((tag, idx) => (
                      <Tag key={idx} colorScheme={tagColors[tag]}>
                        <TagLabel>{tag}</TagLabel>
                      </Tag>
                    ))}
                  </Stack>
                </Stack>
              </CardBody>
              <CardFooter>
                <Button
                  sx={{
                    fontSize: { base: "10px", md: "12px" },
                    fontWeight: 700,
                    mt: "10px",
                  }}
                >
                  View More Details
                </Button>
              </CardFooter>
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
            columns={{ base: 1, md: 2, lg: 4 }}
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
              }}
              onClick={() => handleCategoryClick("app")}
            >
              <Icon mb="20px" fontSize="60px" as={CiMobile4} />
              <Heading fontSize="20px">App</Heading>
              <Heading fontSize="20px">Development</Heading>
            </Stack>
            <Stack
              sx={{
                ...style.iconBox,
                backgroundColor:
                  selectedCategory === "game" ? "#F8BE28" : "#090909",
                color: selectedCategory === "game" ? "black" : "#F8BE28",
              }}
              onClick={() => handleCategoryClick("game")}
            >
              <Icon mb="20px" fontSize="60px" as={CiMobile4} />
              <Heading fontSize="20px">Game</Heading>
              <Heading fontSize="20px">Development</Heading>
            </Stack>
            <Stack
              sx={{
                ...style.iconBox,
                backgroundColor:
                  selectedCategory === "web" ? "#F8BE28" : "#090909",
                color: selectedCategory === "web" ? "black" : "#F8BE28",
              }}
              onClick={() => handleCategoryClick("web")}
            >
              <Icon mb="20px" fontSize="60px" as={FaLaptopCode} />
              <Heading fontSize="20px">Web</Heading>
              <Heading fontSize="20px">Development</Heading>
            </Stack>
            <Stack
              sx={{
                ...style.iconBox,
                backgroundColor:
                  selectedCategory === "blockchain" ? "#F8BE28" : "#090909",
                color: selectedCategory === "blockchain" ? "black" : "#F8BE28",
              }}
              onClick={() => handleCategoryClick("blockchain")}
            >
              <Icon mb="20px" fontSize="60px" as={SiHiveBlockchain} />
              <Heading fontSize="20px">Blockchain</Heading>
              <Heading fontSize="20px">Development</Heading>
            </Stack>
          </SimpleGrid>
        </Box>
      </Box>
      {renderProjects()}
    </Box>
  );
};

export default Portfolio;
