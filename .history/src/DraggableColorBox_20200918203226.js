import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {},
};

function DraggableColorBox(props) {
  return (
    <div
      className={props.classes.root}
      styles={{ backgroundColor: props.color }}
    >
      {props.color}
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
