const express = require("express");
const { postEmp, getEmployes, getEmployesById, deleteEmployeByID } = require("../controllers/emp");
const {authMiddleware} = require('../middlewares/auth')


const Router = express.Router();
Router.post("/createemp", postEmp);
Router.use(authMiddleware);

Router.get("/", getEmployes);
Router.get("/:emp", getEmployesById);
Router.delete("/:emp", deleteEmployeByID);

module.exports = Router;