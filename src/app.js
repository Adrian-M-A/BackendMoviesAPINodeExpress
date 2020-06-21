const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("./middleware/cors");
const usersRouter = require ("./routes/users")
const adminsRouter = require ("./routes/admins")
const filmsRouter = require ("./routes/films");
const ordersRouter = require("./routes/orders");

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/users", usersRouter);
app.use("/admin", adminsRouter);
app.use("/film", filmsRouter);
app.use("/orders", ordersRouter);

app.listen(PORT, () => console.log("Server running at PORT " + PORT));
