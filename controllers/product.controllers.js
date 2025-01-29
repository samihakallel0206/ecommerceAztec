const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  try {
    const newProd = new Product({ ...req.body, addedBy: req.user.id });
    await newProd.save();
    res.status(200).json({ msg: "Product added successfully!", newProd });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getProdcucts = async (req, res) => {
  try {
    const listProd = await Product.find();
    res.status(200).json({ msg: "List of products", listProd });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getOneProd = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        const prodToGet = await Product.findById(id)
        if (!prodToGet) {
            return res.status(404).json({msg:"Product not found"});
        }
         res.status(200).json({ msg: "The product is" , prodToGet});
    } catch (error) {
         res.status(400).json(error);
  }
};
