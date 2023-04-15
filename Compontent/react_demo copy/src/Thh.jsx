
import React,{useContext} from 'react'
import { MyAppContext } from './MyApp'
export default React.memo(function Thh({onMessageClick}){
    const context = useContext(MyAppContext);
    console.log(context.isLogin);
    return <div onClick={onMessageClick} >
        {context.message}
    </div>
});