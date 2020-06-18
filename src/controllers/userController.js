const {User, Token} = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jasonwebtoken");


const usercontroller = {
    getAll(req,res){
        User.findAll()
        .then(users => res.send(users))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was a problem trying to get users."});
        })
    },
    async signup(req,res){
        try {
            
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was a problem trying to sign up user."});

        }
    },
    async login(req,res){
        try {
            const user = await User.findOne({
                where:{
                    email: req.body.email
                }
            });
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if(!isMatch){
                throw new Error("Revise your credentials.")
            }
            const token = jwt.sign({id: user.id}, "holaAmigos");
            await Token.create({token, userId: user.id, revoked: false})
            res.send({
                user, 
                token
            })

        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was a problem trying to login user."})
        }
    }
}

module.exports = usercontroller;