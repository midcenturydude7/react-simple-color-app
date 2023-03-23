import React from "react";

function ColorInput() {
  return (
    <form action="submit">
      <input
        type="text"
        autoFocus
        id="addColor"
        required
        placeholder="Add color name"
      />
    </form>
  );
}

export default ColorInput;
