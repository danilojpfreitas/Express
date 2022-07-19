// importando o banco de dados
const db = require("../database");
// importando o sequelize, desestruturando
const { DataTypes } = require("sequelize");

// construcao de nosso modelo do banco de dados
const Usuarios = db.define("Usuarios", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    senha: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
}, {
    tableName: "usuarios",
});

module.exports = Usuarios;