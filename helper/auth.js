const jwt = require('jsonwebtoken')

module.exports = {
    authUser: (req, res, next) => {
        let secret = process.env.SECRET
        jwt.verify(req.headers.token, secret, (err, decoded) => {
            if (err !== null) {
                res.send('Anda Belum Login')
            } else {
                next()
            }
        })
    }
}
