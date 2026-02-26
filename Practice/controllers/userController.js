const User = require('../models/User');

exports.createUser = async(req,res)=>{
    const user = await User.create(req.body);

    res.status(201).json(user);
};

exports.getUser = async(req,res) =>{
    const user = await User.find();

    res.json(user)
};


exports.getUserById = async(req,res) =>{
    const user = await User.findById(req.params.id);

    res.json(user)
};



exports.updateUser = async(req,res) =>{
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.json(user);

}

exports.deleteUser = async (req,res) =>{
    const user = await User.findByIdAndDelete(req.params.id);

    res.json({message:"User Deleted"})
}