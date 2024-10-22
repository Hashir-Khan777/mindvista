const style = {
  aboutContainer: {
    display: "flex",
    bgColor: "black",
    flexDirection: { base: "column", md: "row" },
    justifyContent: "center",
    alignItems: "center",
    py: { base: "2rem", lg: "6rem" },
    px: { base: "0", lg: "4rem" },
    height: "auto",
    gap: { base: "0", lg: "8rem" },
  },
  imageContainer: {
    m: { base: "auto", lg: "0" },
    w: { base: "250px", sm: "350px" },
    h: { base: "320px", sm: "500px" },
    position: "relative",
    textAlign: { base: "center", md: "left" },
    flex: { base: "0", md: "0.5" },
  },
  aboutImage1: {
    w: "100%",
    h: "100%",
    position: "absolute",
    backgroundImage: "url(/images/about-bg.png)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  aboutImage2: {
    w: { base: "150px", sm: "200px" },
    position: "absolute",
    top: { base: "190px", sm: "330px" },
    left: { base: "120px", sm: "200px" },
    zIndex: "1",
  },
  borderImage: {
    // zIndex: "999",
    // position: "absolute",
    // right: { base: "20px", sm: "50px", lg: "20px", xl: "50px" },
    // top: { base: "10px", sm: "120px" },
  },
  aboutContent: {
    m: { base: "auto", lg: "0" },
    p: "30px",
    // w: { base: "100%", md: "620px", lg: "520px", xl: "600px" },
    flex: { base: "1", md: "0.5" },
    textAlign: { base: "left", md: "left" },
    maxW: { base: "100%", lg: "80%" },
    pt: { base: "7rem", md: "0" },
  },
  aboutHeading: {
    fontSize: { base: "1.8rem", lg: "45px" },
    color: "#fff",
    fontWeight: 700,
  },
  aboutText: {
    mt: "20px",
    // fontSize: "18px",
    color: "#fff",
    fontSize: { base: "10px", md: "1.2rem" },
  },
  list: {
    my: "30px",
    fontSize: { base: "12px", sm: "19px" },
    color: "#fff",
    fontWeight: 600,
  },
};

export default style;
