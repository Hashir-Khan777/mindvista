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
  Flex,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

// Install Swiper modules
import { projectData, tagColors } from "../portfolio/PortfolioData";

const ProjectDetails = () => {
  const { category, projectId } = useParams();
  const project = projectData[category][projectId];

  const relatedProjects = Object.keys(projectData[category])
    .filter((id) => id !== projectId)
    .map((id) => ({ id, ...projectData[category][id] }));

  return (
    <Box bgColor="#000" color="#fff">
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing="4rem"
        p="4rem"
        pt="8rem"
      >
        <Box w={{ base: "100%", lg: "50%" }}>
          <Swiper
            // spaceBetween={50}
            // slidesPerView={1}
            // autoplay={{ delay: 3000 }} // Autoplay with a delay of 3 seconds
            // effect={"coverflow"}
            // grabCursor={true}
            // centeredSlides={true}
            // coverflowEffect={{
            //   rotate: 50,
            //   stretch: 0,
            //   depth: 100,
            //   modifier: 1,
            //   slideShadows: true,
            // }}
            // pagination={true}
            // modules={[Autoplay, EffectCoverflow, Pagination]}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
            effect={"coverflow"}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
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
          <Heading color={"#F8BE28"}>{project.title}</Heading>
          <Text mt="2rem">{project.description}</Text>
          <Flex gap={2}>
            <Text mt="2rem" color="#F8BE28">
              Category:
            </Text>
            <Text mt="2rem"> {project.category}</Text>
          </Flex>
          <Stack direction="row" spacing={2} mt="2rem">
            {project?.tags.map((tag, idx) => (
              <Tag key={idx} colorScheme={tagColors[tag]}>
                <TagLabel fontSize={"0.7rem"}>{tag}</TagLabel>
              </Tag>
            ))}
          </Stack>
        </Box>
      </Stack>
      <Box mt="4rem" bgColor="#090909" p="4rem">
        <Heading as="h1" fontSize="2.5rem" mb="2rem" color="#fff">
          Related Projects
        </Heading>
        <SimpleGrid
          my="20px"
          mt="2rem"
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          spacing="30px"
          justifyItems="center"
          alignItems="center"
          m="auto"
          placeItems="center"
        >
          {relatedProjects.map((relatedProject, idx) => (
            <Card
              maxW="sm"
              key={idx}
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
                <Box>
                  <Image
                    src={relatedProject.image[0]}
                    alt={relatedProject.title}
                    borderRadius="lg"
                    height="auto"
                    width="100%"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="1.2rem" color="#F8BE28">
                      {relatedProject.title}
                    </Heading>
                    <Text color="#fff" fontSize="0.8rem" minHeight="2rem">
                      {relatedProject.description}
                    </Text>
                  </Stack>
                </Box>
                <Box>
                  <Stack direction="row" spacing={2} mt={4}>
                    {relatedProject.tags.map((tag, tagIdx) => (
                      <Tag key={tagIdx} colorScheme={tagColors[tag]}>
                        <TagLabel fontSize="0.7rem">{tag}</TagLabel>
                      </Tag>
                    ))}
                  </Stack>
                  <Button
                    as={RouterLink}
                    to={`/project/${category}/${relatedProject.id}`}
                    sx={{
                      fontSize: { base: "10px", md: "12px" },
                      fontWeight: 700,
                      mt: "20px",
                      bgColor: "#F8BE28",
                      w: "100%",
                    }}
                  >
                    View More Details
                  </Button>
                </Box>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ProjectDetails;
