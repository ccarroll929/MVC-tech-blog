// Handle the routes for comments
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new comment
router.post('/', withAuth, async (req, res) => {
    try {
        // Create a new comment
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        // Send the new comment back to the client
        res.status(200).json(newComment);
    } catch (err) {
        // If there's an error, send it to the client
        res.status(400).json(err);
    }
});

// Export the router
module.exports = router;