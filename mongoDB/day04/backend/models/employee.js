const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    emp_name:{
        type:String,
        unique: true,
        required: true
    },
    job_name:{
        type: String,
        required:true
    },
    hire_date:{
        type:Date,
    },
    salary:Number
})

const employeModel = mongoose.model("employes", employeeSchema)

module.exports = employeModel