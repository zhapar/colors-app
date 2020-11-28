import React, { useEffect, useState } from "react";
import "./styles/Page.css";

function Page({ children }) {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => {
      // We execute the same script as before
      setHeight(window.innerHeight);
    });
  }, []);

  return (
    <section className='page' style={{ height: height }}>
      {children}
    </section>
  );
}

export default Page;
