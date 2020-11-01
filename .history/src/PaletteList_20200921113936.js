import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyles";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes, classes, deletePalette } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.title}>React Color</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <div className={classes.palettes}>
            <TransitionGroup>
              {palettes.map((palette) => (
                <MiniPalette
                  {...palette}
                  key={palette.id}
                  handleClick={() => this.goToPalette(palette.id)}
                  deletePalette={deletePalette}
                />
              ))}
            </TransitionGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
