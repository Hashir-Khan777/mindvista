const style = {
  background: {
    position: "relative",
    bgImage: "url(./images/portfolio.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    padding: "0 40px",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
  },
  heading: {
    pt: "1rem",
    textAlign: "center",
    fontSize: { base: "1.8rem", md: "2.2rem" },
    fontWeight: 600,
    color: "#fff",
    marginBottom: "20px",
  },
  text: {
    textAlign: "center",
    fontSize: { base: "10px", md: "12px" },
    fontWeight: 400,
    color: "#fff",
    letterSpacing: "1px",
    lineHeight: "20px",
    marginBottom: "10px",
  },
  slider: {
    cursor: "pointer",
    borderRadius: "3xl",
    backgroundSize: "cover",
    backgroundPosition: "center",
    h: "339px",
    w: "100%",
  },
  portfolioSlider: {
    maxW: "1440px",
    w: "90%",
    margin: "auto",
    my: "2rem",
  },
};

export default style;
