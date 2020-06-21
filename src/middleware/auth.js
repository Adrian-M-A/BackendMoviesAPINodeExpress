const jwt = require("jsonwebtoken");
const {User,Token} = require("../models");

const auth = async(req,res,next) => {
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token,"holaAmigos");
        const user = await User.findByPk(payload.id);
        const tokenFound = await Token.findOne({
            where:{
                Token: token, 
                UserId: payload.id,
                Revoked: false
            }
        })
        if(!user || !tokenFound){
            return res.status(401).send({
                message:"You are not authorized."
            })
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).send({
            message:"You are not authorized.",
            error
        })
    }
}
const isAdmin =(req,res,next) => {
    if(req.user.Role !== "admin"){
        return res.status(403).send({
            message:"You are not authorized."
        })
    }
    next();
}

module.exports = {auth, isAdmin}; 