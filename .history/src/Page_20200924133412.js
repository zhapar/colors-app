import React, { Component } from "react";
import "./styles/Page.css";

let height = window.innerHeight;
window.addEventListener("resize", () => {
  // We execute the same script as before
  height = window.innerHeight;
});

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      // We execute the same script as before
      this.setHeight();
    });
  }

  setHeight() {
    this.setState({ height: window.innerHeight });
  }

  render() {
    const { children } = this.prop;
    return (
      <section className="page" style={{ height: height }}>
        {children}
      </section>
    );
  }
}

export default Page;
