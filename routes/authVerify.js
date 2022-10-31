const jwt = require("jsonwebtoken")
require('dotenv').config({path: 'config.env'})

module.exports = function (req, res, next){
    const token = req.header("auth-token");
    if(!token) return res.status(401).send("Access Denied")

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.body = verified;

        next();
    }catch(error){
        res.status(400).send("Invalid token");
    }
}