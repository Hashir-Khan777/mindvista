const style = {
  sliderContainer: {
    position: "relative",
    width: "100%",
    height: "600px",
    margin: "auto",
    overflow: "hidden",
  },
  slider: {
    display: "flex",
  },
  slide: {
    minWidth: "100%",
    height: "600px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "2s ease-in-out",
  },
  prev: {
    w: "50px",
    h: "50px",
    position: "absolute",
    top: "50%",
    color: "white",
    border: "2px solid white",
    ms: "20px",
  },
  next: {
    w: "50px",
    h: "50px",
    color: "white",
    border: "2px solid white",
    position: "absolute",
    top: "50%",
    right: "0",
    me: "20px",
    fontSize: "20px",
  },
};

export default style;
