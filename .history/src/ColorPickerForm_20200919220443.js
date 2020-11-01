import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const styles = {
  root: {
    width: "100%",
  },
  picker: {
    width: "100% !important",
    marginTop: "2rem",
  },
  addColor: {
    width: "100%",
    padding: "1rem",
    marginTop: "1rem",
    fontSize: "2rem",
  },
};

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newColorName: "",
      currentColor: "teal",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
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
    const { isPaletteFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker
          color={currentColor}
          className={classes.picker}
          onChange={this.updateCurrentColor}
        />
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
            className={classes.addColor}
            style={{ backgroundColor: isPaletteFull ? "grey" : currentColor }}
          >
            {isPaletteFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
