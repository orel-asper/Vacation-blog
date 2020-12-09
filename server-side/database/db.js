const mysql = require('mysql')


//CreateConnection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vacation'
})
//Connect chack
db.connect(err => err ? console.log(err) : console.log('MySQL connection successful...'))


const queryQwest = async (q) => {
    return new Promise((resolve, reject) => {
        db.query(q, (err, results) => {
            err ? reject(err) : resolve(results)
        })
    })
}

module.exports = queryQwest