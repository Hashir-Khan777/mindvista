import { position } from "@chakra-ui/react";
import { BiBorderBottom } from "react-icons/bi";

const style = {
  navBar: {
    py: "12px",
    height: { base: "60px", lg: "70px" },
    justifyContent: "space-between",
    w: "100%",
    px: "2rem",
    backgroundColor: "rgba(9, 9, 9, 0.6)",
    boxShadow: "md",
    // pr: "5rem",
    position: "fixed",
    top: 0,
    zIndex: 1,
  },
  navMenu: {
    fontSize: "18px",
    fontWeight: 500,
    display: { base: "none", lg: "flex" },
    alignItems: "center",
    gap: "2rem",
  },
  links: {
    fontSize: "16px",
    p: "5px 8px",
    borderRadius: "5px",
    color: "#ffffff",
    position: "relative",
    _hover: {
      color: "#F8BE28",
      _after: {
        transform: "scaleX(1)",
      },
    },
    _after: {
      content: '""',
      position: "absolute",
      bottom: "-2px",
      left: "30%",
      width: "40%",
      height: "2px",
      backgroundColor: "#F8BE28",
      transform: "scaleX(0)",
      transformOrigin: "center",
      transition: "transform 0.3s ease-in-out",
    },
  },

  hamBurger: {
    h: { base: "35px", md: "45px" },
    w: { base: "35px", md: "45px" },
    backgroundColor: "#f8be28",
    display: { base: "flex", lg: "none" },
    flexDirection: "column",
  },
  bar: {
    w: { base: "17px", md: "20px" },
    my: "2px",
    display: "block",
    border: "1px solid black",
  },
  iconButton: {
    h: { base: "20px", md: "32px" },
    w: { base: "20px", md: "32px" },
    color: "#fff",
    border: "1px solid #fff",
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    _hover: {
      color: "#F8BE28",
      borderColor: "#F8BE28",
    },
  },
};

export default style;
