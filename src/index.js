import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Parse from "parse/dist/parse.min.js";

Parse.initialize(
  "ov1tNGhqHPywaMy5xrh9BcBJaprgHK7pa5NttJbv", //application ID
  "54x16soSKNHvYjpe8320xHwlVz3wtEOU2zoxE0UO" // Javascript key
);

Parse.serverURL = "https://parseapi.back4app.com/";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
