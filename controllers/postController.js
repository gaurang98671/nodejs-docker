const Post = require("../models/blog")

exports.getOnePost = async (req, res, next)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            
            data: {
                post,
            },
        })
    }
    catch(e)
    {
        res.status(404).json({
            status : 'failed'
        })
    }
}


exports.getAllPosts = async (req, res, next)=>{
    try{
        var post = await Post.find()
       
        res.status(200).json({
            status: 'success',
           
            data: {
                post
            }

        })
    }
    catch(e)
    {
        res.status(404).json({
            status : "Error"
        })
    }
}



exports.createPost = async (req, res, next)=>{
    try{
        const post = await Post.create(req.body)
        res.status(200).json({
            status: 'success',
            data : {
                post
            },
        })
    }
    catch(e)
    {
        res.statue(400).json({
            status: 'failed to create post'
        })
    }
}

exports.updatePost = async (req, res, next)=>{
    try{
        const post = await Post.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data : {
                post
            },
        })
    }
    catch(e)
    {
        res.statue(400).json({
            status: 'failed to update post'
        })
    }
}


exports.deletePost = async (req, res, next)=>{
    try{
        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'success',
            
        })
    }
    catch(e)
    {
        res.status(400).json({
            status: 'failed to delete post'
        })
    }
}
