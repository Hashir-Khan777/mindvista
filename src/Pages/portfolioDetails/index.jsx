import { useParams, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Image,
  Stack,
  Tag,
  TagLabel,
  SimpleGrid,
  Button,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { projectData, tagColors } from "../portfolio/PortfolioData";

const ProjectDetails = () => {
  const { category, projectId } = useParams();
  const project = projectData[category][projectId];

  const relatedProjects = Object.keys(projectData[category])
    .filter((id) => id !== projectId)
    .map((id) => ({ id, ...projectData[category][id] }));

  return (
    <Box bgColor="#090909" color="#fff">
      <Stack direction={{ base: "column", lg: "row" }} spacing="4rem" p="4rem">
        <Box w={{ base: "100%", lg: "50%" }}>
          <Swiper spaceBetween={50} slidesPerView={1}>
            {project?.image.map((img, index) => (
              <SwiperSlide key={index}>
                <Image src={img} alt={`Slide ${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDir: "column",
          }}
          w={{ base: "100%", lg: "50%" }}
        >
          <Heading>{project.title}</Heading>
          <Text mt="2rem">{project.description}</Text>
          <Text mt="2rem">Category: {category}</Text>
          <Stack direction="row" spacing={2} mt="2rem">
            {project?.tags.map((tag, idx) => (
              <Tag key={idx} colorScheme={tagColors[tag]}>
                <TagLabel fontSize={"0.7rem"}>{tag}</TagLabel>
              </Tag>
            ))}
          </Stack>
        </Box>
      </Stack>

      <Box mt="4rem" bgColor="#000" p="4rem">
        <Heading as="h1" fontSize="2.5rem" mb="2rem">
          Related Projects
        </Heading>
        <SimpleGrid
          my="20px"
          mt="2rem"
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          spacing="30px"
          justifyItems="center"
          alignItems={"center"}
          m="auto"
          placeItems={"center"}
        >
          {relatedProjects.map((relatedProject, idx) => (
            <Card maxW="md" key={idx} minH={"450px"} bgColor={"#1E1E1E"}>
              <CardBody>
                <Image
                  src={relatedProject.image[0]}
                  alt={relatedProject.title}
                  borderRadius="lg"
                  h={"auto"}
                  w={"100%"}
                />
                <Stack mt="6" spacing="3">
                  <Heading size="1.2rem" color={"#fff"}>
                    {relatedProject.title}
                  </Heading>
                  <Text color={"#fff"} fontSize={"0.8rem"}>
                    {relatedProject.description}
                  </Text>
                  <Stack direction="row" spacing={2} mt={2}>
                    {relatedProject.tags.map((tag, tagIdx) => (
                      <Tag key={tagIdx} colorScheme={tagColors[tag]}>
                        <TagLabel fontSize={"0.7rem"}>{tag}</TagLabel>
                      </Tag>
                    ))}
                  </Stack>
                  <Button
                    as={RouterLink}
                    to={`/project/${category}/${relatedProject.id}`}
                    mt="1rem"
                    sx={{
                      fontSize: { base: "10px", md: "12px" },
                      fontWeight: 700,
                      mt: "10px",
                    }}
                  >
                    View More Details
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ProjectDetails;
