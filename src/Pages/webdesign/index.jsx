// Pages/WebDesign.js
import React from "react";
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";

const WebDesign = () => {
  return (
    <Box>
      <Box textAlign="center">
        <Box>
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            px={{ base: "10px", lg: "8rem" }}
            gap="5rem"
            py="6rem"
            pt="10rem"
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
                BOOST YOUR BUSINESS <br /> WITH OUR OUTSTANDING{" "}
                <span style={{ color: "#F8BE28" }}>WEB DESIGNING </span>
                SOLUTIONS
              </Heading>
              <Text
                sx={{
                  color: "#fff",
                  mt: "16px",
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
                src={"/public/images/webdev.png"}
                sx={{
                  w: "auto",
                  h: "300px",
                }}
              />
            </Box>
          </Flex>
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            px={{ base: "10px", lg: "8rem" }}
            gap="5rem"
            py="6rem"
            pt="8rem"
            bg={"#000"}
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
                <span style={{ color: "#F8BE28" }}> ANDROID APP </span>
                DEVELOPMENT COMPANY YOU CAN COUNT ON BOOST YOUR
              </Heading>
              <Text
                sx={{
                  color: "#fff",
                  mt: "16px",
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
                  color: "#fff",
                  mt: "10px",
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
                src={"/public/images/webdev.png"}
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

export default WebDesign;
