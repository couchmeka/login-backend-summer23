// const login = (req, res) => {
//     return {
//         username: req.body.username
//     }
// }
//
// module.exports = {
//     login
// }

const { createUser } = require('./usersHelper')

module.exports = {
    login: async (req, res) => {
        try {
          console.log(req.body);
            if (req.body.username !== 'Brad' && req.body.username !== 'Janet' ){
                throw {
                    status: 404,
                    message: "User Not Found"
                }
            }

            if (req.body.password !== 'abc'){
                throw {
                    status: 403,
                    message: "Invalid Password"
                }
            }
            res.status(200).json({
                username: req.body.username,
                password: req.body.password,
                message: "Successful Login!!"
            })  
        } catch (error) {
            res.status(error.status).json(error.message)
        }
    },
    register: async (req, res) => {

        let newUser = await createUser(req.body)
        
        // hash password
        let savedUser = await newUser.save()

        res.status(200).json({
                userObj: savedUser,
                message: "Successfully Registered"
            }) 
    }
    

}