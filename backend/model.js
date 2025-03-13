const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    sname: String,
    age: Number,
    grade: String,
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
