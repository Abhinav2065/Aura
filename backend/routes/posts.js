const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const auth = require("../middleware/authMiddleware");
const multer = require("multer");
const router = express.Router();
const path = require("path");
const { error } = require("console");








router.get('/user/:userId', auth, async(req,res) => {
    try {
        const user = await User.findById(req,params.userId);

        if(!user) {
            return res.status(404).json({
                error:true,
                message:"No User Found"
            });
        }

        res.json({

             error:false,
            posts:user.posts || []
        })
    }
    catch (error) {
        console.log("Error getting the posts", error);
        res.status(500).json({
            error: true,
            message: "SERVER ERROR"
        })
    }
})



const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,'uploads/');  // Uploads Folder Will be used to save the file
    },
    filename: function(req,file,cb) {

        const uniqueName = Date.now() + "." + Math.round(Math.random()*1E9);

        cb(null, 'image-' + uniqueName + path.extname(file.originalname));

    }
});



const fileFilter = (req,file,cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    }
    else {
        cb(new Error("ONly Images are Allowed to Upload"), false);
    }
}


const upload = multer({
    storage:storage,
    limits: {
        fileSize: 10*1024*1024
    },
    fileFilter: fileFilter
});



router.post('/create', auth, upload.single('image'), async (req,res) => {


    const {caption} = req.body;
    const userId  = req.user.userId;


    if (!req.file) {
        return res.status(400).json({
            error: true,
            message: "No Image File FOund",
        });


    }

    const user = await User.findById(userId);

    if (!user) {
        return res.status(404).json({
            error: true,
            message: "User Not Found",
        })
    }


    const newPost = {
        picture: req.file.filename,
        texts: caption || '',
        likes: 0,
        comments: [],
        createdAt: new Date()
    }


    user.posts.push(newPost);
    user.numOfPosts = user.posts.length;
    await user.save();




    // Save Post to DB

    res.json({
        error:false,
        message:'Post Created',
        filename: req.file.filename,
        post: newPost
    })


});

router.post("/like-post", auth, async(req, res) => {

    const userId = req.user.userId;


})


module.exports = router;