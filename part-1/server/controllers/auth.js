const users = []
const bcrypt = require('bcryptjs')

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      const { username, password } = req.body

      for (let i = 0; i < users.length; i++) {
        const existing = bcrypt.compareSync(password, users[i].passHash)

        if (existing) {
          const userToReturn = {...users[i]}
          delete userToReturn.passHash
          console.log(userToReturn)
          res.status(200).send(userToReturn)
          return
        }
      }

      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      const {username, email, firstName, lastName, password} = req.body

        let salt = bcrypt.genSaltSync(5)
        let passHash = bcrypt.hashSync(password, salt)

        let userInfo = {
          username,
          email,
          firstName,
          lastName,
          passHash,
        }

        console.log('Registering User')
        console.log(userInfo)
        users.push(userInfo)
        res.status(200).send(userInfo)
    }
}