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
    
}