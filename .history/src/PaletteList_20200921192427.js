import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
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
import { TransitionGroup, CSSTransition } from "react-transition-group";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleteDialogOpen: false,
      deletingItemId: "",
    };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.openDialog.bind(this);
  }

  openDialog() {
    this.setState({ isDeleteDialogOpen: true });
  }

  closeDialog() {
    this.setState({ isDeleteDialogOpen: false, deletingItemId: "" });
  }

  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes, classes, deletePalette } = this.props;
    const { isDeleteDialogOpen } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.title}>React Color</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map((palette) => (
              <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                <MiniPalette
                  {...palette}
                  key={palette.id}
                  handleClick={() => this.goToPalette(palette.id)}
                  deletePalette={deletePalette}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={isDeleteDialogOpen}
          aria-labelledby="delete-dialog-title"
          onClose={this.closeDialog}
        >
          <DialogTitle id="delete-dialog-title">
            Delete This Palette?
          </DialogTitle>

          <List>
            <ListItem button>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
            <ListItem button>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
