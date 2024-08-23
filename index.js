const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
//routes

const productRoute = require("./routes/product.route.js");
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send("hello!! from Node API Updated:)");
});






mongoose.connect("mongodb+srv://Username:Password.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB").then(() => {
    console.log("connected to the database!!");
    app.listen(3000, () => {
        console.log('Server is running on port 3000!');
    });
}).catch((error) => {
    console.log("Connection failed!!", error);
});
""