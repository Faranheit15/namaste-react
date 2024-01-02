import React, { useState } from "react";

const UserFunc = ({ name, location, contact }) => {
  const [followerCount, setFollowerCount] = useState(0);
  //   const [followingCount] = useState(1);

  const increaseFollowers = () => {
    setFollowerCount(followerCount + 1);
  };
  const decreaseFollowers = () => {
    setFollowerCount(followerCount - 1);
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
};

export default UserFunc;
