import React from "react";
import colorNames from "colornames";

function ColorInput({
  setColorValue,
  colorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) {
  return (
    <form className="addColor" onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name</label>
      <input
        type="text"
        autoFocus
        required
        placeholder="Add color name"
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
}

export default ColorInput;
