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
  },
  boxContent: {
    width="100%",
    position: "absolute",
    left: "0",
    bottom: "0",
    padding: "10px",
    color: "#000000",
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
  const { classes } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      <div className={classes.boxContent}>
        <span>{props.name}</span>
        <DeleteIcon className={classes.deleteIcon} />
      </div>
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
