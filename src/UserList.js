import React  from "react";

function User({ user }){
    return(
        <div>
                <b>{user.username}</b><span>{user.email}</span>
        </div>
    )
}


function UserList() {   
    const users = [
        {
            id: 1,
            username: 'velopert',
            email:'public.velopert@gmai.com'
        },
        {
            id: 2,
            username: 'tester',
            email:'tester@gmai.com'

        },
        {
            id: 3,
            username: 'liz',
            email:'liz@gmai.com'

        }
    ]

    return(
        <>
            <div /* 배열의 내용이 가변적이면??  */>
                {
                    users.map(
                        // child in a list should  have a unique key prop --> 고유값을 key 로 설정해야한다. 그래야 렌더링 성능이 최적화 된다.
                        user =>(<User user={user} key={user.id}/>)
                       // (user,index) =>(<User user={user} key={index}/>) --> key가 없는경우 map 에서 제공하는 index를 사용해도된다.
                    )
                }
            </div>
            <div>
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
            
            </div> 
        </>
    )
}

export default UserList;