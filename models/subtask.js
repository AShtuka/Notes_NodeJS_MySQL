const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../utils/database');
const note = require('./note');

class Subtask extends Model {}

Subtask.init({
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isDone: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'subtask'
});

module.exports = Subtask;