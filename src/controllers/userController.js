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
            res.status(500).send({message:"There was a problem trying to get user."});
        })
    },
    async signup(req,res){
        try {
            console.log(req.body)
            const checkUser = await User.findOne({
                where:{
                    email: req.body.Email
                }
            });
            if (checkUser){
                res.status(400).send({message: "You cannot register with this email."})
            }

            const hash = await bcrypt.hash(req.body.Password, 10);
            req.body.Password = hash;
            const user = await User.create(req.body);
            console.log(user);
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
                    email: req.body.Email
                }
            });
            const isMatch = await bcrypt.compare(req.body.Password, user.Password);
            if(!isMatch){
                throw new Error("Revise your credentials.")
            }
            const token = jwt.sign({id: user.id}, "holaAmigos");
            await Token.create({Token:token, UserId: user.id, Revoked: false})
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
                    email: req.body.Email
                }
            });
            res.status(201).send({message:"User successfully deleted."})
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was a problem trying to delete user."})
        }
    },
    async logout(req, res) {
        try {
            await Token.destroy({
                where: {
                    Token: req.headers.authorization
                }
            });
            res.send({ message: 'Successfully logged out' })
        } catch (error) {
            console.error(error)
            res.status(500).send({
                message: 'There was an error trying to logout the user',
                error
            });
        }
    },

    async update(req, res) {
        try {
            const user = await User.update({
                where: {
                    Email: req.body.Email
                }
            });
            res.status(201).send(user);
        } catch (error) {
            console.error(error)
            res.status(500).send({
                message:"There was an error trying to update user.",
                error
            });
        }
    }
}

module.exports = userController;