const style = {
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
  serviceImg: {
    h: "auto",
    w: { base: "40px", lg: "60px" },
    objectFit: "cover",
    margin: "0 auto 1rem",
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
    py: { base: "2rem", lg: "6rem" },
    px: { base: "1rem", md: "2rem", lg: "4rem" },
    bgColor: "black",
  },
};

export default style;
