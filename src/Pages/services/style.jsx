const style = {
  subHeading: {
    fontSize: "18px",
    textDecoration: "underline",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontWeight: 700,
    color: "bisque.100",
    mb: "10px",
  },
  heading: {
    m: "auto",
    fontSize: { base: "30px", lg: "50px" },
    fontWeight: 700,
    w: { base: "100%", lg: "750px" },
  },
  background: {
    my: "5rem",
    h: "450px",
    bgImage: "url(./images/service-image.jpg)",
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
    fontSize: { base: "28px" , lg: "40px" , xl:"50px" },
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
    py: { base: "2rem", md:"6rem" , lg: "5rem" },
    m: "auto",
  },
  button: {
    w: "180px",
    bgColor: "bisque.100",
    color: "#fff",
  },
  whiteContainer: {
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "md",
    flexDirection: { base: "column", md: "row" },
    m: "auto",
    h:{base:"fit-content" , xl:"250px"},
    flexWrap:{base:"wrap" , lg:"no-wrap"},
    w: { base: "90%", sm:"320px" , xl: "1080px" },
    bgColor: "#fff",
    py: "30px",
  },

  FAQsection: {
    maxW: "1440px",
    m: "auto",
    px: { base: "10px", lg: "100px" },
    pt: { base: "13rem", lg: "8rem" },
    pb: "3rem",
  },

};

export default style;
