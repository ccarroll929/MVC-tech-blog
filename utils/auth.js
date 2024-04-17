// Middleware to check if user is logged in before allowing access to certain routes.
const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        // If the user is logged in, allow them to view the route
        next();
    }
};

// Export the middleware
module.exports = withAuth;