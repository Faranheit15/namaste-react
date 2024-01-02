import UserFunc from "./UserFunc";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div className=" m-4 p-4">
        <h1 className="text-3xl">About</h1>
        <p>The brains behind this app🧠</p>

        {/* <UserFunc
          name="Faran"
          location="Gorakhpur"
          contact="@wheresmybiriyani"
        /> */}
        <div className="flex">
          <UserClass name="Shazan" location="Noida" contact="@pexelbreaker" />
          <UserClass name="John" location="US" contact="@doejohn" />
        </div>
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <p>The brains behind this app🧠</p>

//       <UserFunc name="Faran" location="Gorakhpur" contact="@wheresmybiriyani" />
//       <UserClass name="Shazan" location="Noida" contact="@pexelbreaker" />
//     </div>
//   );
// };

export default About;

// React Lifecycle (https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

// Parent Constructor
// Parent Render
// Shazan Child Constructor
// Shazan Child Render
// John Child Constructor
// John Child Render
// Shazan Child Mount
// John Child Mount
// Parent Mount
