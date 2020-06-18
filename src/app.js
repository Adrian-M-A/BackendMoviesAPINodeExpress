const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("./middleware/cors");
const usersRouter = require ("./routes/users")

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/users", usersRouter);

app.listen(PORT, () => console.log("Server running at PORT " + PORT));
