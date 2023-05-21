import "../styles/App.css";
import Header from "./Header/Header";
import Body from "./Body/Body";
import React from "react";

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="body-content">
        <Body />
      </div>
    </div>
  );
}

export default App;
