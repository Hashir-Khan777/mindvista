const style = {
  tab: {
    fontWeight: 600,
    fontSize: { base: "12px", sm: "18px", lg: "19px" },
    _hover: { color: "#F8BE28" },
    _selected: { color: "#F8BE28" },
  },
  tabIndicator: {
    mt: "-1.5px",
    height: "2px",
    bg: "#F8BE28",
    borderRadius: "1px",
  },
  tabPanel: {
    flexWrap: "wrap",
    justifyContent: "center",
    m: "auto",
    mt: { base: "2rem", lg: "4rem" },
    mb: "5rem",
    w: { base: "100%", lg: "850px" },
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
    fontSize: { base: "1.5rem", md: "3rem" },
    color: "#fff",
    w: { base: "100%", md: "600px", lg: "700px" },
    mt: "7rem",
  },

  background: {
    position: "relative",
    bgImage: "url(/images/portfolio2-bg.avif)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    h: "70vh",
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
  text: {
    m: "auto",
    fontSize: { base: "14px", lg: "18px" },
    color: "#fff",
    w: { base: "100%", md: "600px", lg: "700px" },
    mt: "1rem",
    lineHeight: "1.5rem",
  },
};
export default style;
