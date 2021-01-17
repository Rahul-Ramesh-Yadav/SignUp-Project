const mongoose = require("mongoose");
const RegisterSchema = new mongoose.Schema({
    firstname : {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    confirmPassword : {
        type: String,
        required: true
    },
    mobileNo : {
        type: Number,
        required: true,
        unique: true
    },
    gender : {
        type: String,
        required: true
    }
})

const Register = new mongoose.model("Register",RegisterSchema);
module.exports = Register;