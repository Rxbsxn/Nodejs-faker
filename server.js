const express = require('express')
const faker = require('faker')
const app = express()
const port = 8080;
const User = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    address: faker.address.streetAddress(),
    bio: faker.lorem.sentences()
}

app.get('/', (req, res) => {
    res.json(User)
})

app.listen(port, () => {
    console.log(`Server listen on ${port}`)
})
