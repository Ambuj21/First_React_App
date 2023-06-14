import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
const App = () => {
  return (
    <div className="MainContainer">
      <Navbar />
      <MainContent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
