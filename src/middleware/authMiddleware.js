const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    // Get token from request header
    const authHeader = req.header("x-auth-token");

    // Check if token exists
    if (!authHeader || !authHeader.startWith('Bearer')) {
        return res.status(401).json({ 
            message: "No token, Authorization denied" 
        });
    }

    // extract token
    const token = authHeader.split(" ",)[1];

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
        console.log(`JWT ERROR: ${error.message}`);

        res.status(401).json({ 
            message: "Token is not valid or has expired"
        });
    }
};

module.exports = authMiddleware;