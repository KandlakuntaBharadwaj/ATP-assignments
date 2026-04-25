import React, { useEffect, useState } from "react";

function Users({ onAddUser }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="row">
      {users.map((user) => (
        <div className="col-md-3 mb-4" key={user.id}>
          <div className="card p-3 text-center">
            <h5>{user.name}</h5>
            <p>{user.email}</p>
            <button
              className="btn btn-success"
              onClick={onAddUser}
            >
              Add User
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;