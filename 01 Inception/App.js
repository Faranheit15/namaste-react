const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * <div id="parent">
 *  <div id="child">
 *    <h1><I am h1 tag/h1>
 *  </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1" }, "I'm an h1 tag"),
    React.createElement("h2", { key: "h2" }, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h11" }, "I'm an h1 tag"),
    React.createElement("h2", { key: "h22" }, "I'm an h2 tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello, World from React!"
// );

//console.log(heading); ////object

root.render(parent);
