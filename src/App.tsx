import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App App-header">
      <button
        className="Button-primary"
        onClick={() => setCount((prevCount) => prevCount + 1)}
        data-testid="count-button"
      >
        Add 1
      </button>
      <h2 data-testid="count-text">Count is: {count}</h2>
    </div>
  );
}

export default App;
