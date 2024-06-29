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
  contactSubHeading: {
    fontSize: "18px",
    fontWeight: 700,
    color: "bisque.100",
  },
  contactHeading: {
    fontSize: "45px",
    mt: "5px",
  },
  icon: {
    color: "bisque.100",
    fontSize: {base:"30px" , lg:"40px"},
  },
  infoText: {
    color: "bisque.100",
    fontSize: "19px",
    mb: "10px",
    fontWeight: 700,
  },
  info: {
    fontSize: {base:"20px" , lg:"23px"},
    fontWeight: 600,
  },
  para: {
    fontSize: "17px",
    lineHeight: "1.8em",
    mt: "20px",
  },
  contactContainer: {
    p: "40px 20px",
    color: "#fff",
    textAlign: "center",
    bgColor: "bisque.100",
    w: {base:"100%" , md:"600px" , lg:"550px"},
  },
  input: {
    border: "2px solid #e7e5ea",
    p: "15px 15px",
    rounded: "md",
  },
  textArea: {
    border: "2px solid #e7e5ea",
    p: "20px",
    h: "120px",
  },
  contactButton: {
    border: "2px solid #161C25",
    color: "black.900",
    w:"150px"
  },
  contactSection: {
    px:"20px",
    flexDirection: { base: "column", lg: "row" },
    mb: "5rem",
    mt: "2rem",
    align: "center",
    justify: "center",
  },
};

export default style;
