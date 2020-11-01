export default {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover svg": {
      opacity: "1",
    },
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
    display: "flex",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItem: "center",
    fontSize: "1rem",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
  },
  deleteIcon: {
    color: "white",
    backgroundColor: "#eb3d30",
    position: "absolute",
    top: "0",
    right: "0",
    padding: "10px",
    width: "20px",
    height: "20px",
    zIndex: "10",
    opacity: "0",
  },
};
