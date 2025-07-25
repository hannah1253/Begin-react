import React from "react";
import Hello from "./hello";

import "./App.css";
import Wrapper from "./Wrapper";
import Counter from "./Counter";

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
        <Counter />
        {/*주석은 이렇게
        <Wrapper>
        
        <Hello name="react" color="red" isSpecial ={true}
          // 이런식으로 작성하는 주석은 화면에 나타나지 않음.
        />
        <Hello color="pink"  />
        </Wrapper>
        <div style={style}>{name}</div>
         */}
      </>
      {/*<div className="gray-box"></div> */}
    </div>
  );
}

export default App;
