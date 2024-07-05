const style = {
  background: {
    position: "relative",
    bgImage: "url(./images/portfolio.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    h: "100vh",
  },
  overlay: {
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    flexDirection: "row",
    padding: "0 40px",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
  },
  heading: {
    pt: { base: "2rem", md: "3rem", lg: "4rem" },
    textAlign: "center",
    m: "auto",
    fontSize: { base: "1.8rem", md: "2.2rem" },
    fontWeight: 600,
    color: "#fff",
  },
  text: {
    textAlign: "center",
    mt: "20px",
    fontSize: { base: "10px", md: "12px" },
    fontWeight: 400,
    color: "#fff",
    letterSpacing: "1px",
    lineHeight: "20px",
  },
  slider: {
    cursor: "pointer",
    borderTopRadius: "3xl",
    backgroundSize: "cover",
    backgroundPosition: "center",
    h: "339px",
    w: "100%",
  },
  portfolioHeading: {
    fontSize: { base: "25px", md: "40px" },
    textAlign: "center",
  },
  protfolioSlider: {
    maxW: "1440px",
    w: "90%",
    m: "auto",
    my: "3rem",
  },
  pagination: {
    border: "2px solid black",
  },
};

export default style;
