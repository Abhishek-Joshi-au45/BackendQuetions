const express = require("express");
const {
  signUpController,
  logoutController,
  getSignup,
} = require("../controllers/auth");

const authRouter = express.Router();

// authRouter.get('/signup',) //html to signup

authRouter.get("/", getSignup);
authRouter.post("/employeeRegistration", signUpController);

authRouter.post("/logout", logoutController);

module.exports = authRouter;
