import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import "./ColorBox.css";

const styles = {
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
    color:
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
    const { background, name, moreUrl, showLink, classes } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.3;
    const isLightColor = chroma(background).luminance() >= 0.6;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className="ColorBox">
          <div
            style={{ background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>Copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={`copy-button ${isLightColor && "dark-text"}`}>
              Copy
            </button>
          </div>
          {showLink && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className={`see-more ${isLightColor && "dark-text"}`}>
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
