const router = require('express').Router();
// Importing routes
const userRoutes = require('./userRoutes');
const blogpostRoutes = require('./blogpostRoutes');
const commentRoutes = require('./commentRoutes');

// When a request is made to the /users or /blogposts path, it will be directed to the index.js in the /users or /blogposts folder.
router.use('/user', userRoutes);
router.use('/blogpost', blogpostRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
