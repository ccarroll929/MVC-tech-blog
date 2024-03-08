const router = require('express').Router();
const { User, Post, Comment, Blogpost } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

// Get all posts
router.get('/', withAuth, (req, res) => {
    Blogpost.findAll({
      where: {
        userId: req.session.userId,
      },
      attributes: ['id', 'title', 'content', 'created_at'],
      order: [['created_at', 'DESC']],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment', 'blogpostId', 'userId', 'created_at'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    })
      .then((dbBlogpostData) => {
        const Blogposts = dbBlogpostData.map((Blogpost) => Blogpost.get({ plain: true }));
        res.render('dashboard', { Blogposts, loggedIn: true, username: req.session.username,});       
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Get one post to edit
router.get('/edit/:id', withAuth, (req, res) => {
  Blogpost.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'title', 'content', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username'],
      },
      {
        model: Comment,
        attributes: ['id', 'comment', 'blogpostId', 'userId', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
    ],
  })
    .then((dbBlogpostData) => {
      if (!dbBlogpostData) {
        res.status(404).json({ message: 'This id has no post.' });
        return;
      }
      const Blogpost = dbBlogpostData.get({ plain: true });
      res.render('edit-post', { Blogpost, loggedIn: true, username: req.session.username });         
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//  Get new post 
router.get('/new', withAuth, (req, res) => {
    res.render('new-post', { username: req.session.username });
});

module.exports = router; 