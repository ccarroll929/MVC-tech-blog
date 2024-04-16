// Importing seed data functions
const seedUsers = require('./userData');
const seedPosts = require('./postData');
const seedComments = require('./commentData');

// Importing connection to database
const sequelize = require('../config/connection');

// Seed function
const seedAll = async () => {
await sequelize.sync({ force: true });
console.log('\n----- DATABASE SYNCED -----\n');

await seedUsers();
console.log('\n----- USERS SEEDED -----\n');

await seedPosts();
console.log('\n----- POSTS SEEDED -----\n');

await seedComments();
console.log('\n----- COMMENTS SEEDED -----\n');

process.exit(0);
};

// Call seed function
seedAll();