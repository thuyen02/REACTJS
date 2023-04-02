import React from "react";
import { useState } from 'react';

const DemoComponents = (props) =>{
    return(
        <div>
            <div>Day la tuoi:{props.age}</div>
            <div>Day la tên:{props.disPlayname}</div>
        </div>
    );
};
export default function Th3() {
    const [age, setAge] = useState(0);
    const [name, setname] = useState('cee');
    const onIncreaseAge = () =>{
        setAge(age + 1);
    };
  return (
    <div className="container" >
        <div>{age}</div>
      <div onClick={onIncreaseAge} >tang age len 1</div>    
      <DemoComponents age={age} disPlayname={name} />
    </div>
  );
}
