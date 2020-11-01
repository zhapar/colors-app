import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: "form",
      newPaletteName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeStage = this.changeStage.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  showEmojiPicker() {
    this.setState({ stage: "emoji" });
  }

  render() {
    const { stage, newPaletteName } = this.state;
    const { handleSubmit, hideForm } = this.props;

    return (
      <div>
        <Dialog open={stage === "emoji" && true}>
          <Picker />
        </Dialog>
        <Dialog
          open={stage === "form" && true}
          onClose={hideForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Choose a Palette Name
          </DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your beautiful palette. Make sure it's
                unique!
              </DialogContentText>
              <TextValidator
                label="Palette Name"
                name="newPaletteName"
                value={newPaletteName}
                fullWidth
                onChange={this.handleChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["Enter Palette Name", "Palette Name is used!"]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm} color="primary">
                Cancel
              </Button>
              <Button variant="contained" type="submit" color="primary">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;
