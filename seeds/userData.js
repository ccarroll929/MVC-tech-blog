// Importing the User model from the models folder
const { User } = require('../models');

// Array of data to seed the User table
const userData = [
    {
        username: "user1",
        email: "user1@email.com",
        password: "Password1"
    },
    {
        username: "user2",
        email: "user2@email.com",
        password: "Password2"
    },
    {
        username: "user3",
        email: "user3@email.com",
        password: "Password3"
    },
    {
        username: "user4",
        email: "user4@email.com",
        password: "Password4"
    },
    {
        username: "user5",
        email: "user5@email.com",
        password: "Password5"
    },
    {
        username: "user6",
        email: "user6@email.com",
        password: "Password6"
    },
    {
        username: "user7",
        email: "user7@email.com",
        password: "Password7"
    },
    {
        username: "user8",
        email: "user8@email.com",
        password: "Password8"
    },
    {
        username: "user9",
        email: "user9@email.com",
        password: "Password9"
    },
    {
        username: "user10",
        email: "user10@email.com",
        password: "Password10"
    }
];

// Function to seed the User table with the userData array
const seedUsers = () => User.bulkCreate(userData);

// Export the seedUsers function
module.exports = seedUsers;