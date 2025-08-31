import './App.css';
import Cars from './components/car.js'

function App() {
  const carinfo = {name: "Ford", model: "Mustang"};
  
  return (
    <div className="App">
      <Cars carInfo={carinfo} />
    </div>
  );
}

export default App;
