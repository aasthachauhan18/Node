const express = require('express')
const router = express.Router();

const employeeConroller = require('../controllers/employeeController');

const validateEmployee = require('../middleware/employeeMiddleWare')

router.post('/',validateEmployee,employeeConroller.createEmployee);
router.get('/',employeeConroller.getAllEmployee);
router.get('/:id',employeeConroller.getEmployeeByID);
router.put('/:id',employeeConroller.updateEmployee);
router.delete('/:id',employeeConroller.deleteEmployee);

module.exports = router