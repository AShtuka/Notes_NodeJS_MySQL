const Sequelize = require('sequelize');

const DB_NAME = 'note_todo';
const USER_NAME = 'root';
const PASSWORD = '4hjrbndthtpjuj;bnnz';

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;