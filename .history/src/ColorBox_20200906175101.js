import React, { Component } from "react";
import "./ColorBox.css";

class ColorBox extends Component {
  render() {
    const { background, name } = this.props;
    return (
      <div style={{ background }} className="ColorBox">
        <span>{name}</span>
        <span>MORE</span>
      </div>
    );
  }
}

export default ColorBox;
