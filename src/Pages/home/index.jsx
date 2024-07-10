import React from "react";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  Button,
  SimpleGrid,
  keyframes,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import ServiceCard from "../../Components/serviceCard";
import Clientcard from "../../Components/clientCard";
import Protfolio from "../../Components/portfolioSlider";
import Aboutsection from "../../Components/aboutSection";
import style from "./style";

const Home = () => {
  const logos = [
    "/images/google.png",
    "/images/amazon-logo.png",
    "/images/stripe-logo.png",
    "/images/microsoft-logo.png",
    "/images/shopify-logo.png",
    "/images/google-logo.png",
    "/images/coursera-logo.png",
  ];
  const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;
  const servicesData = [
    {
      heading: "Web Designing",
      text: "Crafting visually stunning and user-friendly websites that captivate and engage visitors. Our designs are tailored to reflect your brand identity while ensuring an optimal user experience.",
      img: "/images/web-design.png",
    },
    {
      heading: "Web Development",
      text: "Building robust and scalable websites using the latest technologies to ensure optimal performance. Our development services include everything from custom website creation to e-commerce solutions and web applications.",
      img: "/images/web-dev.png",
    },
    {
      heading: "App Development",
      text: "Developing intuitive and high-performing mobile applications for both iOS and Android platforms. We focus on creating apps that offer seamless functionality and an engaging user experience.",
      img: "/images/app-dev.png",
    },
    {
      heading: "Content Writing",
      text: "Producing compelling and relevant content that resonates with your target audience. Our content writing services cover everything from website copy to blog posts and social media content.",
      img: "/images/content-writing.png",
    },
    {
      heading: "Branding and PR",
      text: "Build a strong brand identity and enhance your reputation with our branding and PR services. We help you define your brand story, manage your online reputation, and develop strategic PR campaigns to increase visibility and credibility.",
      img: "/images/branding-pr.png",
    },
    {
      heading: "SEO Optimization",
      text: "Enhancing online visibility and search engine rankings to attract more organic traffic. Our SEO strategies are designed to improve your website's performance and help you reach a larger audience.",
      img: "/images/seo.png",
    },
  ];

  return (
    <>
      <Box flex={1}>
        <Box sx={style.background}>
          <Flex
            sx={style.overlay}
            flexDirection={{ base: "column", md: "row" }}
            display={{ base: "block", md: "flex" }}
          >
            <Box
              sx={{
                flex: { base: "1", md: "0.5" },
                textAlign: { base: "left", md: "left" },
                maxW: "100%",
                // m: "auto",
                ml: "3rem",
                pt: { base: "7rem", md: "0" },
              }}
            >
              <Text
                sx={{
                  fontSize: { base: "0.8rem", md: "1.2rem" },
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                MindVista
              </Text>
              <Text
                sx={{
                  fontSize: { base: "1.8rem", md: "2.4rem" },
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Your{" "}
                <Text as="span" sx={{ color: "#F8BE28" }}>
                  Comprehensive
                </Text>{" "}
                Solution for{" "}
                <Text as="span" sx={{ color: "#F8BE28" }}>
                  Online Business.
                </Text>
              </Text>
              <Heading
                sx={{
                  fontSize: { base: "12px", md: "15px" },
                  fontWeight: 400,
                  color: "#fff",
                  letterSpacing: "1px",
                  lineHeight: "20px",
                  mt: 4,
                }}
              >
                Unlock your business potential with MindVista! If you can dream
                it, we can make it happen. Start your journey to success now!
                Click the button below to get in touch.
              </Heading>
              <Button
                sx={{
                  fontSize: { base: "10px", md: "12px" },
                  fontWeight: 700,
                  mt: "10px",
                }}
              >
                Book a Free Call
              </Button>
            </Box>
            <Box
              sx={{
                textAlign: { base: "center", md: "left" },
                flex: { base: "0", md: "0.4" },
              }}
            >
              <Image
                src="/images/hero-bg.png"
                sx={{
                  width: "auto",
                  height: "auto",
                  display: { base: "none", md: "block" },
                }}
              />
            </Box>
          </Flex>
        </Box>
        <Aboutsection />
        <Box sx={style.serviceBox}>
          <Heading sx={style.serviceHeading}>Our Services</Heading>
          <Text sx={style.text}>
            We provide tailored IT services using cutting-edge technology and
            creative <br /> strategies to drive efficiency and success.
          </Text>
          <Box sx={style.serviceContainer}>
            <Grid
              templateColumns={{
                base: "1fr",
                md: "1fr 1fr",
                lg: "repeat(3, 1fr)",
              }}
              gap={6}
            >
              {servicesData.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </Grid>
          </Box>
        </Box>
        <Protfolio />
        <Box sx={style.reviewContainer}>
          <Heading sx={style.serviceHeading}>Testimonial</Heading>
          <Text sx={style.text}>
            {`Don't just take our word for it - see what actual users of our service have to say about their experience.`}
          </Text>
          <SimpleGrid
            my="20px"
            mt="2rem"
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            spacing="30px"
            justifyItems="center"
          >
            <Clientcard
              image="/images/testimonial-1.png"
              heading="Jane Smith"
              subHeading="CEO of Tech Innovators"
              text="MindVista transformed our outdated systems into a cutting-edge digital platform. Their expertise and dedication have significantly boosted our efficiency and client satisfaction. We couldn’t be happier with the results!"
              rating={5}
              bgColor="#1a1405"
            />
            <Clientcard
              image="/images/testimonial-2.png"
              heading="Tom Williams"
              subHeading="Founder of Creative Solutions"
              text="Working with MindVista has been a game-changer for our company. Their ability to understand our needs and provide tailored solutions has helped us navigate the digital landscape with confidence. Outstanding service!"
              rating={5}
              bgColor="#1e1e1e"
            />
            <Clientcard
              image="/images/testimonial-3.png"
              heading="Michael Brown"
              subHeading="Marketing Director of PrimeTech"
              text="From the initial consultation to the final implementation, MindVista has been a pleasure to work with. Their innovative approach and professional execution have greatly improved our business efficiency. We highly recommend their services!"
              rating={4}
              bgColor="#1e1e1e"
            />
            <Clientcard
              image="/images/testimonial-4.png"
              heading="Sarah Johnson"
              subHeading="CEO of NextGen Solutions"
              text="MindVista exceeded our expectations at every turn. Their creative strategies and advanced technological solutions have significantly enhanced our operational efficiency. We're thrilled with the partnership and results!"
              rating={5}
              bgColor="#1e1e1e"
            />
          </SimpleGrid>
        </Box>
        {/* Teams Section */}
        {/* <Box
          sx={{
            bgColor: "#090909",
            height: "auto",
            py: { base: "2rem", lg: "6rem" },
            px: { base: "1rem", lg: "4rem" },
          }}
        >
          <Heading sx={style.serviceHeading}>Our Team</Heading>
          <Text sx={style.text}>
            {`Explore Our Success Stories and Innovative Projects`}
          </Text>
          <SimpleGrid
            my="40px"
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            spacing="30px"
            justifyItems="center"
          >
            <Image
              src={"/images/team-1.png"}
              borderRadius={"10px"}
              width={"auto"}
            />
            <Image
              src={"/images/team-2.png"}
              borderRadius={"10px"}
              width={"auto"}
            />
            <Image
              src={"/images/team-3.png"}
              borderRadius={"10px"}
              width={"auto"}
            />
            <Image
              src={"/images/team-4.png"}
              borderRadius={"10px"}
              width={"auto"}
            />
            <Image
              src={"/images/team-5.png"}
              borderRadius={"10px"}
              width={"auto"}
            />
            <Image
              src={"/images/team-6.png"}
              borderRadius={"10px"}
              width={"auto"}
            />
            <Image
              src={"/images/team-7.png"}
              borderRadius={"10px"}
              width={"auto"}
            />
            <Image
              src={"/images/team-8.png"}
              borderRadius={"10px"}
              width={"auto"}
            />
          </SimpleGrid>
        </Box> */}
        {/* Partners Section */}
        <Box
          sx={{
            bgColor: "#151515",
            height: "auto",
            px: { base: "1rem", lg: "4rem" },
            pb: "8rem",
          }}
        >
          <Heading sx={style.serviceHeading}>
            We Work With the Best Partners
          </Heading>
          <Text sx={style.text}>
            {`Collaborating with Industry Leaders for Unmatched Quality and Innovation`}
          </Text>
          <Box
            overflow="hidden"
            position="relative"
            // p="20px"
            w="100%"
            display="flex"
            justifyContent="center"
            m="auto"
            top="50px"
          >
            <Box
              display="flex"
              animation={`${scrollAnimation} 6s linear infinite`}
            >
              {logos.map((logo, index) => (
                <Image
                  sx={{
                    h: { base: "30px", md: "40px" },
                  }}
                  key={index}
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  mr="30px"
                  className="logo"
                />
              ))}
              {logos.map((logo, index) => (
                <Image
                  sx={{
                    h: { base: "30px", md: "40px" },
                  }}
                  key={index}
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  mr="30px"
                  className="logo"
                />
              ))}
            </Box>
          </Box>
        </Box>
        {/* Contact Section */}
        <Box sx={style.contactBackground}>
          <Box sx={style.contactOverlay}>
            <Heading sx={style.serviceHeading}>Contact Us</Heading>
            <Text sx={style.text}>
              {`Reach Out to Elevate Your Business. Contact Us for Premium Services and Tailored Solutions.`}
            </Text>
            <Box
              bg="#00000080"
              p={6}
              borderRadius="md"
              border="1px solid rgba(255, 255, 255, 0.2)"
              width={{ base: "90%", sm: "80%", md: "60%" }}
              mt={6}
            >
              <Flex
                direction={{ base: "column", md: "row" }}
                justifyContent={"center"}
                alignItems={"baseline"}
                gap={4}
              >
                <Box flex={1} width={{ base: "100%", md: "50%" }}>
                  <FormControl mb={4}>
                    <FormLabel color="white">
                      Name <span style={{ color: "red" }}>*</span>
                    </FormLabel>
                    <Input />
                  </FormControl>
                  <FormControl mb={4}>
                    <FormLabel color="white">
                      Email <span style={{ color: "red" }}>*</span>
                    </FormLabel>
                    <Input type="email" />
                  </FormControl>
                  <FormControl mb={4}>
                    <FormLabel color="white">Phone Number</FormLabel>
                    <Input type="tel" />
                  </FormControl>
                </Box>
                <Box flex={1} width={{ base: "100%", md: "%" }} height={"auto"}>
                  <FormControl mb={4}>
                    <FormLabel color="white">Message</FormLabel>
                    <Textarea height="100%" rows={9} />
                  </FormControl>
                </Box>
              </Flex>
              <Box position="relative" height="3rem">
                <Button
                  type="submit"
                  sx={{
                    position: "absolute",
                    bottom: "-40px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#F8BE28",
                    color: "#000",
                    _hover: {
                      backgroundColor: "#F8BE28",
                      opacity: 0.8,
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* <ContactForm /> */}
      </Box>
    </>
  );
};

export default Home;
