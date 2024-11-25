const express = require("express");
const router = express.Router();
const { login } = require("../controller/user");  
const { auth, isAdmin, isUser, isModerator } = require("../middleware/auth"); 

// Route for user login (POST request)
router.post("/login", login);

// Admin Route - Only accessible to admin users
router.get("/admin", auth, isAdmin, (req, res) => {
    res.send("Welcome to Admin Route");
});

// User Route - Only accessible to user role
router.get("/user", auth, isUser, (req, res) => {
    res.send("Welcome to User Route");
});

// Moderator Route - Only accessible to moderator role
router.get("/Moderator", auth, isModerator, (req, res) => {
    res.send("Welcome to Moderator Route");
});

module.exports = router;
