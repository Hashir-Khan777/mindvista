const style = {
  card: {
    cursor: "pointer",
    p: "35px 35px",
    rounded: "lg",
    boxShadow: "xl",
    position: "relative",
    w: { base: "250px", md: "200px", xl: "250px" },
    h: "350px",
    transition: "all 0.4s ease-in-out",
    _hover: {
      bgColor: "#F8BE28",
      color: "#fff",
    },
  },
  icon: {
    position: "relative",
    w: "fit-content",
    transition: "all 0.4s ease-in-out",
  },
  circle: {
    position: "absolute",
    left: 0,
    w: "46px",
    h: "46px",
    borderRadius: "50%",
    bgColor: "rgba(244,169,80,0.10)",
    bottom: "-8px",
  },
};

export default style;
