import { position } from "@chakra-ui/react";

const style = {
  subHeading: {
    fontSize: "18px",
    textDecoration: "underline",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontWeight: 700,
    color: "#F8BE28",
    mb: "10px",
  },
  text: {
    m: "auto",
    fontSize: { base: "14px", lg: "18px" },
    color: "#fff",
    w: { base: "100%", md: "600px", lg: "700px" },
    mt: "1rem",
    lineHeight: "1.5rem",
  },
  heading: {
    m: "auto",
    fontSize: { base: "1.5rem", md: "3rem" },
    color: "#fff",
    w: { base: "100%", md: "600px", lg: "700px" },
  },
  background: {
    py: "5rem",
    h: "450px",
    bgImage: "url(/images/service-image.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  bacgroundText: {
    textAlign: { base: "center", lg: "start" },
    mb: "10px",
    fontSize: "20px",
    letterSpacing: "3px",
    textDecoration: "underline",
    fontWeight: 700,
  },
  backgroundHeading: {
    textAlign: { base: "center", lg: "start" },
    fontSize: { base: "28px", lg: "40px", xl: "50px" },
    fontWeight: 700,
  },
  overlay: {
    w: "100%",
    h: "100%",
    bgColor:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.31) 0%, rgba(0, 0, 0, 0.78) 100%)",
  },
  flex: {
    flexDirection: { base: "column", md: "row" },
    gap: { base: "18px", lg: "40px" },
    py: { base: "2rem", md: "6rem", lg: "5rem" },
    m: "auto",
  },
  button: {
    w: "180px",
    bgColor: "#F8BE28",
    color: "#fff",
  },
  whiteContainer: {
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "md",
    flexDirection: { base: "column", md: "row" },
    m: "auto",
    h: { base: "fit-content", xl: "250px" },
    flexWrap: { base: "wrap", lg: "no-wrap" },
    w: { base: "90%", sm: "320px", xl: "1080px" },
    bgColor: "#000",
    py: "30px",
    position: "relative",
    top: "-4.5rem",
  },

  FAQsection: {
    maxW: "1440px",
    m: "auto",
    px: { base: "10px", lg: "100px" },
    pt: { base: "2rem", lg: "4rem" },
    pb: "3rem",
  },
  services: {
    p: "2rem 2rem",
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    borderRadius: "8px",
    boxShadow: "lg",
  },
  serviceImgContainer: {
    height: { base: "60px", lg: "60px" },
    width: { base: "80px", lg: "80px" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 1rem",
  },
  serviceImg: {
    maxHeight: "100%",
    maxWidth: "100%",
    objectFit: "contain",
  },
  serviceHeading: {
    color: "#F8BE28",
    fontSize: "16px",
    fontWeight: 600,
  },
  serviceText: {
    mt: "1rem",
    mb: "2rem",
    fontSize: { base: "12px", md: "14px" },
    lineHeight: "1.5rem",
    color: "white",
    fontWeight: 400,
  },
  serviceContainer: {
    p: { base: "1rem", lg: "2rem" },
    // bgColor: "#151515",
  },
};

export default style;
