import React ,{useState} from "react";

function InputSample(){
    const [inputs, setInputs]= useState({
        name: '',
        nickname: ''
    });
    const {name, nickname}=inputs;

    const onChange=(e)=>{
        const {name, value}=e.target;
        
        const nextInputs ={
            ...inputs,
            [name]:value
        }
       // ...inputs : 스프레드 문법 
       //객체상태를 업데이트할땐  한번 겍체를 복사하고 나서 덮어써서 상태를 업뎃해야한당!!! 
       setInputs(nextInputs);
    }
    const onReset=(e)=>{
        setInputs({
            name:'',
            nickname:''
        });
    }
    return(
        <div>
      
           <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange} 
                value={name}
            />
           <input 
                name="nickname" 
                placeholder="닉네임" 
                onChange={onChange} 
                value={nickname}
            />
           <button onClick={onReset}>초기화</button> 
           <div>
              <b>값: {name} ( {nickname} ) </b> 
 
           </div>
        </div>
    )
}

export default InputSample;