const express = require("express");
const {
  addProduct,
  getProdcucts,
  getOneProd,
} = require("../controllers/product.controllers");
const router = express.Router();
const isAuth = require("../middleware/isAuth");
// test route product
// router.get('/test', (req, res) => {
//     res.send('test of product route')
// })

router.post("/addProd", isAuth, addProduct);
router.get("/allProd", getProdcucts);
router.get("/:id", getOneProd);

module.exports = router;
