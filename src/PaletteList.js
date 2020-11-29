import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { deletePalette } from "./store/palettes";

import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import DialogTitle from "@material-ui/core/DialogTitle";
import styles from "./styles/PaletteListStyles";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

function PaletteList({ palettes, classes, deletePalette }) {
  const [state, setState] = useState({
    isDeleteDialogOpen: false,
    deletingItemId: "",
  });

  const openDialog = (id) => {
    setState({ isDeleteDialogOpen: true, deletingItemId: id });
  };

  const closeDialog = () => {
    setState({ isDeleteDialogOpen: false, deletingItemId: "" });
  };

  const handleDelete = () => {
    deletePalette(state.deletingItemId);
    closeDialog();
  };

  const history = useHistory();

  const goToPalette = (id) => {
    history.push(`/palette/${id}`);
  };
  const { isDeleteDialogOpen } = state;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.title}>Color Palettes</h1>
          <Link to='/palette/new'>create palette</Link>
        </nav>
        <TransitionGroup className={classes.palettes}>
          {palettes.map((palette) => (
            <CSSTransition key={palette.id} classNames='fade' timeout={500}>
              <MiniPalette
                {...palette}
                key={palette.id}
                goToPalette={goToPalette}
                openDialog={openDialog}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>

      <Dialog
        open={isDeleteDialogOpen}
        aria-labelledby='delete-dialog-title'
        onClose={closeDialog}
      >
        <DialogTitle id='delete-dialog-title'>Delete This Palette?</DialogTitle>

        <List>
          <ListItem button onClick={handleDelete}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Delete' />
          </ListItem>
          <ListItem button onClick={closeDialog}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Cancel' />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}

const mapStateToProps = ({ palettes }) => ({
  palettes,
});

const mapDispatchToProps = (dispatch) => ({
  deletePalette: (id) => dispatch(deletePalette(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(PaletteList));
