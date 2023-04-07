import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [time, setTime] = useState("day");
  const handleButtonClick = (newTime) => {
    setTime(newTime);
  }
  return (
   <div className="container">
    <div className="btn">
      <button onClick={() => handleButtonClick('day')}>Night</button>
      <button onClick={() => handleButtonClick('night')}>Day</button>
    </div>
    <div style={{
        width: '200px',
        height: '80px',
        backgroundColor: time === 'day' ? 'blue' : 'black'
      }} />
   </div>
  );
}

export default App;