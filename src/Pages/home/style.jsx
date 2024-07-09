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
    mb: "10px",
  },
  text: {
    textAlign: "center",
    mt: "20px",
    fontSize: { base: "12px", md: "14px" },
    maxW: { base: "80%", md: "60%" },
    fontWeight: 400,
    color: "#fff",
    letterSpacing: "1px",
    lineHeight: "20px",
    display: "flex",
    m: "auto",
    justifyContent: "center",
  },
  serviceBox: {
    bgColor: "#090909",
    height: "auto",
    // pb: "2rem",
    py: { base: "2rem", lg: "6rem" },
    px: { base: "0", lg: "4rem" },
  },
  serviceContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: { base: "column", md: "row" },
    justifyContent: "center",
    alignItems: "center",
  },
  reviewContainer: {
    // py: "6rem",
    // px: "2rem",
    bgColor: "black",
    height: "auto",
    py: { base: "2rem", lg: "6rem" },
    px: { base: "1rem", lg: "4rem" },
  },
  reviewHeading: {
    mx: "10px",
    fontSize: { base: "23px", md: "40px" },
    textAlign: "center",
  },
  background: {
    position: "relative",
    bgImage: "url(/images/hero.png)",
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
    // padding: "0 40px",
    px: { base: "0", lg: "4rem" },
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundColor: "#00000080",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  contactBackground: {
    position: "relative",
    bgImage: "url(/images/contact-bg-image.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  contactOverlay: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "80vh",
    width: "100%",
    padding: "20px",
    backgroundColor: "#00000080",
    py: { base: "2rem", lg: "6rem" },
    px: { base: "0", lg: "4rem" },
  },
  contactHeading: {
    color: "white",
    pt: "2rem",
    textAlign: "center",
    fontSize: { base: "1.8rem", md: "2.2rem" },
    fontWeight: 600,
    mb: "10px",
  },
  contactText: {
    textAlign: "center",
    w: { base: "80%", sm: "450px", md: "500px", lg: "600px" },
    color: "white",
    mt: "10px",
    fontSize: { base: "10px", md: "12px" },
    maxW: { base: "80%", md: "40%" },
    fontWeight: 400,
    letterSpacing: "1px",
    lineHeight: "20px",
    display: "flex",
    m: "auto",
    justifyContent: "center",
  },
};

export default style;
