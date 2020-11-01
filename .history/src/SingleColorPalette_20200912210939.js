import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = {
      format: "hex",
    };
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }

    return shades.slice(1);
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        background={color.hex}
        name={color.name}
        key={color.id}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
