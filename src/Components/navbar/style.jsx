import { border } from "@chakra-ui/react";

const style = {
  navBar: {
    py: "12px",
    height: { base: "60px", lg: "70px" },
    justifyContent: "space-between",
    w: "100%",
    px: "2rem",
    backgroundColor: "rgba(9, 9, 9, 0.6)",
    boxShadow: "md",
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
  dropdownMenu: {
    display: "none",
    position: "absolute",
    top: "3.5rem",
    left: "-29rem",
    right: "0",
    // mt: "8px",
    w: "100vw",
    h: "40vh",
    bg: "rgba(0, 0, 0, 0.95)",
    flexWrap: "wrap",
    borderTop:"1px solid #F8BE28",
    borderBottom:"1px solid #F8BE28",
    // justifyContent: "center",
    // alignItems: "center",
    zIndex: 1000,
    transition: "all 0.3s ease-in-out",
    // gridTemplateColumns: "repeat(3, 1fr)",
  },
  dropdownItem: {
    display: "flex",
    gap: "10px",
    padding: "12px 16px",
    color: "#fff",
    whiteSpace: "nowrap",
    _hover:{
      bg: "#F8BE28",
    }
  },
  linksWithDropdown: {
    "&:hover .dropdownMenu": {
      display: "grid",
      placeItems: "center",
      animation: "fadeIn 0.5s",
    },
  },
};

export default style;
