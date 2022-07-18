// importando o banco de dados
const db = require("../database");
// importando o sequelize, desestruturando
const { DataTypes } = require("sequelize");
const Categorias = require("./Categorias");
const Produtos = require("./Produtos");

// construcao de nosso modelo do banco de dados
const CategoriaProduto = db.define(
    "CategoriaProduto",
    {
        categoria_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Categorias,
                key: "id",
            },
        },
        produto_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Produtos,
                key: "id",
            },
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    },
    {
        tableName: "categoria_produto",
    }
);

module.exports = CategoriaProduto