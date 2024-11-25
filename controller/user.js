const jwt = require("jsonwebtoken");

// Handle login requests
exports.login = async (req, res) => {
    try {
        const { email, password, accountType } = req.body;

        // Check if all fields are provided
        if (!email || !password || !accountType) {
            return res.status(400).json({
                success: false,
                message: "All fields are required.",
            });
        }

        // Validate login credentials based on hardcoded data (can be extended to database validation)
        if (
            (email === "user@gmail.com" && password === "password" && accountType === "User") ||
            (email === "admin@gmail.com" && password === "adminpassword" && accountType === "Admin") ||
            (email === "moderator@gmail.com" && password === "moderatorpassword" && accountType === "Moderator")
        ) {
            const payload = { email, accountType };

            // Generate a JWT token
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h",
            });

            // Set the token in a cookie
            res.cookie("token", token, {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true, // Make the cookie accessible only to HTTP requests
            });

            return res.status(200).json({
                success: true,
                message: `${accountType} login successful.`,
                token,
            });
        } else {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password.",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "An error occurred during login.",
        });
    }
};
