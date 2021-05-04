
const e = require('express')
const session = require('express-session')
const User = require('../models/user')

exports.signUp = async (req, res, next)=>{
    const { userName, password } = req.body
    if(userName && password)
    {
        try{
            
            const newUser = await User.create(req.body)
            
            return res.status(200).json(newUser)
        }
        catch(e)
        {
            return res.status(400).json({
                status: "Failed to create user" 
            })
        }
    }
    else
    {
        return res.status(400).json({
            status: "Missing values" 
        })
    }
}

exports.login = async (req, res, next)=>{
    try{
        const  {userName, password} = req.body
        //const user = await User.find(req.body)
        if(userName && password)
        {
            const user =await  User.find({"userName":userName, "password": password})
            if(user.length===0)
            {
                return res.status(404).json({
                    status : "Incorrect credentials"
                })
            }
            else
            {
                req.session.user = user;
                return res.status(200).json({
                    status : "Success",
                    user: user
                })
            }
        }
        else
        {
            return res.status(404).json({
                status : "Missing credentials"
            })
        }

        
    }
    catch(e)
    {

    }
}
