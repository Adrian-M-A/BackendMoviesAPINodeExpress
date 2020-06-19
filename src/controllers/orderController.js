const {Order} = require("../models")

const orderController= {
    create(req, res) {
        Order.create(req.body)
        .then(order => {
            order.addUser(req.body.CustomerId)
            order.addMovie(req.body.MovieId)
            res.status(201).send(order)
        })
        .catch(error => {
            console.error(error)
            res.status(500).send({ message: 'There was a problem trying to create the order.' });
        })
    }
}

module.exports = orderController;