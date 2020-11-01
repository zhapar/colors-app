import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">reactcolorpicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={this.changeLevel}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
