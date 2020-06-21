const {Order} = require("../models")

const orderController= {
    create(req, res) {
        Order.create(req.body)
        .then(order => {
            order.addFilm(req.body.FilmId)
            res.status(201).send(order)
        })
        .catch(error => {
            console.error(error)
            res.status(500).send({ message: 'There was a problem trying to create the order.' });
        })
    }
}

module.exports = orderController;