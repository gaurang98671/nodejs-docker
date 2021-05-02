var mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        title:{
            type : String, 
            require: [true, "Blog requires title"]
        },
        body:{
            type: String,
            require: [true, "Blog requires body"]
        }
    }
)

const Post = mongoose.model("Post", postSchema);
module.exports = Post