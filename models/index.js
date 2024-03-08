const User = require('./User');
const Blogpost = require('./Blogpost');

// Creates a relationship between User and Blogpost model, with the User having a "has many" relationship with Blogpost model.
User.hasMany(Blogpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Creates a relationship between User and Blogpost model, with a "belongs to" relationship of the Blogpost to the User.
Blogpost.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Blogpost };
