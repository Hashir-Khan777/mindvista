const style = {
  background: {
    bgImage: "url(./images/contact-image.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    h: "650px",
  },
  overlay: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    h: "100%",
    w: "100%",
    bgColor: "rgba(0,0,0,0.4)",
  },
  contactHeading: {
    color: "white",
    fontSize: "40px",
  },
  contactText: {
    mt: "20px",
    w: {base:"80%" , sm:"450px" , md:"500px" , lg:"600px"},
    fontSize: "20px",
    color: "white",
  },
  text: {
    fontSize: "19px",
  },
  infoText: {
    fontSize: "23px",
    fontWeight: 700,
    textDecor: "underline",
    color: "bisque.100",
  },
  infoIcon: {
    color: "bisque.100",
    fontSize: "30px",
  },
  infoHeding: {
    fontSize: "25px",
  },
  socialLinks: {
    cursor: "pointer",
    _hover: {
      color: "#fff",
      bgColor: "bisque.100",
    },
    border: "3px solid #e7e5ea",
    h: "45px",
    w: "45px",
  },
  textArea: {
    h: { lg:"200px" , xl:"250px"},
    pt: "20px",
    px: "10px",
    borderRadius: "none",
    borderX: "none",
    borderTop: "none",
    borderBottom: "2px solid black",
  },
  formButtom: {
    mt: "20px",
    color: "black.900",
    border: "2px solid black",
  },
};

export default style;
