const style = {
  list: {
    fontSize: { base: "18px", lg: "16px" },
  },
  backgroundImage: {
    h: "720px",
    mx: "20px",
    w: { base: "90%", md: "500px" },
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    bgImage: "url(./images/about-us-image-3.jpg)",
  },
  stack: {
    p: "35px 30px ",
    bgColor: "bisque.100",
    w: "288px",
    h: "300px",
    position: "absolute",
    bottom: "10",
    left: {base:"0px" , lg:  "-60px"},
  },
  text: {
    fontSize: "19px",
    letterSpacing: "2px",
    fontWeight: 700,
  },
  textUnderline: {
    color: "bisque.100",
    fontSize: "19px",
    letterSpacing: "2px",
    fontWeight: 600,
    textDecor: "underline",
  },
  tab: {
    _selected: { color: "bisque.100" },
    fontWeight: 600,
    fontSize: { base: "16px", md: "18px", lg: "19px" },
  },
  tabIndicator: {
    mt: "20px",
    height: "3px",
    bgColor: "bisque.100",
    borderRadius: "1px",
  },
  tabHeading: {
    borderBottom: "2px solid #e7e5ea",
    fontSize: "20px",
    fontWeight: 700,
    mt: "5rem",
    pb: "1.5rem",
    px: "15px",
    w: { lg: "450px" },
  },
  tabpanel: {
    lineHeight: "2em",
    fontSize: "17px",
  },
  circularProgressText: {
    fontWeight: 500,
    fontSize: "18px",
    color: "black.900",
  },
};

export default style;
