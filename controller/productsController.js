const Product = require('../models/product')

exports.home = (req, res) => {
    res.send('Welcome to API SHOP')
}

exports.listProduct = async(req, res) => {
    let data = await Product.find()
    res.send(JSON.stringify({"status": 200, "error": null, "response": data}))
}

exports.detailProduct = async(req, res) => {
    const data = await Product.findById(req.params.id)
    res.send(JSON.stringify({"status" : 200, "error": null, "response": data}))
}
 
exports.tambahProduct = async (req, res) => {
    const Product = new Product(req.body)
    const status = await Product.save()
    res.send(JSON.stringify({"status": 200, "error": null, "response": status}))
}

exports.ubahProduct = async (req, res) => {
    const {id} = req.params
    const status = await Product.update({id : id}, req.body)
    res.send(JSON.stringify({"status": 200, "error": null, "response": status}))
}

exports.hapusProduct = async (req, res) => {
    let {id} = req.params
    const status = await Product.remove({_id:id})
    res.send(JSON.stringify({"status": 200, "error": null, "reponse": status}))
}