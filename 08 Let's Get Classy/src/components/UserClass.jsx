import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followerCount: 0,
      //   followingCount: 2,
    };
  }
  render() {
    const { name, location, contact } = this.props;
    const { followerCount, followingCount } = this.state;
    const increaseFollowers = () => {
      this.setState({ followerCount: followerCount + 1 });
    };
    const decreaseFollowers = () => {
      this.setState({ followerCount: followerCount - 1 });
    };
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
        <h2>Followers: {followerCount}</h2>
        <button onClick={increaseFollowers}>➕</button>
        <button onClick={decreaseFollowers}>➖</button>
        {/* <h2>Following: {followingCount}</h2> */}
      </div>
    );
  }
}
export default UserClass;
