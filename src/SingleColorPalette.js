import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { generatePalette } from "./colorHelpers";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteStyles";

function SingleColorPalette({ classes, palettes }) {
  const [format, setFormat] = useState("hex");
  const { paletteId, colorId } = useParams();

  const palette = generatePalette(
    palettes.find((palette) => palette.id === paletteId)
  );

  const gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }

    return shades.slice(1);
  };

  const shades = gatherShades(palette, colorId);

  const changeFormat = (val) => {
    setFormat(val);
  };

  const { paletteName, emoji, id } = palette;
  const colorBoxes = shades.map((color) => (
    <ColorBox
      background={color[format]}
      name={color.name}
      key={color.name}
      showingFullPalette={false}
    />
  ));
  return (
    <div className={classes.Palette}>
      <Navbar handleChange={changeFormat} showingAllColors={false} />
      <div className={classes.colors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${id}`}>GO BACK</Link>
        </div>
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

const mapStateToProps = ({ palettes }) => ({
  palettes,
});

export default connect(mapStateToProps)(withStyles(styles)(SingleColorPalette));
