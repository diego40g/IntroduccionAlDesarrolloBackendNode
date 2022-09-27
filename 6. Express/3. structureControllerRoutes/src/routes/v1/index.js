const usersController = require('../../controller/v1/users-controller');

const createRoutesV1 = (app) => {
    /*app.get('/api/v1/users',(req,res) => {
        usersController.getUsers(req,res)
    })*/

    app.get('/api/v1/users', usersController.getUsers);
}

module.exports = createRoutesV1;