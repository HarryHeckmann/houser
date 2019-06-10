require("dotenv").config();
const express = require('express');
const {json} = require('body-parser')
const massive =  require('massive')
const app = express();

const PORT = process.env.SERVER_PORT;
const c = require('./controller')


app.use(json())

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        console.log('Database connected')
        app.set('../db', dbInstance)
        })
    .catch(err => {
        console.log(err)
    })

app.get('/api/houses', c.getHouses)
app.post('/api/add', c.addHouse)
app.delete('/api/delete:id', c.deleteHouse)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})