import { render } from "@testing-library/react";
import React from "react";
import "./styles/Page.css";

let height = window.innerHeight;
window.addEventListener("resize", () => {
  // We execute the same script as before
  height = window.innerHeight * 0.01;
});

class Page() {
  state = {
    height: height,
  };
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
