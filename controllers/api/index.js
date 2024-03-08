const router = require('express').Router();
// Importing routes
const userRoutes = require('./userRoutes');
const blogpostRoutes = require('./blogpostRoutes');

// When a request is made to the /users or /blogposts path, it will be directed to the index.js in the /users or /blogposts folder.
router.use('/users', userRoutes);
router.use('/blogposts', blogpostRoutes);

module.exports = router;
