require('./database/db')
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const authRouter = require('./routes/authRouters')
const vacationRouter = require('./routes/vacationRouters')
const followersRouter = require('./routes/followersRouters')

//middlewares
const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(authRouter)
app.use(vacationRouter)
app.use(followersRouter)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server is up and running at port:${PORT}`))


