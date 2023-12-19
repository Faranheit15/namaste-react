import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// React Element
const heading = (
  <h1 className="head" tabIndex="1">
    Hello, World by JSX!🐔 -- Element
  </h1>
);

// React Component
const Title = () => (
  <h1 className="head" tabIndex="1">
    Hello, World by JSX!🐔
  </h1>
);

// Component Composition: Using one component inside another
const HeadingComponent = () => (
  <div id="container">
    {heading}
    {Title()}
    <Title />
    <Title></Title>
    <h1>This is a heading component!</h1>
  </div>
);

// root.render(heading);
root.render(<HeadingComponent />);
