const employeModel = require("../models/employee");

const postEmp = async (req, res) => {
  const empData = req.body;
  try {
    const result = await employeModel.create(empData);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getEmployes = async (req, res) => {
  try {
    const emp = await employeModel.find();
    res.send({ status: "success", emp });
  } catch (err) {
    res.status(500).send({ status: "error", msg: "error fetching " });
  }
};

const getEmployesById = async (req, res) => {
  const { empID } = req.params;

  const employe = await employeModel.findById(empID);
  if (employe) {
    res.send(employe);
  } else {
    res.status(404).send({ status: "error", msg: "Not found" });
  }
};

const deleteEmployeByID = async (req, res) => {
  const { empID } = req.params;

  const deletedData = await employeModel.findByIdAndDelete(empID);
  res.send(deletedData);
};

module.exports = {
  postEmp,
  getEmployes,
  getEmployesById,
  deleteEmployeByID,
};
