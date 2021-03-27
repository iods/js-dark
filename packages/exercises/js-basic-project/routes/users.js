const express = require("express");
const users = require("../constants/users");
const app = express.Router();

app.use((req,res,next) => {
    let {Authentacation} = req.session;
  if (Authentacation || (req.path === "/" && req.method === "POST") || (req.path === "/login" && req.method === "POST")) {
    next();
  }else{
    res.status(403).json("Please login to see.");
  }
});
app.get("/",(req,res) => {
  res.json(users.map((n,userID) => {
    const a = {userID,...n};
    delete a.Password;
    return a;
  }));
  }
);
app.post("/",(req,res) => {
  const {
    Username,
    Name,
    Password,
    LinkedIn
  } = req.body;
  if (!Username || !Name || !Password) {
    res.status(400).json({
      Success:false,
      Message:"Please Enter at least Username, Name, and Password."
    });
  }else if (Username.trim().length < 4 || Name.trim().length < 4 || Password.trim().length < 4) {
    res.status(400).json({
      Success:false,
      Message:"Username, Name, and Password should contain at least 3 character."
    });
  }else{
    const match = users.filter(u => u.Username === Username);
    if (match.length > 0) {
      res.status(409).json({
        Success:false,
        Message:"User already exists"});
    }else{
    users.push({
    Username,
    Name,
    Password,
    LinkedIn
    });
    res.status(201).json({
      Success:true,
      Message:"New User has been created."
    });
    }
  }
});
app.get("/login",(req,res) => {
  let {Authentacation} = req.session;
  console.log("get");
  res.json({Authentacation});
});
app.post("/login",(req,res) => {
  let {Authentacation} = req.session;
  const {Username,Password} = req.body;
  console.log("post");
  if (!Username || !Password) {
    //res.json({Username,Password});
    res.status(400).json("Please enter both.");
  }else{
    const matched = users.filter(u => u.Username.toLowerCase() === Username.toLowerCase() && u.Password === Password);
    if (matched.length === 1) {
      const user = {...matched[0]};
      delete user.Password;
      req.session.Authentacation = user;
      res.json({Success : true});
    }else if (matched.length === 0) {
      req.session.destroy(() => {
      res.status(401).json("Oops Bad Credentials");
      });
    }else if (matched.length > 1) {
      req.session.destroy(() => {
        res.status(500).json("Lot of Users has been found.");
      });
    }
  }
});
app.post("/logout",(req,res) => {
  req.session.destroy();
  res.json({Success:true});
});
app.get("/:id",(req,res) => {
  const userID = +req.params.id;
  if (users[userID]) {
    const a = {userID,...users[userID]};
    delete a.Password;
    res.json(a);
  }else{
    res.status(404).json("Error, Can not find User.")
  }
});
app.delete("/:id",(req,res) => {
  const param = req.params.id;
  if (users[param] && users[param].Name) {
    users[param] = {};
    res.status(204).json();
  }else{
    res.status(404).json("User not found.");
  }
})
app.put("/:id",(req,res) => {
  const param = req.params.id;
  if (users[param]) {
    users[param] = req.body;
    res.status(202).json({
      Success:true,
      Message:`Updated the user ${users[param].Name}`
    })
  }else{
    res.status(404).json({
      Succes:false,
      Message:`Error! User Not Found`
    })
  }
});

module.exports = app;