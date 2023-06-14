import React from "react";
import ReactDOM from "react-dom";

// custom component

function FirstCustom() {
  return (
    <div>
      <header>
        <nav>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="react_Logo"
          />
        </nav>
        <h2>This page is created to practice CustomeComponents.</h2>
      </header>

      <ol>
        <li>Easy to learn</li>
        <li>Componets are just linke function</li>
        <li>It can return atmost one element</li>
      </ol>

      <footer>
        <small>2023 Custom Component develoment</small>
      </footer>
    </div>
  );
}

ReactDOM.render(<FirstCustom />, document.getElementById("root"));
