import React from "react";
export default function tet(){
    const useBoolean = (initialState = false) => {
        const [state, setState] = React.useState(initialState);
      
        const handleTrue = () => setState(true);
        const handleFalse = () => setState(false);
        const handleToggle = () => setState(!state);
      
        return [
          state,
          {
            setTrue: handleTrue,
            setFalse: handleFalse,
            setToggle: handleToggle,
          },
        ];
      };     
}
