import React, { Component } from "react";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newColorName: "",
      currentColor: "teal",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  handleSubmit() {
    const newColor = {
      name: this.state.newColorName,
      color: this.state.currentColor,
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  }

  render() {
    const { isPaletteFull } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker color={currentColor} onChange={this.updateColor} />
        <ValidatorForm onSubmit={this.handleSubmit}>
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
