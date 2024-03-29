const router = require('express').Router();
const { User, Blogpost, Comment } = require('../models');
const sequelize = require('../config/connection');

// Get all Blogposts
router.get('/', async (req, res) => {
    try {
        // Retrieve all blogposts from db
        const dbBlogpostData = await Blogpost.findAll({ 
            attributes: ['id', 'title', 'content', 'created_at'],           
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
            order: [['created_at', 'DESC']],
        })
        // Serialize data retrieved
        const blogposts = dbBlogpostData.map((blogpost) => blogpost.get({ plain: true }));
        console.log(blogposts)
        // Respond with template to render along with date retrieved
        res.render('homepage', 
            { blogposts, 
            loggedIn: req.session.loggedIn, 
            username: req.session.username,
            userId: req.session.userId });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get single Blogpost
router.get('/blogpost/:id', async (req, res) => {
    try{
        const dbBlogpostData = await Blogpost.findOne({
            where: {id: req.params.id},
            attributes: ['id', 'title', 'content', 'created_at'],
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
        });
        if (dbBlogpostData) {
            const blogpost = dbBlogpostData.get({ plain: true });
            console.log(Blogpost);
            res.render('single-blogpost', { blogpost, loggedIn: req.session.loggedIn, username: req.session.username, })  
        } else {
            res.status(404).json({ message: "This id has no blogpost."});
            return;
        }
    } catch (err) {
        res.status(500).json(err);
    }   
});

// Login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// Signup
router.get('/signup', async (req, res) => {
    res.render('signup');
})

module.exports = router;