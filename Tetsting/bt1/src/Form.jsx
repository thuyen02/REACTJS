import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Form() {
    const [title,setTitle] =useState(' ')
    const [title1,setTitle1] =useState(' ')
    const chanemail = event=>{
        setTitle(event.target.value);
    }
    const Changepass = event=>{
        setTitle1(event.target.value);
    };

    const handleClick=(title,title1)=>{
        if(title=='admin' && title1=='admin123'){
            alert(' Xin chào Admin.')
        }
        else{
            alert('looxi')
        }
    
    };
  return (
    
    <div  >
<form style={{with:400}} >
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">username</label>
    <input l onChange={chanemail} type="text" class="form-control" ></input>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input  onChange={Changepass} type="password" class="form-control" id="exampleInputPassword1"></input>
  </div>
 
  <button onClick={handleClick()}class="btn btn-primary">Submit</button>
</form>
    </div>
  );
}


