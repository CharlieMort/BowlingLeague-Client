import './App.css';
import {useState} from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [scoreCard, setScoreCard] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/create-player", {name:name, score:scoreCard})
      .then(res => {
        console.log("willy bum");
      })
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={onSubmit}>
          <h2>Enter Details</h2>
          <h3>Name</h3>
          <input type="text" placeholder="Name..." onChange={(e) => setName(e.target.value)} />
          <h3>ScoreCard</h3>
          <input type="text" placeholder="-9/2450404" onChange={(e) => setScoreCard(e.target.value)} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
