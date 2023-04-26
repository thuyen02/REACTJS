import { Controller, useForm } from "react-hook-form";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
export default function App() {
  const {  handleSubmit, control, formState: { errors } } = useForm({
    defaultValues:{
      name:' ',
      email:' ',
    }
  });
  const onSubmit = data => console.log(222,data);

 // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
    
      <Controller name="name" control={control} render={({field})=> 
       <input id="name" {...field} />
    } />
      
      <Controller name="email" control={control} render={({field})=> 
       <input id="email" {...field} />
    } />
     
      <input type="submit" />
    </form>
  );
}