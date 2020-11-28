import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { generatePalette } from "./colorHelpers";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteStyles";

function Palette({ palettes, classes }) {
  const [state, setState] = useState({ level: 500, format: "hex" });

  const { id } = useParams();

  const changeLevel = (level) => {
    setState({ ...state, level });
  };

  const changeFormat = (val) => {
    setState({ ...state, format: val });
  };

  const palette = generatePalette(
    palettes.find((palette) => palette.id === id)
  );

  const { colors, paletteName, emoji } = palette;
  const { level, format } = state;

  const colorBoxes = colors[level].map((color) => (
    <ColorBox
      background={color[format]}
      name={color.name}
      key={color.id}
      moreUrl={`/palette/${id}/${color.id}`}
      showingFullPalette
    />
  ));
  return (
    <div className={classes.Palette}>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
        showingAllColors
      />
      <div className={classes.colors}> {colorBoxes} </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

const mapStateToProps = ({ palettes }) => ({
  palettes,
});

export default connect(mapStateToProps)(withStyles(styles)(Palette));
