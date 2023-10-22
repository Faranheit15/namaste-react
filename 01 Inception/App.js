const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello, World from React!"
);

console.log(heading); //object

root.render(heading);
