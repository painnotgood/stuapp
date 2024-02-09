import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/login", (req, res) => {
  res.render("./GradeInput/Login.jsx");
});

app.post("/register", (req, res) => {
  console.log(req.body.undername);
  console.log(req.body.password);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(req.body.username);
  console.log(req.body.password);
});

export default app;
