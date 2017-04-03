const faker = require('faker')

const User = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    address: faker.address.streetAddress(),
    bio: faker.lorem.sentences()
}

module.exports = User