const mongoose = require("mongoose")


const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    bio: {
        type: String,
        default: ""
    },
    
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: 0

    }],

    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: 0
    }],

    numOfPosts: {
        type: Number,
        default: 0
    },

    posts: [{
        picture: {
            type: String, //Img link
            default: ""
        },

        texts: {
            type: String,
            default: ""
        },

        likes: {
            type: Number,
            default: 0
        },
        
        comments: [{
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },

            text: {
                type: String,
                required: true
            },

            createdAt: {
                type: Date,
                default: Date.now
            }
        }],

        createdAt: {
            type: Date,
            default: Date.now
        }
    }]



});




module.exports = mongoose.model('User', UserSchema);

