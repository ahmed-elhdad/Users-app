"use client";
import React, { useEffect, useState } from "react";
const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("http://localhost:8005/allUsers")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <header>
        <h1>All Users</h1>
        <a href="./form">
          <button className="btn btn-primary">Add User</button>
        </a>
      </header>
      <div className="users">
        {users.length === 0 ? (
          <center>No users found</center>
        ) : (
          users.map((user) => (
            <div className="user" key={user.userId}>
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Age: {user.age}</p>
              {/* <p>Password: {user.password}</p> */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
