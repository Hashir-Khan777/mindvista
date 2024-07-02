const style = {
  navBar: {
    py: "12px",
    height: "70px",
    justifyContent: "space-between",
    position: "fixed",
    w: "100%",
    px: "20px",
    bgColor: "rgba(22,28,34,0.68)",
    boxShadow: "md",
  },
  navMenu: {
    fontSize: "17px",
    fontWeight: 600,
    gap: "2rem",
    alignItems: "center",
    display: { base: "none", lg: "flex" },
  },
  links: {
    p: "5px 8px",
    borderRadius: "5px",
    color: "#ffffff",
    _hover: {
      color: "bisque.100",
    },
  },

  hamBurger: {
    h: "45px",
    w: "45px",
    bgColor: "bisque.100",
    display: { base: "flex", lg: "none" },
    flexDirection: "column",
  },
  bar: {
    w: "20px",
    my: "2px",
    display: "block",
    border: "1px solid black",
  },
  iconButton: {
    h: "45px",
    w: "45px",
    color: "#fff",
    bgColor: "bisque.100",
  },
};

export default style;
