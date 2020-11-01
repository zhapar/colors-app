import React from "react";
import "./styles/Page.css";

function Page({ children }) {
  return (
    <section className="page" style={{ height: window.innerHeight }}>
      {children}
    </section>
  );
}

export default Page;
