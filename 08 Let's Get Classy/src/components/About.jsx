import UserFunc from "./UserFunc";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>The brains behind this app🧠</p>

      <UserFunc name="Faran" location="Gorakhpur" contact="@wheresmybiriyani" />
      <UserClass name="Shazan" location="Noida" contact="@pexelbreaker" />
    </div>
  );
};

export default About;
