 import React from "react";
 import  ReactDOM  from "react-dom/client";

const parent =React.createElement("div",{id:"parent"},
React.createElement("h2",{id:"child"},[React.createElement("h1",{},"React element start with nested object and "),React.createElement("h2",{},"React element start with nested object and ")]))



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)