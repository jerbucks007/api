const { Router } = require("express");

const controllerIndex = require("./controllers/controller-index");
const controllerUser = require("./controllers/controller-user");

const validateUser = require("./middlewares/validateUser");
const validateObjectId = require("./middlewares/validateObjectId");

module.exports = () => {

    const router = Router();

    router.get('/', controllerIndex);

    // get user
    router.get('/users', controllerUser.get);

    // get specific user
    router.get('/user/:_id', validateObjectId, controllerUser.get);

    // save user
    router.post('/user', validateUser, controllerUser.save);

    // update user
    router.put('/user/:_id', validateObjectId, validateUser, controllerUser.update);

    // delete user
    router.delete('/user/:_id', validateObjectId, controllerUser.delete);

    return router;

}