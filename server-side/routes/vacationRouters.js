const express = require('express')
const requireAuth = require('../middlewares/requireAuth')
const queryQwest = require('../database/db')
require('../database/db')


const router = express.Router()

//is user is logged in?
router.get('/users', requireAuth, async (req, res) => {
    try {
        const { id } = req.user
        const sql = `SELECT id, first_name, last_name, user_name, role FROM users WHERE id ='${id}'`
        const user = await queryQwest(sql)
        res.send({ error: false, user })
    } catch (err) {
        res.sendStatus(500).send({ error: true, message: 'token expired' })
    }
})


// get all vacations
router.get('/allvacations/:id', requireAuth, async (req, res) => {
    try {
        const sql = `SELECT *
        FROM vacations 
        LEFT JOIN followers
        ON vacations.vacation_id = followers.follower_vacation_id AND user_name = '${req.params.id}'
        ORDER BY user_name = '${req.params.id}' DESC`
        const allvacations = await queryQwest(sql)
        res.send({ error: false, allvacations })
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
})


//insert vacation 
router.post('/addvacation', requireAuth, async (req, res) => {
    try {
        const { description, destination, images, from_date, to_date, price } = req.body
        if (!description || !destination || !images || !from_date || !to_date || !price) {
            res.status(422).send({ error: true, message: 'sorry missing info' })
        } else {
            const vacation_id = require('uuid').v4()
            const sql = `INSERT INTO vacations (vacation_id, description, destination, images, from_date, to_date, price) 
            VALUES ('${vacation_id}','${description}','${destination}','${images}','${from_date}','${to_date}','${price}')`
            await queryQwest(sql)
            res.send({ error: false, massage: 'vacation added' })
        }
    } catch (err) {
        res.status(422).send({ error: true, message: err.message })
    }
})


// Delete vacation
router.delete('/deletevacation/:id', requireAuth, async (req, res) => {
    const sql = `DELETE FROM vacations WHERE vacation_id = '${req.params.id}'`
    await queryQwest(sql)
    res.status(200).send({ error: false, message: 'deleted' })
})


//search vacation by value
router.post('/searchvacation', async (req, res) => {
    const { value, from_date, to_date } = req.body
    const sql = `SELECT * FROM vacations WHERE destination LIKE '%${value}%' AND from_date = '${from_date}' AND to_date = '${to_date}'`
    const vacation = await queryQwest(sql)
    res.send(vacation)
})


// Update vacation
router.put('/updatevacation/:id', requireAuth, async (req, res) => {
    const { description, destination, images, from_date, to_date, price } = req.body
    if (!description || !destination || !images || !from_date || !to_date || !price) {
        res.status(422).send({ error: true, message: 'missing info' })
    } else {
        const sql = `UPDATE vacations SET description = '${description}', destination = '${destination}', images = '${images}', from_date = '${from_date}', to_date = '${to_date}', price = '${price}' WHERE vacation_id = '${req.params.id}'`
        await queryQwest(sql)
        res.status(200).send({ error: false, message: 'vacation updated successfully' })
    }
})


module.exports = router