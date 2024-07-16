// Pages/WebDesign.js
import React from "react";
import { Box, Heading, Text, Flex, Image, SimpleGrid } from "@chakra-ui/react";

const WebDev = () => {
  return (
    <Box>
      <Box textAlign="center">
        <Box>
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            px={{ base: "2rem", lg: "8rem" }}
            pt={{ base: "7rem", lg: "10rem" }}
            gap="5rem"
            py="6rem"
            bg={"#090909"}
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                textAlign: "left",
                w: { base: "90%", lg: "50%" },
              }}
            >
              <Heading
                sx={{
                  lineHeight: "3rem",
                  fontSize: { base: "1.8rem", md: "2.4rem" },
                  fontWeight: 600,
                  mb: "24px",
                  color: "#fff",
                }}
              >
                BOOST YOUR BUSINESS <br /> WITH OUR OUTSTANDING{" "}
                <span style={{ color: "#F8BE28" }}>WEB DEVELOPMENT </span>
                SOLUTIONS
              </Heading>
              <Text
                sx={{
                  fontSize: { base: "12px", md: "15px" },
                  mb: "24px",
                  fontWeight: 400,
                  color: "#fff",
                  letterSpacing: "1px",
                  lineHeight: "20px",
                  mt: 4,
                }}
              >
                This is the Web Design page with some dummy content. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Dolores sint autem
                atque et magni vel veritatis libero at iste aut iusto iure
                possimus rem, mollitia ab doloribus consequatur. Veritatis,
                eaque?
              </Text>
            </Box>
            <Box
              sx={{
                textAlign: "left",
              }}
            >
              <Image
                src="/images/webdev.png"
                sx={{
                  w: "auto",
                  h: "300px",
                  px: "2rem",
                }}
              />
            </Box>
          </Flex>
          <Box
            bg={"#000"}
            px={{ base: "2rem", lg: "8rem" }}
            pt={{ base: "7rem", lg: "10rem" }}
            gap="5rem"
            py="6rem"
          >
            <Box
              sx={{
                textAlign: "left",
                width: "80%",
                // width: "50%",
              }}
            >
              <Heading
                sx={{
                  color: "#fff",
                  w: { base: "90%", lg: "50%" },
                  lineHeight: "3rem",
                }}
              >
                TECHNOLOGIES USED IN <br />
                <span style={{ color: "#F8BE28" }}> WEB DEVELOPMENT </span>
              </Heading>
              <Text
                sx={{
                  fontSize: { base: "12px", md: "15px" },
                  fontWeight: 400,
                  mb: "24px",
                  color: "#fff",
                  letterSpacing: "1px",
                  lineHeight: "20px",
                  mt: 4,
                }}
              >
                This is the Web Design page with some dummy content. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Dolores sint autem
                atque et magni vel veritatis libero at iste aut iusto iure
                possimus rem, mollitia ab doloribus consequatur. Veritatis,
                eaque?
              </Text>
              <SimpleGrid
                columns={{ base: 2, lg: 3 }}
                placeItems={"center"}
                mt="4rem"
                gap={{ base: 5, lg: 3, xl: 10 }}
              >
                <Image
                  src="/images/reactjs.png"
                  sx={{
                    w: "80px",
                    h: "80px",
                  }}
                />
                <Image
                  src="/images/javascript.png"
                  sx={{
                    h: "80px",
                    w: "80px",
                  }}
                />
                <Image
                  src="/images/reactjs.png"
                  sx={{
                    w: "80px",
                  }}
                />
                <Image
                  src="/images/bootstrap.png"
                  sx={{
                    w: "80px",
                  }}
                />
                <Image
                  src="/images/wordpress.png"
                  sx={{
                    w: "80px",
                  }}
                />
                <Image
                  src="/images/nodejs.png"
                  sx={{
                    w: "80px",
                  }}
                />
                <Image
                  src="/images/css.png"
                  sx={{
                    w: "80px",
                  }}
                />
                <Image
                  src="/images/reactjs.png"
                  sx={{
                    w: "80px",
                  }}
                />
                <Image
                  src="/images/bootstrap.png"
                  sx={{
                    w: "80px",
                  }}
                />
              </SimpleGrid>
            </Box>
          </Box>
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            px={{ base: "10px", lg: "8rem" }}
            gap="5rem"
            py="6rem"
            pt="8rem"
            bg={"#090909"}
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                textAlign: "left",
                width: "50%",
              }}
            >
              <Heading
                sx={{
                  color: "#fff",
                  lineHeight: "3rem",
                }}
              >
                <span style={{ color: "#F8BE28" }}> WEB DEVELOPMENT </span>
                COMPANY YOU CAN COUNT ON BOOST YOUR
              </Heading>
              <Text
                sx={{
                  fontSize: { base: "12px", md: "15px" },
                  fontWeight: 400,
                  mb: "24px",
                  color: "#fff",
                  letterSpacing: "1px",
                  lineHeight: "20px",
                  mt: 4,
                }}
              >
                This is the Web Design page with some dummy content. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Dolores sint autem
                atque et magni vel veritatis libero at iste aut iusto iure
                possimus rem, mollitia ab doloribus consequatur. Veritatis,
                eaque?
              </Text>
              <Text
                sx={{
                  fontSize: { base: "12px", md: "15px" },
                  fontWeight: 400,
                  mb: "24px",
                  color: "#fff",
                  letterSpacing: "1px",
                  lineHeight: "20px",
                  mt: 4,
                }}
              >
                This is the Web Design page with some dummy content. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Dolores sint autem
                atque et magni vel veritatis libero at iste aut iusto iure
                possimus rem, mollitia ab doloribus consequatur. Veritatis,
                eaque?
              </Text>
            </Box>
            <Box
              sx={{
                textAlign: "left",
              }}
            >
              <Image
                src={"/images/webdev.png"}
                sx={{
                  w: "auto",
                  h: "300px",
                }}
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default WebDev;
