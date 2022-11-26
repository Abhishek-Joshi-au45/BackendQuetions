const express = require("express");
const { getLogin, loginController } = require("../controllers/auth");
const loginRouter = express.Router();
loginRouter.get("/login", getLogin);
loginRouter.post("/login", loginController);
module.exports = loginRouter;