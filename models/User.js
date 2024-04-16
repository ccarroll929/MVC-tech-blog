// Create the User model for the database
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcryptjs = require('bcryptjs');

// Create the User model
class User extends Model {
    checkPassword(loginPw) {
        return bcryptjs.compareSync(loginPw, this.password);
    }
}

// Define the User model
User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8],
        },
      },
    },
    {
      hooks: {
        async beforeCreate(newUser) {
          newUser.password = await bcryptjs.hash(newUser.password, 10);
          return newUser;
        },
        async beforeUpdate(updatedUser) {
          updatedUser.password = await bcryptjs.hash(updatedUser.password, 10);
          return updatedUser;
        },
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user',
    }
  );
  
  // Export the User model
  module.exports = User;