import sizes from "./sizes";
import bg from "./bg.svg";

export default {
  "@global": {
    ".fade-exit": {
      opacity: "1",
    },
    ".fade-exit-active": {
      opacity: "0",
      transition: "opacity 500ms ease-out",
    },
  },
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    // background by SVGBackgrounds.com
    background: `#394bad url(${bg}) right top`,
    overflowY: "scroll",
  },
  title: {
    fontSize: "2rem",
    [sizes.down("xs")]: {
      fontSize: "1.6rem",
    },
  },
  container: {
    width: "55%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "70%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
    [sizes.down("xs")]: {
      fontSize: "0.8rem",
    },
    "& a": {
      color: "#fff",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2rem",
    padding: "1rem 0 2rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1rem",
    },
  },
};
