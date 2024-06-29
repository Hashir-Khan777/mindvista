const style ={
    aboutContainer: {
        display: "flex",
        flexDirection: { base: "column", lg: "row" },
        justifyContent: "center",
        aligItems: "center",
        gap: "60px",
        mb: {base:"2rem" , lg:"6rem"},
      },
      imageContainer: {
        m: { base: "auto", lg: "0" },
        w: { base: "250px", sm: "350px" },
        h: { base: "320px", sm: "500px" },
        position: "relative",
      },
      aboutImage1: {
        w: "100%",
        h: "100%",
        position: "absolute",
        backgroundImage: "url(./images/about-image-3.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
      aboutImage2: {
        w: { base: "150px", sm: "200px" },
        position: "absolute",
        top: { base: "190px", sm: "330px" },
        left: { base: "120px", sm: "200px" },
        zIndex: "1",
      },
      borderImage: {
        zIndex: "-1",
        position: "absolute",
        right: { base: "20px", sm: "50px" , lg:"20px" , xl:"50px"  },
        top: { base: "50px", sm: "120px" },
      },
      aboutContent: {
        m: { base: "auto", lg: "0" },
        p: { base: "20px", sm: "30px", lg: "0px" },
        w: { base: "100%", sm: "425px", md:"620px" , lg: "520px" , xl:"600px" },
      },
      aboutHeading: {
        fontSize: { base: "26px", lg: "45px" },
        color: "#161C25",
        fontWeight: 700,
      },
      aboutText: {
        mt: "20px",
        fontSize: "18px",
      },
      list: {
        my: "30px",
        fontSize: { base: "12px", sm: "19px" },
        color: "#161C25",
        fontWeight: 600,
      },
}

export default style