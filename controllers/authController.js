const User = require('../models/user')

exports.signUp = async (req, res, next)=>{
    try{
        const newUser = await User.create(req.body)
        res.status(200).json(newUser)
    }
    catch(e)
    {
        res.status(400).json({
            status: "Failed to create user" 
        })
    }
}
