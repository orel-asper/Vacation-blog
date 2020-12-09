const jwt = require('jsonwebtoken')
require('dotenv').config()
const queryQwest = require('../database/db')

module.exports = (req, res, next) => {
    const { authorization } = req.headers
    !authorization ? res.status(401).send('Unauthorized') : null
    const token = authorization.replace('Bearer ', '')
    jwt.verify(token, process.env.SUPER_SECRET, async (err, payload) => {
        if (err || !payload) {
            res.status(500).send({ error: true, Message: 'You must be Logged in' })
        } else {
            req.user = payload
            const sql = `SELECT * FROM Users WHERE id='${payload.id}'`
            const result = await queryQwest(sql)
            !result.length ? res.status(422).send({ error: true, Message: 'You must be Logged in' }) : next()
        }
    })
}