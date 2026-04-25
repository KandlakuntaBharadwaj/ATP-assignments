import React, { useState } from "react";
import Users from "./components/Users";
import UserCount from "./components/Usercount";

function App() {
  const [count, setCount] = useState(0);

  const handleAddUser = () => {
    setCount(count + 1);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">User App</h2>

      <UserCount count={count} />
      <Users onAddUser={handleAddUser} />
    </div>
  );
}

export default App;