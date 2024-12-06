import { useState } from "react";

export default function Userlist() {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addUser = () => {
    const newUser = inputValue;
    setUsers([...users, newUser]);
    setInputValue("");
  };

  const removeUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1> Userlist: </h1>
      <input
        type="text"
        value={inputValue}
        placeholder="Username"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addUser}> Add New User </button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}{" "}
            <button onClick={() => removeUser(index)}> Delete User </button>
          </li>
        ))}
      </ul>
    </>
  );
}
