const express = require('express');
const router = express.Router();
const User = require('../model/login'); // Importing User model

// User Login Route
router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const existingUser = await User.findOne({ email, password }); // Checking user with plain-text password
        if (!existingUser) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        res.status(200).json(existingUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// User Registration Route
router.post('/add', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const newUser = new User({ email, password }); // Storing plain-text password
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

