const data = require('../data/employee');
const {v4:uuidv4} = require('uuid')

exports.createEmployee = (req,res) =>{
    const{name,email,role,department} = req.body;

    const newEmployee = {
        id:uuidv4(),
        name,
        email,
        role,
        department,
        createAt:new Date()
    };

    data.push(newEmployee);

    res.status(201).json({message:"Employee Created",
        data : newEmployee});
} 


exports.getAllEmployee = (req,res) =>{
    res.status(200).json(data);
}

exports.getEmployeeByID = (req,res) =>{
    const employee = data.find(e => e.id ===req.params.id);

    if(!employee){
        return res.status(404).json({message:"Employee Not Found"});

    }
    res.status(200).json(employee);
}


exports.updateEmployee = (req,res) =>{
    const employee = data.find(e => e.id === req.params.id);

    if(!employee){
        return res.status(404).json({message:"Employee Not Found"})
    }

     const{name,email,role,department} = req.body;

     employee.name = name || employee.name;
     employee.email = email || employee.email;
     employee.role = role || employee.role;
     employee.department = department || employee.department;
    res.status(200).json({message:"Employee Updated",
        data : employee});
};


exports.deleteEmployee = (req,res) =>{
    const index = data.findIndex(e => e.id === req.params.id);

    if(index === -1){
        return res.status(404).json({message:"Employee Not Found"})
    }
    data.splice(index,1);

    res.status(200).json({message:"Employee Deleted Successfullly"})
};
