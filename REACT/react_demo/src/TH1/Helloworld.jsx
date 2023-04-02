import React from "react";


function HelloWorld() {
  let Name ="Cee"
  const user ={
    firtname:'thueyn',
    lastname:'thueyn'
  }
  const formatname = (user) =>{
    return user.firtname + ' '+ user.lastname;
  }
 return (
  <div>
 <div>Xin chào:{Name} và {formatname(user)}</div>
  <div>{Name === 'Cee' ? 'Xin Chào Cee' : `Xin Chào ${formatname(user)}`}</div>
  </div>
 );
}
export default HelloWorld;