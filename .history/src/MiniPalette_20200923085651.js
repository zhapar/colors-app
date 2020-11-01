import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "./styles/Delete.svg";
import styles from "./styles/MiniPaletteStyles";

class MiniPalette extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleDelete(e) {
    e.stopPropagation();
    this.props.handleDelete(this.props.id);
  }

  handleClick() {
    this.props.goToPalette(this.props.id);
  }

  render() {
    const { classes, paletteName, emoji, colors } = this.props;

    const miniColorBoxes = colors.map((color) => (
      <div
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
        key={color.name}
      ></div>
    ));
    return (
      <div className={classes.root} onClick={this.handleClick}>
        <svg
          className={classes.deleteIcon}
          onClick={this.handleDelete}
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 384 384"
          style="enable-background:new 0 0 384 384;"
        >
          <g>
            <g>
              <g>
                <path d="M64,341.333C64,364.907,83.093,384,106.667,384h170.667C300.907,384,320,364.907,320,341.333v-256H64V341.333z" />
                <polygon points="266.667,21.333 245.333,0 138.667,0 117.333,21.333 42.667,21.333 42.667,64 341.333,64 341.333,21.333 			" />
              </g>
            </g>
          </g>
        </svg>
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>{" "}
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
