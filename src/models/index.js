// necessario criar um arquivo index em models para realizar as associacoes, elas sao apresentadas no site do sequelize
// importanto\
const CategoriaProduto = require("./CategoriaProduto");
const Fabricantes = require("./Fabricantes");
const Produtos = require("./Produtos");
const Categorias = require("./Categorias");

// relacionar para um
Produtos.belongsTo(Fabricantes, {
    foreignKey: "fabricante_id",
});

// relacionar para muitos
Produtos.hasMany(Produtos, {
    foreignKey: "fabricante_id",
});

// relacao muito para muito - CategoriaProduto
Produtos.belongsToMany(Categorias, {
    foreignKey: "produto_id",
    //indicar a existencia de uma tabela intermediaria - CategoriaProduto
    through: CategoriaProduto,
});

Categorias.belongsToMany(Produtos, {
    foreignKey: "categoria_id",
    //indicar a existencia de uma tabela intermediaria - CategoriaProduto
    through: CategoriaProduto,
});

module.exports = {
    Fabricantes,
    Produtos,
    Categorias,
    CategoriaProduto
};

