//You need to type "npm run rishav" not "npm rishav"
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const root = require("./routes/root");
const app = express();
const port = 5000;

app.use(express.json());
app.use(session({
  secret:"corona",
  resave:false,
  saveUninitialized:false
}));

app.use((req,res,next) => {               //Custom Middleware.
  console.log("First middleware");
  next();
});
app.use(morgan("dev"));
app.use("/",root);

app.listen(port,() => {
  console.log(`Server started at port ${port}.`);
});