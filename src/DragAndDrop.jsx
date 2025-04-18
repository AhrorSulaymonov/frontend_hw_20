import React, { useState } from "react";

function DragAndDrop(props) {
  const [users, setUsers] = useState([
    { name: "Ali", age: 21 },
    { name: "Ali 1", age: 21 },
    { name: "Ali 2", age: 21 },
    { name: "Ali 3", age: 21 },
    { name: "Ali 4", age: 21 },
    { name: "Ali 5", age: 21 },
    { name: "Ali 6", age: 21 },
    { name: "Ali 7", age: 21 },
    { name: "Ali 8", age: 21 },
  ]);

  const [secondUsersList, setSecondUsersList] = useState([]);

  const [thirdUsersList, setThirdUsersList] = useState([]);

  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div style={{ display: "flex" }}>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => {
          setSecondUsersList(
            secondUsersList.filter((u) => u.name !== selectedUser.name)
          );
          setThirdUsersList(
            thirdUsersList.filter((u) => u.name !== selectedUser.name)
          );
          !users.includes(selectedUser)
            ? setUsers([...users, selectedUser])
            : setUsers(users);
        }}
        style={{ width: "300px" }}
        id="secondList"
      >
        <p>Users List 1:</p>
        {users.map((user) => (
          <p
            draggable
            onDragStart={(e) => setSelectedUser(user)}
            style={{ padding: "20px", background: "lightgray", color: "#000" }}
            key={user.name}
          >
            {user.name} - {user.age}
          </p>
        ))}
      </div>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => {
          setUsers(users.filter((u) => u.name !== selectedUser.name));
          setThirdUsersList(
            thirdUsersList.filter((u) => u.name !== selectedUser.name)
          );
          !secondUsersList.includes(selectedUser)
            ? setSecondUsersList([...secondUsersList, selectedUser])
            : setSecondUsersList(secondUsersList);
        }}
        style={{ width: "300px" }}
        id="secondList"
      >
        <p>Users List 2:</p>
        {secondUsersList.map((user) => (
          <p
            draggable
            onDragStart={(e) => setSelectedUser(user)}
            style={{ padding: "20px", background: "lightgray", color: "#000" }}
            key={user.name}
          >
            {user.name} - {user.age}
          </p>
        ))}
      </div>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => {
          setUsers(users.filter((u) => u.name !== selectedUser.name));
          setSecondUsersList(
            secondUsersList.filter((u) => u.name !== selectedUser.name)
          );
          !thirdUsersList.includes(selectedUser)
            ? setThirdUsersList([...thirdUsersList, selectedUser])
            : setThirdUsersList(thirdUsersList);
        }}
        style={{ width: "300px" }}
        id="thirddList"
      >
        <p>Users List 3:</p>
        {thirdUsersList.map((user) => (
          <p
            draggable
            onDragStart={(e) => setSelectedUser(user)}
            style={{ padding: "20px", background: "lightgray", color: "#000" }}
            key={user.name}
          >
            {user.name} - {user.age}
          </p>
        ))}
      </div>
    </div>
  );
}

export default DragAndDrop;
