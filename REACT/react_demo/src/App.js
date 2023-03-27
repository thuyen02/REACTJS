import logo from './logo.svg';
import './App.css';

function App() {
  const todos = ["helle0","thueyn"]
    return <div className="App">
      
      {todos.map((todo,index)=>{
        return <p key={index} >{todo}</p>
      })}
    
    </div>
}

export default App;
