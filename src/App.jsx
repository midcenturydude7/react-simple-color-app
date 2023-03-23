import React from "react";
import ColorValue from "./components/ColorValue";
import ColorInput from "./components/ColorInput";

function App() {
  return (
    <div className="layout">
      <h1>React | Simple Color App</h1>
      <ColorValue />
      <ColorInput />
    </div>
  );
}

export default App;
