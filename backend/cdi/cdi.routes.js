const Users = require('./cdi.controler');
module.exports = (router) => {
    router.post('/register', Users.createUser);
    router.post('/login', Users.loginUser);
}