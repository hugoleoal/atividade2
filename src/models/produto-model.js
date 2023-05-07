
const Sequelize = require('sequelize');
const database = require('../../db');
 
const Produto = database.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    marca: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.DOUBLE
    },
    descricao: Sequelize.STRING
})
 
module.exports = Produto;