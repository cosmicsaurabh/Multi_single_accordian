import './App.css';
import Accordian_single from './components/Accordian_singleselectonly';
import Accordian_both from './components/Accordian_both';

function App() {
  return (
    <div className="App">
      {/* <Accordian_single/> */}
      { <Accordian_both/> }
      {/* <RandomColor/> */}
    </div>
  );
}

export default App;
