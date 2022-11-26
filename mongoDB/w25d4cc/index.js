const express = require("express");
const authRouter = require("./routes/userRoute")
require("dotenv").config();
const { initDB } = require("./dbConfig");
const cookieParser = require("cookie-parser");
const empRouter = require('./routes/empRoute')
const loginRouter = require("./routes/loginRoute")
const app = express();
initDB();

//middlewares
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cookieParser());


app.use("/signup", authRouter);
app.use("/",loginRouter)
app.use("/employee", empRouter);
//movie routes

app.listen(8000, () => {
  console.log("server Started at port 8000 Successfully");
});
