import logo from './logo.svg';
import './App.css';
import Helloworld from './TH1/Helloworld';
import Th3 from './TH3/Th3';
import Th4 from './TH4/Th4';
import BT1 from './BT1/BT1';
import BT2 from './BT2/BT2';
function App() {
  return (
    <div>
      <div>header</div>
      <div>footer</div>
      <div>header</div>
      <Helloworld />
      <Th3/>
      <Th4/>
      <BT1/>
      <BT2/>
    </div>
  );
}
export default App;