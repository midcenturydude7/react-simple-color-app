import React from "react";
import ColorSquare from "./components/ColorSquare";
import ColorInput from "./components/ColorInput";

function App() {
  const [colorValue, setColorValue] = React.useState("");
  const [hexValue, setHexValue] = React.useState("");
  const [isDarkText, setIsDarkText] = React.useState(true);

  return (
    <div className="layout">
      <h1 className="title">React | Simple Color App</h1>
      <ColorSquare
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <ColorInput
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
