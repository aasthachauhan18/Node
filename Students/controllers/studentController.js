const Student = require('../model/Students');

exports.createStudent = async(req,res) =>{
    const student = await Student.create(req.body);

    res.status(201).json(student);
}

exports.getStudent = async(req,res) =>{
    const student = await Student.find()

    res.json(student);
}

exports.getStudentById = async(req,res) =>{
    const student = await Student.findById(req.params.id);

    res.json(student);
}

exports.updateStudentById = async(req,res) =>{
    const student = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
}

exports.deleteStudentById = async(req,res) =>{
    const student = await Student.findByIdAndDelete(req.params.id);

    res.json({message:"Student Deleted"})
}