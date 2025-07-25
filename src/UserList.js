import React, { useEffect } from "react";

const User = React.memo(function User({ user, onRemove, onTogle }) {
  const { username, email, id, active } = user;

  useEffect(() => {
    console.log("유저값이 설정됨");
    console.log(user);
    return () => {
      console.log("유저값이 바뀌기 전");
      console.log(user);
    };
  }, [user]); // useEffect 안에서 사용하고 있는 상태 값은 deps 꼭 넣어줘야함 props로 함수를 사용할떄도!

  /* useEffect(()=>{ //함수가 호출되는 시점은 화면에 UI 가 화면에 나타난 이후
        console.log('컴포넌트가 화면에 나타남'); //컴포넌트가 3개 호출되기때문에 3번호출함.
        //props => state
        //Rest API
        //D3 Video.js
        //setInterval, setTimeout
        return()=>{
            // clearInterval , clearTimeout 등 (setInterval, setTimeout 을 제거할떄 )
            // 라이브러리 인스턴스 제거할때  ==> 클리너 함수에서 할수 있음!
            console.log('컴포넌트가 화면에서 사라짐'); // 삭제할때 호출됌
        }
    }, []);
    */
  return (
    <div>
      <b
        style={{
          color: active ? "green" : "black",
          cursor: "pointer",
        }}
        onClick={() => onTogle(id)}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button
        //onClick={onRemove(user.id)} 이렇게 실수를 하면 렌더링 되는 순간 해당함수가 호출되버림!
        onClick={() => onRemove(id)}
      >
        삭제
      </button>
    </div>
  );
});

function UserList({ users, onRemove, onTogle }) {
  return (
    <>
      <div /* 배열의 내용이 가변적이면??  */>
        {users.map(
          // child in a list should  have a unique key prop --> 고유값을 key 로 설정해야한다. 그래야 렌더링 성능이 최적화 된다.
          (user) => (
            <User
              user={user}
              key={user.id}
              onRemove={onRemove}
              onTogle={onTogle}
            />
          ),
          // (user,index) =>(<User user={user} key={index}/>) --> key가 없는경우 map 에서 제공하는 index를 사용해도된다.
        )}
      </div>
    </>
  );
}

export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.users,
);
