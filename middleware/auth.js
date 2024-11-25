const jwt = require("jsonwebtoken");

// Middleware to check if the user is authenticated using the token
exports.auth = async (req, res, next) => {
    try {
        // Retrieving the token from different places
        const token =
            req.cookies.token ||
            req.body.token ||
            req.header("Authorization").replace("Bearer", "");

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token is missing. Please log in.",
            });
        }

        // Verifying token with JWT_SECRET from environment variables
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
         // Attach decoded user info to the request
        req.user = decoded;
        // Proceed to the next middleware/route handler
        next(); 
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token. Authentication failed.",
        });
    }
};

// Middleware to check if the user is a 'User'
exports.isUser = (req, res, next) => {
    try {
        const { email, accountType } = req.user;

        if (accountType !== "User") {
            return res.status(403).json({
                success: false,
                message: "This is a protected route for Users only.",
            });
        }

        next(); 
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified.",
        });
    }
};

// Middleware to check if the user is an 'Admin'
exports.isAdmin = (req, res, next) => {
    try {
        const { email, accountType } = req.user;

        if (accountType !== "Admin") {
            return res.status(403).json({
                success: false,
                message: "This is a protected route for Admins only.",
            });
        }

        next(); 
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Admin role cannot be verified.",
        });
    }
};

// Middleware to check if the user is a 'Moderator'
exports.isModerator = (req, res, next) => {
    try {
        const { email, accountType } = req.user;

        if (accountType !== "Moderator") {
            return res.status(403).json({
                success: false,
                message: "This is a protected route for Moderator only.",
            });
        }

        next(); 
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Moderator role cannot be verified.",
        });
    }
};
