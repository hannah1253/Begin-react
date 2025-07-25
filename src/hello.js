import React from "react";

// 함수형태. 클래스형태 두가지로 컴포넌트를 만들수 있다.

// 함수

/*
    function Hello(props){
        console.log(props);
        return <div style={{
            color:props.color
            }}>안녕하세요. {props.name}</div>;
    }
*/

//구조분해 == 비구조 할당
function Hello({ color, name, isSpecial }) {
  return (
    <div
      style={{
        color: color,
      }}
    >
      {/* 
               삼항 연산자의 경우 값이 변할때 사용 ==> <b>{isSpecial ? '스페셜하다!' : '낫스페셜'}</b> 
               값에 따라 숨기거나 보여줄땐 && 연산자 사용하는것이 더 간편 ==> {isSpecial && <b>*</b> } 
            */}
      <b>{isSpecial ? "스페셜하다!" : "낫스페셜"}</b>
      {isSpecial && <b>*</b>}
      {/* 코드에 안나타남==> {null} {undefined}{false} 
                코드에 나타남==> {0} 
            */}
      안녕하세요. {name}
    </div>
  );
}

Hello.defaultProps = {
  name: "이름없음",
};
export default Hello;
