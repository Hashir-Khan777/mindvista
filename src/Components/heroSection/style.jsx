const style = {
  background: {
    bgImage: "url(./images/contact-image.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    h: "550px",
  },
  overlay: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    h: "100%",
    position: "relative",
    w: "100%",
    bgColor: "rgba(0,0,0,0.4)",
  },
  contactHeading: {
    position: "absolute",
    color: "white",
    top: "200px",
    transition: "all 0.8s ease-in-out",
    fontSize: "40px",
  },
  contactText: {
    position: "absolute",
    transition: "all 0.8s ease-in-out 0.8s",
    textAlign: "center",
    mt: "20px",
    w: { base: "80%", sm: "450px", md: "500px", lg: "600px" },
    fontSize: "20px",
    color: "white",
  },
};

export default style;
