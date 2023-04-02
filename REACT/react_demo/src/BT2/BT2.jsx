import React from "react";

export default function BT2() {
    function UserForm() {
        return (
          <div>
            <input type="text" name="Name" placeholder="Please enter name" onChange={handleInputChange} />
            <button  onClick={handleButtonClick}>thueyn</button>
          </div>
        );
      }
      const handleButtonClick = (e) => {
            Greeting();
      };
    
      function Greeting({ name }) {
        return <div> geeting {name && `Greeting ${name}`}</div>;
      }

  return (
    <div> 
    <UserForm/>
   
    <Greeting/>
    </div>
  );
}
