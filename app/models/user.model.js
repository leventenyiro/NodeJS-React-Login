const conn = require("./db")

const User = function(user) {
    this.id = user.id
    this.username = user.username
    this.email = user.email
    this.password = user.password
    this.emailVerified = user.emailVerified
    this.image = user.image
}

User.reg = (user, result) => {
    conn.query("INSERT INTO product SET ?", user, (err, res) => {
        if (err)
            return result(err, null)
        return result(null)
    })
}

module.exports = User