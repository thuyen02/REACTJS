import React,{useState} from "react";
export default function Th1(){
    const [Name,setName] = useState('')
    const [Age,setAge] = useState(5)
    const onChangeAge = () =>{
        setAge(Age+1);
    }
    const onChangeName = () =>{
        setName('Cee');
    }
    return (
        <div className='container'>
          <div>Xin chào: {Name}</div>
          <div>Tuổi là: {Age}</div>
          <div onClick={onChangeAge}>Tăng tuổi thêm 1</div>
          <div onClick={onChangeName}>Hiển thị tên</div>
        </div>
      );
}