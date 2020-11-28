import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/MiniPaletteStyles";

function MiniPalette({
  classes,
  paletteName,
  emoji,
  colors,
  openDialog,
  goToPalette,
  id,
}) {
  const handleDelete = (e) => {
    e.stopPropagation();
    openDialog(id);
  };

  const handleClick = () => {
    goToPalette(id);
  };

  const miniColorBoxes = colors.map((color) => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    ></div>
  ));
  return (
    <div className={classes.root} onClick={handleClick}>
      <DeleteIcon
        className={classes.deleteIcon}
        style={{ transition: "all 0.3s ease-in-out" }}
        onClick={handleDelete}
      />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>{" "}
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
