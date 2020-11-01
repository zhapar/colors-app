import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteFooterStyles";

function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.PaletteFooter}>
      <Link to="/">
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </Link>
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter);
