const express = require("express")
const mongoose = require("mongoose")
const User = require("../models/User")
const router = express.Router();

router.post('/register', async(req , res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    
    const checkUserExists = await User.findOne({
        $or:[
            {username:username},
            {email:email}
        ]
    })

    if (checkUserExists) {
        if (checkUserExists.username ===username) {
            return res.status(400).json({
                error:true,
                message:"That username is already taken D:",
                taken:"username"
            })
        }

        if (checkUserExists.email === email) {
            return res.status(400).json({
                error:true,
                message:"That email is taken D:",
                taken:"email"
            })
        }
    }

    const createNewUser = new User({
        username,
        email,
        password  // NO HASHING BITCHHH, STEALL EVERYONE'S PASSWORDD!!!!
    })

    const user = await createNewUser.save();
    
    res.status(200).json(user);
})


module.exports = router;
