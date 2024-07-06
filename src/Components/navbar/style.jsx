const style = {
  navBar: {
    py: "12px",
    height: "70px",
    justifyContent: "space-between",
    w: "100%",
    px: "20px",
    bgColor: "#040507",
    boxShadow: "md",
  },
  navMenu: {
    fontSize: "18px",
    fontWeight: 500,
    gap: "2rem",
    alignItems: "center",
    display: { base: "none", lg: "flex" },
  },
  links: {
    fontSize: "16px",
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
    bgColor: "#f8be28",
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
    border: "1px solid #fff",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default style;
