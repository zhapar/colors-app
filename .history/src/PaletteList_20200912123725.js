import React, { Component } from "react";

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>React Color</h1>
        {palettes.map((palette) => (
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        ))}
      </div>
    );
  }
}

export default PaletteList;
