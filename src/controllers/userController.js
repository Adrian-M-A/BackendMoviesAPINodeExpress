const {User, Token} = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userController = {
    profile(req,res){
        User.findOne({
            where:{
                email: req.body.email
            }
        })
        .then(users => res.send(users))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was a problem trying to get users."});
        })
    },
    async signup(req,res){
        try {
            const hash = await bcrypt.hash(req.body.password, 10);
            req.body.password = hash;
            const user = await User.create(req.body);
            res.status(201).send(user);
            
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
    }, 
    async delete(req,res) {
        try {
            await User.destroy({
                where:{
                    email: req.body.email
                }
            });
            res.status(201).send({message:"User successfully deleted."})
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was a problem trying to delete user."})
        }
    }
}

module.exports = userController;