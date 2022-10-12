const usersController = require('../../controller/v1/users-controller');
const productsController = require('../../controller/v1/products-controller');

const createRoutesV1 = (app) => {
    /*app.get('/api/v1/users',(req,res) => {
        usersController.getUsers(req,res)
    })*/

    app.get('/api/v1/users', usersController.getUsers);
    app.get('/api/v1/users/:userId', usersController.getUserById);
    app.get('/api/v1/products', productsController.getProducts);
    app.get('/api/v1/products/:productId', productsController.getProductById);
    app.post('/api/v1/products/create', productsController.createProduct);
    app.put('/api/v1/products/:productId', productsController.updateProduct);
    app.patch('/api/v1/products/:productId', productsController.partialUpdateProduct);
    app.post('/api/v1/products/:productId', productsController.updateProductAndNotify);
    app.delete('/api/v1/products/:productId', productsController.deleteProduct);
}

module.exports = createRoutesV1;