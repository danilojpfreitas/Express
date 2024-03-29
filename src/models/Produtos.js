// importanto o banco de dados
const db = require("../database");
// importando o sequelize, desestruturando
const { DataTypes } = require("sequelize");
const Fabricantes = require("./Fabricantes");

// construcao de nosso modelo do banco de dados
const Produtos = db.define("Produtos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
    },
    preco : {
        type: DataTypes.FLOAT
    },
    quantidade: {
        type: DataTypes.INTEGER,
    },
    fabricante_id: {
        type: DataTypes.INTEGER,
        references:{
            model: Fabricantes,
            key: "id",
        },
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
}, {
    tableName: "produtos",
});

module.exports = Produtos;