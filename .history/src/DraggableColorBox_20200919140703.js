import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

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

function DraggableColorBox(props) {
  const { classes, handleClick, name, color } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
      </div>
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
