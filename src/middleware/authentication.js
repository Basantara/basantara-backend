const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET_KEY;

function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (token == undefined) {
        res.status(401);
        return res.json({
            status: "Unauthorized",
            message: "User unautherized",
        });
    }

    jwt.verify(token, jwtKey, (err, userId) => {
        if (err) {
            res.status(403);
            return res.json({
                status: "Forbidden",
                message: err.message,
            });
        }
        req.userId = userId;
        next();
    });
}

module.exports = { authenticateToken };