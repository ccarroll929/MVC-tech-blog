const router = require('express').Router();
const { User, Blogpost, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new post ('/api/post')
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Blogpost.create({ ...req.body, userId: req.session.userId });
        console.log("This is the new post", newPost);
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Edit post ('/api/post/:id')
router.put('/:id', withAuth, async (req, res) => {
    try {
      const updatedPost = await Blogpost.update(
        {
          title: req.body.title,
          content: req.body.content,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      if (!updatedPost) {
        res.status(404).json({ message: 'This id has no post' });
        return;
      }  
      res.status(200).json(updatedPost);
    } catch (err) {
      res.status(500).json(err);
    }
});

// Delete post ('/api/post/:id')
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: { postId: req.params.id },
        });

      const BlogpostData = await Blogpost.destroy({
        where: {
          id: req.params.id,
          userId: req.session.userId,
        },
      });
      if (!BlogpostData) {
        res.status(404).json({
          message: `No User Id ${req.session.userId} found with id = ${req.params.id}`,
        });
        return;
      }
  
      res.status(200).json(BlogpostData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
