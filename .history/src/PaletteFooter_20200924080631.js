import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteFooterStyles";

function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <Link to="/">
      <footer className={classes.PaletteFooter}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </footer>
    </Link>
  );
}

export default withStyles(styles)(PaletteFooter);
