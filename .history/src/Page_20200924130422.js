import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/PageStyles.js";

function Page({ children }) {
  return <section className="page">{children}</section>;
}

export default withStyles(styles)(Page);
