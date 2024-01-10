const express = require('express')
const { authenticate } = require('./Middlewares/auth.middleware')
const cors = require('cors');
const connection = require('./Server/db')
const app = express()
app.use(express.json())
app.use(cors())
const { userController } = require('./Controllers/User.controller')
app.get('/', (req, res) => {
    try {
        res.send('Hello World')
    } catch (err) {
        res.send({ error: err.message })
    }
})

app.use('/user', userController);
app.use(authenticate)



app.listen(8080, async () => {
    try {
        await connection;
        console.log('Listening on Port 8080');
    }
    catch (err) {
        console.log(err.message);
    }
});