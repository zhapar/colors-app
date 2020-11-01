import React from "react";
import { withStyles } from "@material-ui/core/styles";

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
};

function DraggableColorBox(props) {
  return (
    <div
      className={props.classes.root}
      style={{ backgroundColor: props.color }}
    >
      {props.color}
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
