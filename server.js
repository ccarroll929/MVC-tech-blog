// Importing packages, helpers, and routes
const path = require('path');
const express = require('express');
const session = require('express-session');
const expressHbrs = require('express-handlebars');
const helpers = require('./utils/helpers');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Setting up session cookie storage
const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 300000,
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    }),
};

// Setting up app to use all packages, helpers, and routes
app.use(session(sess));

const hbs = expressHbrs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Starting server 
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});
