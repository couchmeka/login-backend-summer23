const User = require('../model/User')

const createUser = (params) => {
    let newUser = new User({
        username: params.username,
        password: params.password
    })
    return newUser
}

module.exports = { createUser }