import React, { useRef, useState, useMemo, useCallback } from "react";
import CreateUesr from "./CreateUser";
import UserList from "./UserList";
//useMemo => 이전에 연산된 값을 재사용하는 Hook  성능을 최적화 해야할 때 사용!
//useCallback =>  이전에 만들었던 함수를 새로 만들지 않고 재사용 하는 방법! useMemo랑 비슷한데 함수에 사용하는 Hook
//react devtools 크롬에 확장 설치하면 개발자 도구에
function countActiveUsers(users) {
  console.log("활성 사용자 수 새는중...dddd");
  return users.filter((user) => user.active).length;
}

function App() {
  const name = "react";

  const [inputs, setInputs] = useState({
    username: "",
    eamil: "dd",
  });
  const { username, email } = inputs;

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs, //기존의 객체를 복사해서 그위에 특정값을 덮어 씌움!
        [name]: value,
      });
    },
    [inputs]
  );

  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  //component의 상태로서 관리가 되고있지 않음! => 컴포넌트 상태로서 관리하기 위해 userState로 감싸주기!
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmai.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@gmai.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@gmai.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    //배열에 불변성을 지키면서 새로운 항목을 추가하는 방법
    //1. 스프레드연산자 (...) 사용하는 방법 https://learnjs.vlpt.us/useful/07-spread-and-rest.html 참고
    // setUsers([...users,user])
    setUsers((users) => users.concat(user));
    setInputs({
      username: "",
      email: "",
    });
    console.log(nextId.current); //4
    nextId.current += 1; //사용하고 기존값에 +1
    //여기서 nextId를 useRef 로 관리하는 이유는 값이 바뀐다고 해서 굳이 컴포넌트가 리렌더링 될 필요가 없기 때문에! 변수로 관리하는것도 괜찮다.
  }, [username, email]);

  const onTogle = useCallback((id) => {
    // 불변성을 지키면서 배열을 업데이트 할때에도 자바스크립트 내장함수 map 사용 가능
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]); // deps 안에 내용 즉 users 안에 내용이 바뀔때만 호출해준다!
  return (
    <>
      <CreateUesr
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onTogle={onTogle} />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
