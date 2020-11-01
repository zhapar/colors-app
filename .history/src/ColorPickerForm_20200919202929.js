import React, { Component } from "react";
import { ChromePicker } from "react-color";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";
import PaletteFormNav from "./PaletteFormNav";

class ColorPickerForm extends Component {
  render() {
    const { currentColor, newColorName, isPaletteFull } = this.props;
    return (
      <div>
        <ChromePicker color={currentColor} onChange={this.updateColor} />
        <ValidatorForm onSubmit={this.addNewColor}>
          <TextValidator
            value={newColorName}
            name="newColorName"
            onChange={this.handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter a color name",
              "Color name must be unique",
              "Color already used!",
            ]}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            disabled={isPaletteFull}
            style={{ backgroundColor: isPaletteFull ? "grey" : currentColor }}
          >
            {isPaletteFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default ColorPickerForm;
