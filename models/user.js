const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName :
    {
        type: String,
        require : [true, "User name is required"],
        unique : true
    },
    password :
    {
        type : String,
        require : [true, "Password is require"]
    }

})

const User = mongoose.model("User", userSchema)

module.exports = User