import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import styles from "./styles/ColorPickerFormStyles";

function ColorPickerForm({ addNewColor, isPaletteFull, classes, colors }) {
  const [state, setState] = useState({
    newColorName: "",
    currentColor: "teal",
  });

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      colors.every(({ color }) => color !== state.currentColor)
    );
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const updateCurrentColor = (newColor) => {
    setState({ ...state, currentColor: newColor.hex });
  };

  const handleSubmit = () => {
    const newColor = {
      name: state.newColorName,
      color: state.currentColor,
    };
    addNewColor(newColor);
    setState({ ...state, newColorName: "" });
  };

  const { currentColor, newColorName } = state;
  return (
    <div className={classes.root}>
      <ChromePicker
        color={currentColor}
        className={classes.picker}
        onChange={updateCurrentColor}
      />
      <ValidatorForm onSubmit={handleSubmit} instantValidate={false}>
        <TextValidator
          value={newColorName}
          name='newColorName'
          label='Color Name'
          variant='filled'
          margin='normal'
          className={classes.colorNameInput}
          onChange={handleChange}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "Enter a color name",
            "Color name must be unique",
            "Color already used!",
          ]}
        />
        <Button
          variant='contained'
          type='submit'
          color='primary'
          disabled={isPaletteFull}
          className={classes.addColor}
          style={{ backgroundColor: isPaletteFull ? "grey" : currentColor }}
        >
          {isPaletteFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </div>
  );
}

export default withStyles(styles)(ColorPickerForm);
