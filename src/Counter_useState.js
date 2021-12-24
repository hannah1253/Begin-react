import React ,{useState}from "react";

function Counter(){
    const [number, setNumber]= useState(0);
    // 첫번째 원소는 현재상태 두번쨰 원소는 현재상태를 바꾸는 함수. 
    // useState(이안에 들어갈 값은 초기값)
    const onIncrease =()=>{
       // setNumber(number+1);
       setNumber(prevNumber => prevNumber+1);
       //업데이트 할 로직을 함수로 구현할수 있음 ==> 최적화랑 관련이있음
    }
    const onDecrease =()=>{
        setNumber(number-1);
    }
    return(
        <di>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        </di>

    )

    }

export default Counter;