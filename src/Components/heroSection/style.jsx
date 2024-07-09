const style = {
  background: {
    bgImage: "url(/images/contact-image.jpg)",
    h: "550px",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // h: "100vh",
  },
  overlay: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    h: "100%",
    position: "relative",
    w: "100%",
    bgColor: "rgba(0,0,0,0.8)",
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
