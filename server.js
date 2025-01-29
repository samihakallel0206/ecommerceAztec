//require express
const express = require("express");
const app = express();

//require dotenv
require("dotenv").config();

// middlewares
app.use(express.json());

//connect to DB
const connectDB = require("./config/connectDB");
connectDB();

//Routes
app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/user", require("./routes/user.route"));
app.use("/api/product", require("./routes/product.route"));

//Port + listen
PORT = process.env.PORT || 7000;
app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`The server is running on : http://localhost:${PORT}`);
});
