const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    // Get token from request header
    const token = req.header("x-auth-token");

    // Check if token exists
    if (!token) {
        return res.status(401).json({ 
            message: "No token, authorization denied" 
        });
    }

    try {
        // verify token
        const decoded = jwt.verify(
            token, 
            process.env.JWT_SECRET
        );

        // store decoded user information in request
        req.user = decoded;

        // contiune to next middleware
        next();

    } catch (error) {
        res.status(401).json({ 
            message: "Token is not valid"
        });
    }
};

module.exports = authMiddleware;