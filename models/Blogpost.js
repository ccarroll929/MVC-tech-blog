const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Blogpost model and datatypes, including the user_id foreign key.
class Blogpost extends Model {}

Blogpost.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
},
{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogpost',
}
);
module.exports = Blogpost;
