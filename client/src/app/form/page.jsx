"use client";

import { useEffect, useState } from "react";
import React from "react";
// const page = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     gender: "",
//     age: Number,
//   });
//   const hanldeSubmit = async (e) => {
//     e.preventDefault();
//     fetch("http://localhost:8005/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//         gender: formData.gender,
//         age: formData.age,
//       }),
//     });
//   };
//   return (
//     <>
//       <form onSubmit={hanldeSubmit} action="">
//         <div className="name">
//           <label htmlFor="name-input">name*</label>
//           <input
//             type="text"
//             name="name-input"
//             onChange={(e) => {
//               setFormData({ ...formData, name: e.target.value });
//               console.log(formData);
//             }}
//           />
//         </div>
//         <div className="email">
//           <label htmlFor="email-input">email*</label>
//           <input
//             type="text"
//             name="email-input"
//             onChange={(e) => {
//               setFormData({ ...formData, email: e.target.value });
//               console.log(formData);
//             }}
//           />
//         </div>
//         <div className="password">
//           <label htmlFor="password-input">password*</label>
//           <input
//             type="text"
//             name="password-input"
//             onChange={(e) => {
//               setFormData({ ...formData, password: e.target.value });
//               console.log(formData);
//             }}
//           />
//         </div>
//         <div className="gender">
//           <label htmlFor="gender-input">gender*</label>
//           <input
//             type="text"
//             name="gender-input"
//             onChange={(e) => {
//               setFormData({ ...formData, gender: e.target.value });
//               console.log(formData);
//             }}
//           />
//         </div>
//         <div className="age">
//           <label htmlFor="age-input">age*</label>
//           <input
//             type="text"
//             name="age-input"
//             onChange={(e) => {
//               setFormData({ ...formData, age: e.target.value });

//               console.log(formData);
//             }}
//           />
//         </div>
//         <button type="submit" className="">
//           Add
//         </button>
//       </form>
//     </>
//   );
// };

// export default page;

// function App() {
//   const [users, setUsers] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//   });

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = () => {
//     fetch("http://localhost:8005/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data))
//       .catch((err) => console.log(err));
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch("http://localhost:8005/users", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: formData.name,
//         email: formData.email,
//         age: Number(formData.age),
//       }),
//     })
//       .then((res) => res.json())
//       .then(() => {
//         fetchUsers(); // تحديث البيانات
//         setFormData({ name: "", email: "", age: "" }); // تفريغ النموذج
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Users List</h1>

//       {/* Add User Form */}
//       <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="number"
//           name="age"
//           placeholder="Age"
//           value={formData.age}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Add User</button>
//       </form>

//       {/* User List */}
//       {users.map((user) => (
//         <div
//           key={user._id}
//           style={{ border: "1px solid #ccc", padding: 10, margin: 5 }}
//         >
//           <h3>{user.name}</h3>
//           <p>Email: {user.email}</p>
//           <p>Age: {user.age}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "male",
    password: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("http://localhost:8005/allUsers")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8005/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        age: Number(formData.age),
        gender: formData.gender,
        password: formData.password,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        fetchUsers();
        setFormData({
          name: "",
          email: "",
          age: "",
          gender: "male",
          password: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add New User</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Age:</label>
          <br />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Gender:</label>
          <br />
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default App;
