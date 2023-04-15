import React,{useState} from "react";
 export default function Bt1(){
    const [number1,setNumber1] = useState(0)
    const [number2,setNumber2] = useState(0)
    const [tong,setTong] = useState(0)
    const [tich,setTich] = useState(0)
    
    const onChangeTong = () =>{
        setTong(number1+number2);
    }
    const onChangeTich = () =>{
        setTich(number1*number2);
    }
 const handlechangeNUmber1 = (event) =>{
        setNumber1(
            +event.target.value         
        );
        
    }
    const handlechangeNUmber2 = (event) =>{
        setNumber2(
          +event.target.value
        );

    }
    console.log(number1)
     
    return(
        <div>
            <input type="Number" onChange={(event)=> handlechangeNUmber1(event)} />
            <input type="Number" onChange={(event)=> handlechangeNUmber2(event)} />
            <div>Tổng: {tong}</div>
            <div>Tích: {tich}</div>
            <button onClick={onChangeTong}>Tính tổng</button>
          <button onClick={onChangeTich}>Tính tích</button>
        </div>
    );
 }