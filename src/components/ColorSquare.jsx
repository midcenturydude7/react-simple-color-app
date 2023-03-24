import React from "react";

function ColorSquare({ colorValue, hexValue, isDarkText, setIsDarkText }) {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF",
      }}>
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
}

ColorSquare.defaultProps = {
  colorValue: "Empty Color Value",
};

export default ColorSquare;
