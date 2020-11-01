import React, { Component } from 'react'

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      )
    }
  }
  
  render() {
    const colorBoxes = 
    return (
      <div className="Palette">
        <h1>Single Color Palette</h1>
    <div className="Palette-colors">{colorBoxes}</div>
      </div>
    )
  }
}

export default SingleColorPalette;