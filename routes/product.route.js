const express = require("express");
const product = require("../models/product.model.js");
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js');


router.get('/', getProducts);


router.get('/:id', getProduct);
router.post("/", createProduct)

//updateProduct
router.put("/:id", updateProduct);

//deleteProduct
router.delete("/:id", deleteProduct);


module.exports = router;