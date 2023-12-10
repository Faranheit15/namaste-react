import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement("h1", { id: "heading" }, "Hello, World!🤣");

const jsxHeading = (
  <h1 className="head" tabIndex="1">
    Hello, World by JSX!
  </h1>
);

root.render(jsxHeading);
