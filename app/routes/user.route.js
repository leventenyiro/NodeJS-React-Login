module.exports = app => {
    const user = require('../controllers/user.controller')

    app.post('/user', user.reg)
}