import sizes from "./sizes";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    marginBottom: "-4px",
    "&:hover svg": {
      color: "#fff",
      transform: "scale(1.5)",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%",
    },
  },
  boxContent: {
    width: "100%",
    position: "absolute",
    left: "0",
    bottom: "0",
    padding: "10px",
    color: "rgba(0, 0, 0, 0.5)",
    letterSpacing: "1px",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",
  },
};

export default styles;
