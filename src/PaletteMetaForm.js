import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

function PaletteMetaForm({ palettes, hideForm, handleSubmit }) {
  const [state, setState] = useState({
    stage: "form",
    newPaletteName: "",
  });

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const showEmojiPicker = () => {
    setState({ ...state, stage: "emoji" });
  };

  const { stage, newPaletteName } = state;

  const savePalette = (emoji) => {
    const newPalette = {
      paletteName: newPaletteName,
      emoji: emoji.native,
    };
    handleSubmit(newPalette);
    setState({ ...state, stage: "" });
  };

  return (
    <div>
      <Dialog open={stage === "emoji"} onClose={hideForm}>
        <DialogTitle id='form-dialog-title'>Choose a Palette Emoji</DialogTitle>
        <Picker title='Pick a Palette Emoji' onSelect={savePalette} />
      </Dialog>
      <Dialog
        open={stage === "form"}
        onClose={hideForm}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your beautiful palette. Make sure it's
              unique!
            </DialogContentText>
            <TextValidator
              label='Palette Name'
              name='newPaletteName'
              value={newPaletteName}
              fullWidth
              onChange={handleChange}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={["Enter Palette Name", "Palette Name is used!"]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={hideForm} color='primary'>
              Cancel
            </Button>
            <Button variant='contained' type='submit' color='primary'>
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}

const mapStateToProps = ({ palettes }) => ({
  palettes,
});

export default connect(mapStateToProps)(PaletteMetaForm);
