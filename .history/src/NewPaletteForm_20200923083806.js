import React, { Component } from "react";
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

class NewPaletteForm extends Component {
  static defaultProps = {
    maxNumColor: 20,
  };
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      colors: seedColors[0].colors,
    };
    this.addNewColor = this.addNewColor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  addNewColor(newColor) {
    this.setState({
      colors: [...this.state.colors, newColor],
    });
  }

  clearPalette() {
    this.setState({ colors: [] });
  }

  addRandomColor() {
    const allColors = seedColors.map((p) => p.colors).flat();
    let rand;
    let randomColor;
    let isDuplicateColor = true;
    while (isDuplicateColor) {
      rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand];
      isDuplicateColor = this.state.colors.some(
        (color) => color.name === randomColor.name
      );
    }
    this.setState({ colors: [...this.state.colors, randomColor] });
  }

  handleSubmit(newPalette) {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
    newPalette.colors = this.state.colors;
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  }

  removeColor(colorName) {
    this.setState({
      colors: this.state.colors.filter((color) => color.name !== colorName),
    });
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  render() {
    const { classes, maxNumColor, palettes } = this.props;
    const { open, colors } = this.state;

    const isPaletteFull = colors.length >= maxNumColor;

    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          palettes={palettes}
          handleSubmit={this.handleSubmit}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography variant="h4" gutterBottom>
              Design Your Palette
            </Typography>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={this.clearPalette}
              >
                Clear Palette
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                disabled={isPaletteFull}
                onClick={this.addRandomColor}
              >
                Random Color
              </Button>
            </div>
            <ColorPickerForm
              isPaletteFull={isPaletteFull}
              addNewColor={this.addNewColor}
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
            removeColor={this.removeColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
            distance={20}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
