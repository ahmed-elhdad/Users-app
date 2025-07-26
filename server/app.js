import express from "express";
import connectDB from "./config/connectDB.js";
import User from "./models/user.js";
const app = express();
app.use(express.json());
import bcrypt from "bcrypt";
import cors from "cors";
app.use(cors());
const port = 8005;
let users = [];
app.get("/", (req, res) => {
  users = [{ ...users }];
  console.log(users);
  res.status(200).render("users.ejs", users);
});
app.get("/allUsers", async (req, res) => {
  try {
    const users = await User.find();
    // users.push({ users });
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
  }
});
// Create a new user
app.post("/users", async (req, res) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log("POSTING USER.....");

  if (!req.body.name || !req.body.email || !req.body.age) {
    console.log("Chceking for empty fields");

    return res.status(404).json({ error: "All fields are required" });
  } else {
    if (
      users.find((user) => {
        user.name === req.body.name;
      })
    ) {
      console.log("Checking for existing user");

      return res.status(400).json({ error: "User already exists" });
    } else {
      if (
        users.find((user) => {
          user.email === req.body.email;
        })
      ) {
        console.log("Checking for existing user");

        return res.status(400).json({ error: "email is aleardy exites" });
      } else {
        const newUser = new User();
        newUser.name = req.body.name;
        newUser.email = req.body.email;
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        newUser.password = hashedPassword;
        newUser.age = req.body.age;
        await newUser.save();

        return "User created successfully";
      }
    }
  }
});

app.get("/profile", (req, res) => {
  res.render("./views/profile.ejs");
});

connectDB();
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
