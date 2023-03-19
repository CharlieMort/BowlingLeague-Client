import './App.css';
import React, {useState} from "react";
import {
  Link,
  Outlet
} from "react-router-dom";

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue(value => value+1);
}

function App() {
  return (
      <div className="App">
        <nav>
          <div className='logo'>
            <h1>The</h1>
            <h1>Bowling</h1>
            <h1>League</h1>
          </div>
          <Link className='navItem' to="/">
            <h1>Scores</h1>
            <hr />
          </Link>
          <Link className='navItem' to="/admin">
            <h1>Admin</h1>
            <hr />
          </Link>
        </nav>
        <Outlet />
      </div>
  );
}

/*

<AddGame forceUpdate={forceUpdate} />
        <button onClick={forceUpdate}>Refresh</button>
        <Leaderboard forceUpdate={forceUpdate} />
        <Games forceUpdate={forceUpdate} />

*/

export default App;
