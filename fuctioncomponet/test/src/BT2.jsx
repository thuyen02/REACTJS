
import React from 'react'
import {useState, useEffect} from 'react';
export default function BT2() {
    var day = new Date();
    var timenow = day.getHours() + ':' + day.getMinutes() + ':' + day.getSeconds();
    const [time,setTime] = useState(timenow)
    console.log(timenow)
    useEffect(()=>{
        const Timer = setTimeout(()=>{
            var day = new Date();
            var timeNow = day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds();
            setTime(timenow)
            console.log("Giờ sau 5 giây:", time);
        },5000)  
    });
    return (
     <div>
        <div>{time}</div>
     </div>
    );
}
