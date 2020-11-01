import sizes from "./sizes";

export default {
  Palette: {
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  colors: {
    height: "90%",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
    justifyContent: "flex-start",
  },
  goBack: {
    width: "20%",
    height: "50%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    opacity: "1",
    backgroundColor: "#000000",
    "&:hover": {
      cursor: "initial",
    },
    "& a": {
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginTop: "-15px",
      marginLeft: "-50px",
      outline: "none",
      border: "none",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      textTransform: "uppercase",
      textAlign: "center",
      fontSize: "1rem",
      lineHeight: "30px",
      color: "#ffffff",
      textDecoration: "none",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "33.3333%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "20%",
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10%",
    },
  },
};
