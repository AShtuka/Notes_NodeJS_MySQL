const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../utils/database');
const note = require('./note');

class Category extends Model {}

Category.init({
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'category'
});

Category.hasMany(note);
note.belongsTo(Category);

module.exports = Category;