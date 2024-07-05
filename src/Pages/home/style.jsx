const style = {
  heading: {
    color: "#fff",
    textAlign: "center",
    m: "auto",
    mt: "5rem",
    p: "0 20px",
    w: { base: "fit-content", md: "470px", lg: "650px" },
    fontSize: { base: "22px", md: "28px", lg: "40px" },
  },
  serviceHeading: {
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
  serviceBox: {
    bgColor: "black",
    height: "auto",
  },
  serviceContainer: {
    py: "4rem",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: { base: "column", md: "row" },
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
  },
  reviewContainer: {
    my: "6rem",
  },
  reviewHeading: {
    mx: "10px",
    fontSize: { base: "23px", md: "40px" },
    textAlign: "center",
  },
  background: {
    position: "relative",
    bgImage: "url(./images/hero.png)",
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
    backgroundColor: "#00000080",
  },
  contactHeading: {
    color: "white",
    fontSize: "40px",
  },
  contactText: {
    textAlign: "center",
    w: { base: "80%", sm: "450px", md: "500px", lg: "600px" },
    fontSize: "20px",
    color: "white",
  },
};

export default style;
