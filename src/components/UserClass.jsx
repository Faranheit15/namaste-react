import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followerCount: 0,
      //   followingCount: 2,
      userInfo: {
        name: "Nameless Wonder",
        location: "Anywhere",
        contact: "@None",
      },
    };
    // console.log(this.props.name, "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name, "Child Mount");
    const data = await fetch("https://api.github.com/users/Faranheit15");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  render() {
    // const { name, location, contact } = this.props;
    // const { followerCount, followingCount } = this.state;

    // console.log(name, "Child Render");

    // const increaseFollowers = () => {
    //   this.setState({ followerCount: followerCount + 1 });
    // };
    // const decreaseFollowers = () => {
    //   this.setState({ followerCount: followerCount - 1 });
    // };

    const { name, location, login, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card p-4 rounded-lg hover:bg-slate-200">
        <img className="rounded-lg" src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @{login}</h4>
        {/* <h2>Followers: {followerCount}</h2>
        <button onClick={increaseFollowers}>➕</button>
        <button onClick={decreaseFollowers}>➖</button> */}
        {/* <h2>Following: {followingCount}</h2> */}
      </div>
    );
  }
}
export default UserClass;
