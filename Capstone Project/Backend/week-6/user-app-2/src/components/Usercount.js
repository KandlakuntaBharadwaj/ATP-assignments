import React from "react";

function UserCount({ count }) {
  return (
    <div className="alert alert-primary text-center">
      <h4>User Count: {count}</h4>
    </div>
  );
}

export default UserCount;