import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
import env from "dotenv";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // replace with your origin
    credentials: true,
  }),
);
const port = 6001;
env.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  }),
);

app.use(passport.initialize());
app.use(passport.session());
const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432,
});

db.connect();

app.get("/", (req, res) => {
  console.log("Hello World");
});

app.get("/login", (req, res) => {
  console.log("Login");
});

app.get("/username", (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json({ username: req.user.username });
    //res.status(200).json({ username: req.user.math });
  } else {
    res.status(401).json({ message: "Not authenticated" });
  }
});

app.get("/userMath", (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json({ math: req.user.math });
  } else {
    res.status(401).json({ message: "Not authenticated" });
  }
});

app.get("/check-auth", (req, res) => {
  //console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    res.status(200).json({ isAuthenticated: true });
  } else {
    res.status(200).json({ isAuthenticated: false });
  }
});

app.get("/grade", (req, res) => {
  console.log(req.user);
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    res.redirect("http://localhost:5173/grade");
  } else {
    res.redirect("http://localhost:5173/login");
  }
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "http://localhost:6001/grade",
    failureRedirect: "http://localhost:5173/login",
  }),
);

app.get("/register", (req, res) => {
  console.log("Register");
});

app.get("/mathCheck", async (req, res) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    const userId = req.user.id;
    const newMathValue = req.user.math === 1 ? 0 : 1;
    await db.query("UPDATE users SET math = $1 WHERE id = $2", [
      newMathValue,
      userId,
    ]);
    req.user.math = newMathValue;
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

app.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const check = await db.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    if (check.rows.length > 0) {
      res.send("Username already exists! Please try again.");
    } else {
      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
          res.send("An error occurred. Please try again.");
        } else {
          const add = await db.query(
            "INSERT INTO users (username, password) VALUES ($1, $2)",
            [username, hash],
          );
          res.redirect("http://localhost:5173/grade");
        }
      });
    }
  } catch (error) {
    console.error(error);
    res.send("An error occurred. Please try again.");
  }
});

passport.use(
  new Strategy(async function verify(username, password, cb) {
    try {
      const check = await db.query("SELECT * FROM users WHERE username = $1", [
        username,
      ]);
      if (check.rows.length > 0) {
        const user = check.rows[0];
        const valid = user.password;
        bcrypt.compare(password, valid, (err, result) => {
          if (err) {
            return cb(err);
          } else if (result) return cb(null, user);
          else return cb(null, false);
        });
      } else {
        return cb("No user found");
      }
    } catch (error) {
      return cb(error);
    }
  }),
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
