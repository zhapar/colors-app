import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    this.state = { colorFormat: "hex", open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormatChange(e) {
    this.setState({ colorFormat: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }

  closeSnackbar() {
    this.setState({ open: false });
  }

  render() {
    const { level, changeLevel } = this.props;
    const { colorFormat, open } = this.state;

    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">reactcolorpicker</Link>
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
          <Select value={colorFormat} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            open={open}
            autoHideDuration={3000}
            message={
              <span id="message-id">
                Format Changed To {colorFormat.toUpperCase()}
              </span>
            }
            ContentProps={{
              "aria-describedly": "message-id",
            }}
            onClose={this.closeSnackbar}
            action={[
              <IconButton
                onClick={this.closeSnackbar}
                color="inherit"
                key="close"
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>,
            ]}
          />
        </div>
      </header>
    );
  }
}

export default Navbar;
