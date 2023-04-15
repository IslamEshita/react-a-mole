import { useState } from "react";
import MoleContainer from "./components/MoleContainer";
import "./App.css";

function App() {
  let [score, setScore] = useState(0);

  function createMoleHill() {
    let hills = [];
    let numHills = 9;
    for (let i = 0; i < numHills; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />);
    }

    return hills;
  }

  return (
    <div className="App">
      <h1>React-a-Mole</h1>
      <h2>Score: {score}</h2>
      <div className="AllMolesContainer">{createMoleHill()}</div>
    </div>
  );
}

export default App;
