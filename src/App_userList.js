import React , { useRef , useState } from 'react';
import './App.css';
import CreateUesr from './CreateUser';
import UserList from './UserList';

function App() {
  const name = 'react';
  const style = {
    backgroundColor : 'black',
    color: 'aqua',
    fontSize: 24,
    padding : 'lrem'
  }
  const [inputs, setInputs] =useState({
    username:'',
    eamil:''
  });
  const {username, email}=inputs;
  const onChange = e =>{
    const {name,value} = e.target;
    setInputs({
      ...inputs, //기존의 객체를 복사해서 그위에 특정값을 덮어 씌움!
      [name]:value
    });
  };
  const onRemove= id=>{
    setUsers(users.filter(user=>user.id !==id));
  };
  //component의 상태로서 관리가 되고있지 않음! => 컴포넌트 상태로서 관리하기 위해 userState로 감싸주기!
  const [users,setUsers] = useState([
    {
        id: 1,
        username: 'velopert',
        email:'public.velopert@gmai.com',
        active : true
    },
    {
        id: 2,
        username: 'tester',
        email:'tester@gmai.com',
        active : false

    },
    {
        id: 3,
        username: 'liz',
        email:'liz@gmai.com',
        active : false

    }
]);



const nextId =useRef(4);

const onCreate =( )=>{
  const user ={
    id : nextId.current,
    username,
    email
  }
  //배열에 불변성을 지키면서 새로운 항목을 추가하는 방법
//1. 스프레드연산자 (...) 사용하는 방법 https://learnjs.vlpt.us/useful/07-spread-and-rest.html 참고 
// setUsers([...users,user])
 setUsers(users.concat(user))
  setInputs({
    username:'',
    email:''
  })
  console.log(nextId.current);   //4
  nextId.current +=1; //사용하고 기존값에 +1 
  //여기서 nextId를 useRef 로 관리하는 이유는 값이 바뀐다고 해서 굳이 컴포넌트가 리렌더링 될 필요가 없기 때문에! 변수로 관리하는것도 괜찮다.
}

const onTogle= id =>{
  // 불변성을 지키면서 배열을 업데이트 할때에도 자바스크립트 내장함수 map 사용 가능
  setUsers(users.map(
    user => user.id === id
      ? {...user,active: !user.active}
      : user
  ))
}
  return (
    <div className="App">
      <>
      <CreateUesr username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onTogle={onTogle}/>
      </>
     
    </div>
  );
}

export default App;
