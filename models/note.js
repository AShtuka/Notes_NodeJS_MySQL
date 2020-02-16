const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../utils/database');
const subtask = require('./subtask');

class Note extends Model {}

Note.init({
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'note'
});

Note.hasMany(subtask);
subtask.belongsTo(Note);

module.exports = Note;