const express = require("express")
const mongoose = require("mongoose")
const User = require("../models/User")
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");




const JWT_SECRET = "secret-key"; // JWT Secret Key

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

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);   // Yes Hashing



    const createNewUser = new User({
        username,
        email,
        password: hashedPassword   // Store the Hashed Passowrd 
    })

    const user = await createNewUser.save();

    const token = jwt.sign(
        {
            userId: user._id,
            username: user.username
        },
        JWT_SECRET,
        {expiresIn:'2h'}  //Expiration Time for token (2hours)
    );

    res.status(201).json({
        error:false,
        message: "Sucessfully Regestered", 
        token: token,
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })

    })


router.post("/login", async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    const user = await User.findOne({ username: username });

    const checkUserExists = await User.findOne({
        username:username
    })

    if (!checkUserExists) {
        return res.status(400).json({
            error:true,
            message:"This Username exist"
        })
    }

    const isPassNotCorrect = await bcrypt.compare(password, user.password);

    if (isPassNotCorrect) {
        return res.status(400).json({
            error:true,
            message:"Wrong Password man!"
        })
    }

    const token = jwt.sign(
        {
            userId: user._id,
            username: user.username
        },
        JWT_SECRET,
        {expiresIn:'2h'}
    );



    res.status(200).json({
        error:false,
        message:"Login Sucessfull!",
        token: token,
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    });

})


module.exports = router;
