const productsController = require('../controller/productsController')
const cartController = require('../controller/cartController')
const userController = require('../controller/userController')

module.exports = app => {
    app.get('/', productsController.home)

    //api products
    app.get('/products', productsController.listProduct)
    app.get('/products/:id', productsController.detailProduct)
    app.post('/products/', productsController.tambahProduct)
    app.put('/products/:id', productsController.ubahProduct)
    app.delete('/products/:id', productsController.hapusProduct)

    //api users
    app.get('/user', userController.listUser)
    app.get('/user/:id', userController.detailUser)
    app.post('/user/', userController.tambahUser)
    app.put('/user/:id', userController.ubahUser)
    app.delete('/user/:id', userController.hapusUser)

    //api cart
    app.post('/cart/:id', cartController.addToCart)
    app.get('/cart/:id', cartController.showCart)
    app.put('/cart/:id', cartController.editCart)
    app.delete('/cart/:id', cartController.deleteCart)
    app.get('/cart/remove/:id', cartController.removeCart)

    //checkout
    app.get('/cart/checkout/:id', cartController.checkOut)
}
