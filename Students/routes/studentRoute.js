const express = require('express');

const router = express.Router()

const {createStudent,getStudent,getStudentById,updateStudentById,deleteStudentById} = require('../controllers/studentController');

router.post('/',createStudent);
router.get('/',getStudent);
router.get('/:id',getStudentById);
router.put('/:id',updateStudentById);
router.delete('/:id',deleteStudentById);

module.exports = router