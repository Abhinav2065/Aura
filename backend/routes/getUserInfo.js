const express = require("express")
const mongoose = require("mongoose")
const User = require("../models/User");
const router = express.Router();

router.get('/:username', async (req, res) => {
    try {
        const username = req.params.username.toLowerCase();
        const user = await User.findOne({ username: username });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({
            username: user.username,
            bio: user.bio,
            numOfPosts: user.numOfPosts,
            followers: user.followers,
            following: user.following,
            posts: user.posts
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server Error' });
    }
});

module.exports = router;