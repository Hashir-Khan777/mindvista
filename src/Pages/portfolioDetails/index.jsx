import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Image,
  Stack,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { projectData, tagColors } from "../portfolio/PortfolioData";
const ProjectDetails = () => {
  const { category, projectId } = useParams();
  const project = projectData[category][projectId];

  return (
    <Box p="4rem" bgColor="#090909" color="#fff">
      <Stack direction={{ base: "column", lg: "row" }} spacing="4rem">
        <Box w={{ base: "100%", lg: "50%" }}>
          <Swiper spaceBetween={50} slidesPerView={1}>
            {project?.image.map((img, index) => (
              <SwiperSlide key={index}>
                <Image src={img} alt={`Slide ${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Box w={{ base: "100%", lg: "50%" }}>
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
    </Box>
  );
};

export default ProjectDetails;
