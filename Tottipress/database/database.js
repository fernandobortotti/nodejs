const Sequelize = require("sequelize");

const connection = new Sequelize('tottipress', 'root', 'fisica', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00" // muda o horário para o br
});

module.exports = connection;

