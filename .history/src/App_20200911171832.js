import React from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import "./App.css";

function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[0])} />
    </div>
  );
}

export default App;
