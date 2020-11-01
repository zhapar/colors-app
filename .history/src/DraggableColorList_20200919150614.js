import React from "react";
import DraggableColorBox from "./DraggableColorBox";

function DraggableColorList({ colors, removeColor }) {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((color) => (
        <DraggableColorBox
          color={color.color}
          name={color.name}
          key={color.name}
          handleClick={() => removeColor(color.name)}
        />
      ))}
    </div>
  );
}

export default DraggableColorList;
