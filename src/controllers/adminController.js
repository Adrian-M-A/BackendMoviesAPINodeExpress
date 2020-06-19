const {Order, User, Film} = require("../models");

const adminController ={
    getOrders(req,res){
        Order.findAll({
            include:[User,Movie]
        })
        .then(orders => res.send(orders))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was a problem trying to get orders."});
        })
    },
    async deleteOrder(req,res) {
        try {
            await Order.destroy({
                where:{
                    id: req.body.id
                }
            });
            res.status(201).send({message:"User successfully deleted."})
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was a problem trying to delete order."})
        }
    },
}

module.exports = adminController;