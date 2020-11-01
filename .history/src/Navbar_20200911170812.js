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
        </div>
      </header>
    );
  }
}

export default Navbar;
