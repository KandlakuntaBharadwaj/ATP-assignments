import React, { useState } from "react";

export default function UserManagement() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [users, setUsers] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.age) {
      alert("Please fill all fields");
      return;
    }

    setUsers([...users, formData]);

    // Clear form
    setFormData({
      name: "",
      email: "",
      age: ""
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      
      <h2>User Creation Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Add User</button>
      </form>

      <h2 style={{ marginTop: "30px" }}>User List</h2>

      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="3" align="center">No users added</td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

    </div>
  );
}