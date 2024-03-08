const User = require('./User');
const Comment = require('./Comment');
const Blogpost = require('./Blogpost');

User.hasMany(Blogpost, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
});

Comment.belongsTo(Blogpost, {
    foreignKey: 'blogpostId',
});

Blogpost.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Blogpost.hasMany(Comment, {
    foreignKey: 'blogpostId',
    onDelete: 'CASCADE'
});

module.exports = { User, Comment, Blogpost };