// const login = (req, res) => {
//     return {
//         username: req.body.username
//     }
// }
//
// module.exports = {
//     login
// }

module.exports = {
    login: (req, res) => {
        console.log(req.body);
        res.send({
            username: req.body.username,
            password: req.body.password
        })
    }
}