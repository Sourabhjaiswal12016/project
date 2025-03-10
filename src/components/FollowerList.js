import React from "react";
import FollowerCard from "./FollowerCard";

const FollowerList = ({ followers, onRemove }) => {
  return (
    <div className="follower-list">
      {followers.map((follower) => (
        <FollowerCard
          key={follower.uid}
          follower={follower}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default FollowerList;
