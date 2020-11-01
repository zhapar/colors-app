import React from "react";
import "./styles/Page.css";

let height = window.innerHeight;
window.addEventListener("resize", () => {
  // We execute the same script as before
  height = window.innerHeight * 0.01;
});

function Page({ children }) {
  return (
    <section className="page" style={{ height: height }}>
      {children}
    </section>
  );
}

export default Page;
