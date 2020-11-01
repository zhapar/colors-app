import { DRAWER_WIDTH } from "../constants";
import sizes from "./sizes";
const drawerWidth = DRAWER_WIDTH;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [sizes.down("xs")]: {
      marginRight: "10px",
    },
  },
  navBtns: {
    marginRight: "1rem",
    display: "flex",
    "& a": {
      textDecoration: "none",
    },
  },
  navTitles: {
    [sizes.down("xs")]: {
      padding: "0 0 0 10px",
    },
  },
  button: {
    margin: "0 0.5rem",
  },
});

export default styles;
