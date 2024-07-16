const style = {
  slideBar: {
    w: { base: "100vw", sm: "305px", md: "400px" },
    h: "100%",
    backgroundColor: "black",
    position: "fixed",
    boxShadow: "md",
    fontSize: "17px",
    fontWeight: 600,
    display: { base: "block", lg: "none" },
    p: "15px 30px",
    lineHeight: "2.5em",
    textTransform: "capitalize",
    zIndex: 999,
  },
  cross: {
    fontSize: "30px",
    h: "45px",
    w: "45px",
    mb: "20px",
    color: "black.900",
    bgColor: "#f8be28",
    flexDirection: "column",
  },
  links: {
    color: "white",
    p: "5px 8px",
    borderBottom: "2px solid #e7e5ea",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    _hover: {
      bg: "#f8be28",
    },
  },
  dropdownMenu: {
    display: "flex",
    flexDirection: "column",
    bg: "rgba(0, 0, 0, 0.8)",
    paddingTop: "10px",
    maxHeight: "200px",
    overflowY: "auto",
  },
  dropdownItem: {
    color: "#fff",
    p: "10px",
    _hover: {
      bg: "#f8be28",
      color: "#000",
    },
  },
  iconButton: {
    h: "45px",
    w: "45px",
    color: "#000",
    bgColor: "#f8be28",
  },
};

export default style;
