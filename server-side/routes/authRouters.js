const queryQwest = require('../database/db')
require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const router = express.Router()
const saltRounds = 10

//signup
router.post('/signup', async (req, res) => {
    try {
        const { first_name, last_name, user_name, password, role } = req.body
        if (!first_name || !last_name || !user_name || !password || !role) {
            res.status(422).json({ error: true, message: 'missing some info' })
        } else {
            const user = await queryQwest(`SELECT user_name FROM users WHERE user_name = "${user_name}"`)
            if (user.length) {
                res.status(400).json({ error: true, message: 'username is taken' })
            } else {
                const id = require('uuid').v4()
                const hash = await bcrypt.hash(password, saltRounds)
                const sql = `INSERT INTO users (id,first_name,last_name,user_name,password,role) VALUES ('${id}','${first_name}','${last_name}','${user_name}','${hash}','${role}')`
                await queryQwest(sql)
                res.status(201).json({ error: false, message: 'user added successfully' })
            }
        }
    } catch (err) {
        return res.status(500).json({ error: true, message: 'missing some info' })
    }
})

//signin
router.post('/signin', async (req, res) => {
    const { user_name, password } = req.body
    if (!user_name || !password) {
        res.status(422).json({ error: true, message: 'Invalid username or password' })
    } else {
        const sql = `SELECT * FROM Users WHERE user_name='${user_name}'`
        const user = await queryQwest(sql)
        if (user.length) {
            const isPasswordCorrect = await bcrypt.compare(password, user[0].password)
            !isPasswordCorrect ? res.status(422).json({ error: true, message: 'Invalid username or password' }) : null

            const token = jwt.sign({ ...user[0], password: null, user_name: null }, process.env.SUPER_SECRET, { expiresIn: process.env.TOKEN_EXPIRES })
            res.json({ error: false, token })
        } else {
            res.status(500).json({ error: true, message: 'Invalid username or password' })
        }
    }
})

module.exports = router