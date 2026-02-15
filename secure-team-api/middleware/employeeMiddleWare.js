module.exports = (req,res,next) =>{
    const {name,email,role} = req.body;

    if(!name || name.trim() ===""){
        return res.status(404).json({
            success:false,
            message:"Name is Required"
        });
    }

    if(!email || !email.includes('@')){
        return res.status(400).json({
            success:false,
            message:"Valid emial id Required"
        });
    }

    if(!role){
        return res.status(400).json({
            success:false,
            message:"Role is Required"
        });
    }

    next();
}