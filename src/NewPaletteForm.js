import React, { useState } from "react";
import { connect } from "react-redux";
import { savePalette } from "./store/palettes";
import { useHistory } from "react-router-dom";

import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DraggableColorList from "./DraggableColorList";
import arrayMove from "array-move";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import seedColors from "./seedColors";
import styles from "./styles/NewPaletteFormStyles";

function NewPaletteForm({ maxNumColor = 20, classes, palettes, savePalette }) {
  const [open, setOpen] = useState(true);
  const [colors, setColors] = useState(seedColors[0].colors);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  const clearPalette = () => {
    setColors([]);
  };

  const addRandomColor = () => {
    const allColors = seedColors.map((p) => p.colors).flat();
    let rand;
    let randomColor;
    let isDuplicateColor = true;
    while (isDuplicateColor) {
      rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand];
      isDuplicateColor = colors.some(
        // eslint-disable-next-line
        (color) => color.name === randomColor.name
      );
    }
    setColors([...colors, randomColor]);
  };

  const history = useHistory();

  const handleSubmit = (newPalette) => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
    newPalette.colors = colors;
    savePalette(newPalette);
    history.push("/");
  };

  const removeColor = (colorName) => {
    setColors(colors.filter((color) => color.name !== colorName));
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  const isPaletteFull = colors.length >= maxNumColor;

  return (
    <div className={classes.root}>
      <PaletteFormNav
        open={open}
        palettes={palettes}
        handleSubmit={handleSubmit}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Typography variant='h4' gutterBottom>
            Design Your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
              onClick={clearPalette}
            >
              Clear Palette
            </Button>
            <Button
              variant='contained'
              color='primary'
              className={classes.button}
              disabled={isPaletteFull}
              onClick={addRandomColor}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            isPaletteFull={isPaletteFull}
            addNewColor={addNewColor}
            colors={colors}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          colors={colors}
          removeColor={removeColor}
          axis='xy'
          onSortEnd={onSortEnd}
          distance={20}
        />
      </main>
    </div>
  );
}

const mapStateToProps = ({ palettes }) => ({
  palettes,
});

const mapDispatchToProps = (dispatch) => ({
  savePalette: (newPalette) => dispatch(savePalette(newPalette)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(NewPaletteForm));
