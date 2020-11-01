import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import "./ColorBox.css";

const styles = {
  ColorBox: {
    width: "20%",
    height: (props) => (props.showingFullPalette ? "25%" : "50%"),
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: "1",
      transition: "0.5s",
    },
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.6
        ? "rgba(0, 0, 0, 0.8)"
        : "#fff",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.3 ? "#fff" : "#000",
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.6
        ? "rgba(0, 0, 0, 0.8)"
        : "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    right: "0",
    bottom: "0",
    border: "none",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.6
        ? "rgba(0, 0, 0, 0.8)"
        : "#fff",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginTop: "-15px",
    marginLeft: "-50px",
    outline: "none",
    border: "none",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "1rem",
    lineHeight: "30px",
    textDecoration: "none",
    opacity: "0",
    "&:hover": {
      cursor: "pointer",
    },
  },
  boxContent: {
    position: "absolute",
    left: "0",
    bottom: "0",
    padding: "10px",
    color: "#000000",
    letterSpacing: "1px",
    fontSize: "12px",
  },
};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const {
      background,
      name,
      moreUrl,
      showingFullPalette,
      classes,
    } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.ColorBox}>
          <div
            style={{ background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>Copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className="copy-container">
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
