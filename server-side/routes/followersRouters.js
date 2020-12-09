const express = require('express')
const queryQwest = require('../database/db')
require('../database/db')


const router = express.Router()

//like 
router.post('/like/:id', async (req, res) => {
    const { user_name } = req.body
    const q = `SELECT COUNT(follower_vacation_id) AS likes FROM followers WHERE follower_vacation_id = '${req.params.id}' AND user_name ='${user_name}'`
    const result = await queryQwest(q)
    if (result[0].likes === 0) {
        const sql = `INSERT followers (follower_vacation_id , user_name) VALUES ('${req.params.id}','${user_name}')`
        await queryQwest(sql)
        res.status(200).send({ Error: false, like: true })
    } else {
        //drop row 
        const del = ` DELETE FROM followers WHERE follower_vacation_id = '${req.params.id}' AND user_name ='${user_name}'`
        await queryQwest(del)
        res.status(200).send({ Error: false, like: false })
    }
})



// get the count of likes for each vacation
router.get('/followers/:id', async (req, res) => {
    const sql = `SELECT count(follower_vacation_id) AS likes , follower_vacation_id FROM followers WHERE follower_vacation_id = '${req.params.id}'`
    const result = await queryQwest(sql)
    res.status(200).json(result)
})

module.exports = router