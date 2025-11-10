const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const multer = require("multer");
const path = require("path");



const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,'pfp/');  // pfp Folder Will be used to save the file
    },
    filename: function(req,file,cb) {

        const uniqueName = Date.now() + "." + Math.round(Math.random()*1E9);

        cb(null, 'image-' + uniqueName + path.extname(file.originalname));

    }
});




