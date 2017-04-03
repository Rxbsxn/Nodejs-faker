const express = require('express')
const faker = require('faker')
const app = express()
const port = 8080;

const User = require('./api/users')

app.get('/', (req, res) => {
    res.json(User)
})

app.listen(port, () => {
    console.log(`Server listen on ${port}`)
})
