import React from "react";
import ReactDOM from "react-dom";

//jsx
// const projOne = (
//   <div>
//     <img
//       src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
//       alt="react.dev/"
//     />
//     <h1>Fun facts about react</h1>
//     <ul>
//       <li>Was first release in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K starts on github</li>
//       <li>Is maintained by Facebook(Meta)</li>
//       <li>Powers thousands of interprice apps including mobile aaps </li>
//     </ul>
//   </div>
// );

// Custom components means function

// function PageOne() {
//   return (
//     <div>
//       <img
//         src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
//         alt="react.dev/"
//       />
//       <h1>Fun facts about react</h1>
//       <ul>
//         <li>Was first release in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100K starts on github</li>
//         <li>Is maintained by Facebook(Meta)</li>
//         <li>Powers thousands of interprice apps including mobile aaps </li>
//       </ul>
//     </div>
//   );
// }

//Es6 arrow function
const PageOne = () => {
  return (
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="react.dev/"
      />
      <h1>Fun facts about react</h1>
      <ul>
        <li>Was first release in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K starts on github</li>
        <li>Is maintained by Facebook(Meta)</li>
        <li>Powers thousands of interprice apps including mobile aaps </li>
      </ul>
    </div>
  );
};

//For function call we need to use the fuction name as a "Tag"  and alwasy write function name in pascal case
ReactDOM.render(<PageOne />, document.getElementById("root"));
