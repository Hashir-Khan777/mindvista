const style = {
  tab: {
    fontWeight: 600,
    fontSize: {base:"12px" , sm:"18px" ,  lg:"19px"},
    _hover: { color: "bisque.100" },
    _selected: { color: "bisque.100" },
  },
  tabIndicator: {
    mt: "-1.5px",
    height: "2px",
    bg: "bisque.100",
    borderRadius: "1px",
  },
  tabPanel: {
    flexWrap: "wrap",
    justifyContent: "center",
    m: "auto",
    mt: {base:"2rem" , lg:"4rem"},
    mb: "5rem",
    w: {base:"100%" ,lg:"850px"},
    gap: "80px 40px",
  },
  iconBox: {
    transition: "all 0.4s ease-in-out",
    _hover: {
      bgColor: "#fff",
      color: "black.900",
    },
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    w: "250px",
    color: "#fff",
    h: "250px",
  },
  heading: {
    m: "auto",
    fontSize: { base: "23px", lg: "35px" },
    color: "#fff",
    w: { base: "100%", md:"600px" ,  lg: "700px" },
  },
};
export default style;
