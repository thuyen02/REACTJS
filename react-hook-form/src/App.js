import React from "react";
import {useForm} from "react-hook-form"
import "./App.css";

export default function App() {
  const {register, handleSubmit,formState:{errors}} = useForm();
  const onSubmit = (data ) =>{
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} >  
      <h1>React Hook Form</h1>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" placeholder="Your Name" {...register("name", {required:true }) } />
      <label htmlFor="adress">Adress:</label>
      <input type="text" name="adrees" id="adress" placeholder="Your Name" {...register("adress", {required:true }) } />
      <label htmlFor="name">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        {...register("passworld",{required:true,minLength:6} )}
      />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" placeholder="Your Email" {...register("email",{required:true,
        pattern:/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/,
      }) } />
        <label htmlFor="email">Triệu chứng:</label>
      <div class="form-check" style={{display:'flex',width:'104px'}} >    
      <label  style={{marginTop:'10px'}} class="form-check-label" for="">
        Ho
      </label>
        <input class="form-check-input" type="checkbox" name="ho" value="" id="" {...register("ho",{required:{
          value:true,
        message:'checkbox is requied',
        }})
      } />
      
      </div>
      {Object.keys(errors).length !== 0 && (
        <ul className="error-container">
       {errors.name?.type == 'required' && (<li> name is required</li>)}
       {errors.adress?.type == 'required' && (<li> adress is required</li>)}
       {errors.passworld?.type == 'required' &&( <li> passwword is required</li>)}
       {errors.passworld?.type == 'minLength' &&( <li> passwword minLength</li>)}
       {errors.email?.type == 'required' &&( <li> email is required</li>)}
       {errors.email?.type == 'pattern' &&( <li> email is value</li>)}
       {errors.ho?.type == 'required' && <li>{errors.ho.message}</li>}
      </ul>
      )}
      

      <button type="submit">Submit</button>
    </form>
  );
}
