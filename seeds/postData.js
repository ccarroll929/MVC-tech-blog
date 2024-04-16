// seed the database with post data.
const { Post } = require('../models');

// Array of data to seed the Post table
const postData = [
    {
        title: "Test Post 1",
        content: "This is the first test post",
        user_id: 1
    },
    {
        title: "Test Post 2",
        content: "This is the second test post",
        user_id: 2
    },
    {
        title: "Test Post 3",
        content: "This is a third test post",
        user_id: 3
    },
    {
        title: "Test Post 4",
        content: "This is a fourth test post",
        user_id: 4
    },
    {
        title: "Test Post 5",
        content: "This is a fifth test post",
        user_id: 5
    },
    {
        title: "Test Post 6",
        content: "This is a sixth test post",
        user_id: 6
    },
    {
        title: "Test Post 7",
        content: "This is a seventh test post",
        user_id: 7
    },
    {
        title: "Test Post 8",
        content: "This is an eighth test post",
        user_id: 8
    },
    {
        title: "Test Post 9",
        content: "This is a ninth test post",
        user_id: 9
    },
    {
        title: "Test Post 10",
        content: "This is a tenth test post",
        user_id: 10
    }
];

// Function to seed the Post table with the postData array
const seedPosts = () => Post.bulkCreate(postData);

// Export the seedPosts function
module.exports = seedPosts;