import sizes from "./sizes";

export default {
  Navbar: {
    height: "6vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "#000000",
    },
    [sizes.down("xs")]: {
      display: "none",
    },
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-track": {
      background: "transparent",
    },
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
      backgroundColor: "green",
      border: "2px solid green",
      outline: "none",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginTop: "-3px",
    },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
};
