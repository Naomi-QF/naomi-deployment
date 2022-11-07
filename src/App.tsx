import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Naomi Quintero 🙂</p>
        <p>
          Hello there:{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            ✨
          </a>{" "}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
