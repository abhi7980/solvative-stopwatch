import logo from "./logo.svg";
import "./App.css";
import Stopwatch from "./component/StopWatch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stopwatch App</h1>
        <Stopwatch />
      </header>
    </div>
  );
}

export default App;
