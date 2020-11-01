import React, { Component } from "react";
import "./styles/Page.css";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
    };
    this.setHeight = this.setHeight.bind(this);
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
    const { height } = this.state;

    return (
      <section className="page" style={{ height: height }}>
        {children}
      </section>
    );
  }
}

export default Page;
