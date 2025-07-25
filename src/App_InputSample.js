import React from "react";

import "./App.css";

import InputSample from "./InputSample";

function App() {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "lrem",
  };
  return (
    <div className="App">
      <>
        <InputSample />
      </>
    </div>
  );
}

export default App;
