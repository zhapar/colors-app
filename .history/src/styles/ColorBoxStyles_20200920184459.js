import chroma from "chroma-js";
import sizes from "./sizes";

export default {
  ColorBox: {
    width: "20%",
    height: (props) => (props.showingFullPalette ? "25%" : "50%"),
    display: "inline-block",
    margin: "0",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    "&:hover button": {
      opacity: "1",
      transition: "0.5s",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: (props) => (props.showingFullPalette ? "20%" : "33.3333%"),
    },
    [sizes.down("md")]: {
      width: "50%",
      height: (props) => (props.showingFullPalette ? "10%" : "20%"),
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: (props) => (props.showingFullPalette ? "5%" : "10%"),
    },
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.6
        ? "rgba(0, 0, 0, 0.8)"
        : "#fff",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.3 ? "#fff" : "#000",
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.6
        ? "rgba(0, 0, 0, 0.8)"
        : "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    right: "0",
    bottom: "0",
    border: "none",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.6
        ? "rgba(0, 0, 0, 0.8)"
        : "#fff",
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
    textDecoration: "none",
    opacity: "0",
    "&:hover": {
      cursor: "pointer",
    },
  },
  boxContent: {
    position: "absolute",
    left: "0",
    bottom: "0",
    padding: "10px",
    color: "#000000",
    letterSpacing: "1px",
    fontSize: "12px",
  },
  copyOverlay: {
    width: "100%",
    height: "100%",
    zIndex: "0",
    opacity: "0",
    transform: "scale(0.1)",
    transition: "transform 0.6s ease-in-out",
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute",
  },
  copyMsg: {
    position: "fixed",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "4rem",
    flexDirection: "column",
    transform: "scale(0.1)",
    opacity: "0",
    color: "#ffffff",
    zIndex: "-1",
    "& h1": {
      marginBottom: "0",
      textShadow: "1px 2px #000",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      textAlign: "center",
      fontWeight: "400",
      [sizes.down("xs")]: {
        fontSize: "5rem",
      },
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100",
      [sizes.down("xs")]: {
        fontSize: "1.5rem",
      },
    },
  },
  showMsg: {
    opacity: "1",
    zIndex: "20",
    transform: "scale(1)",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s",
  },
};
