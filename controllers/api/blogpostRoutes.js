const router = require('express').Router();
// Import the Blogpost model from the models folder
const { Blogpost } = require('../../models');

// If a POST request is made to /api/Blogposts, a new Blogpost is created. If there is an error, the function returns with a 400 error. 
router.post('/', async (req, res) => {
  try {
    const newBlogpost = await Blogpost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogpost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// If a DELETE request is made to /api/Blogposts/:id, that Blogpost is deleted. 
router.delete('/:id', async (req, res) => {
  try {
    const BlogpostData = await Blogpost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!BlogpostData) {
      res.status(404).json({ message: 'No Blogpost found with this id!' });
      return;
    }

    res.status(200).json(BlogpostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
