import express from "express";
import connectDB from "./config/connectDB.js";
import User from "./models/user.js";
const app = express();
app.use(express.json());
import bcrypt from "bcrypt";
import user from "./models/user.js";
const port = 8005;
let users = [];
app.get("/", (req, res) => {
  users = [...users];
  console.log(users);
  res.status(200).render("users.ejs", users);
});
app.post("/users", async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.password ||
    !req.body.age
  ) {
    return res.status(400).send("All fields are required");
  }
  if (users.find((user) => user.name === req.body.name)) {
    return res.status(400).send("There is an error");
  }
  if (users.find((user) => user.email === req.body.email)) {
    return res.status(400).send("There is an error");
  } else {
    const newUser = new User();
    newUser.name = req.body.name;
    // Check email format:
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(req.body.email) === false) {
      return res.status(400).send("Error");
    } else {
      newUser.email = req.body.email;
    }
    // Check password feild:
    let hashedPassword = await bcrypt.hash(req.body.password, 10);
    newUser.password = hashedPassword;
    newUser.age = req.body.age;
    for (let i = 0; i < users.length; i++) {
      newUser.userId = i + 1;
    }
    await newUser.save();
    users.push({ newUser });
    console.log(users);
    res.send(newUser);
  }
});
app.get("/profile", (req, res) => {
  res.render("./views/profile.ejs");
});
app.get("/api", (req, res) => {
  res.json("users: []");
});
connectDB();
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
