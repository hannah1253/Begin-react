import React, { useReducer } from "react";

//reducer 함수는  첫번째 파라미터 state 두번째 파라미터 action
// 결과값은 그 다음 형태!
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      throw new Error("unhandled action");
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const onDecrease = () => {
    dispatch({
      type: "DECREMENT",
    });
  };
  return (
    <di>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </di>
  );
}

export default Counter;
