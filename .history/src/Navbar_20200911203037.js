import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { colorFormat: "hex", open: true };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ colorFormat: e.target.value });
    this.props.handleChange(e.target.value);
  }

  render() {
    const { level, changeLevel } = this.props;
    const { colorFormat, open } = this.state;

    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">reactcolorpicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={colorFormat} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            open={open}
            autoHideDuration={3000}
            message={<span>Format Changed To {colorFormat.toUpperCase()}</span>}
          />
        </div>
      </header>
    );
  }
}

export default Navbar;
