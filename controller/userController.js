const Users = require('../models/users')

exports.home = (req, res) => {
    res.send('Welcome to API SHOP')
}

exports.listUser = async(req, res) => {
    let data = await Users.find()
    res.send(JSON.stringify({"status": 200, "error": null, "response": data}))
}

exports.detailUser = async(req, res) => {
    const data = await Users.findById(req.params.id)
    res.send(JSON.stringify({"status" : 200, "error": null, "response": data}))
}
 
exports.tambahUser = async (req, res) => {
    const Users = new Users(req.body)
    const status = await Users.save()
    res.send(JSON.stringify({"status": 200, "error": null, "response": status}))
}

exports.ubahUser = async (req, res) => {
    const {id} = req.params
    const status = await Users.update({id : id}, req.body)
    res.send(JSON.stringify({"status": 200, "error": null, "response": status}))
}

exports.hapusUser = async (req, res) => {
    let {id} = req.params
    const status = await Users.remove({id:id})
    res.send(JSON.stringify({"status": 200, "error": null, "reponse": status}))
}