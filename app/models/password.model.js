const bcrypt = require('bcrypt')
const saltRounds = 10

const Password = function(password) {
    this.password = password
}

Password.encrypt = (password, result) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err)
            return result(err, null)
        return result(null, hash)
    })
}

Password.decrypt = (password, hash, result) => {
    bcrypt.compare(password, hash, (err, res) => {
        if (err)
            return result(err, null)
        return result(null, res);
    })
}

module.exports = Password