// importando o modelo de produto
const { Produtos, Fabricantes, Categorias } = require("../models")

const produtoController = {
    listarProduto: async (req, res) => {
        const listaDeProdutos = await Produtos.findAll({
            // inner join da lista de relacao
            include: Categorias,
        });

        res.json(listaDeProdutos);
    },
    async cadastrarProduto(req, res){
        // desestruturando
        const {nome, preco, quantidade, fabricante_id, categoria_id} = req.body;

        // queremos cadastrar um produto no nosso banco de dados, o sequelize paresenta uma funcao chamada create. Basca passar um objeto para ela q o produto sera cadastrado
        const novoProduto = await Produtos.create({
            nome,
            preco,
            quantidade,
            fabricante_id,
        });

        // buscando pela chave primaria
        const categoria = await Categorias.findByPk(categoria_id);

        // realizando por comando especial do sequelize para entidades intermediarias N para N
        await novoProduto.setCategorias(categoria)

        res.json(novoProduto);
    },
    async deletarProduto(req, res) {
        // recebendo o parametro id, desestruturacao
        const { id } = req.params;

        // metodo destroy
        await Produtos.destroy({
            where:{
                id,
            },
        });

        res.json("Produto Deletado");
    },
    async atualizarProduto(req, res) {
        // recebendo o parametro id, desestruturacao
        const { id } = req.params;
        const {nome, preco, quantidade} = req.body;

        // metodo update
        const produtoAtualizado = await Produtos.update({
            nome,
            preco,
            quantidade,
    },
    {
        where: {
            id,
        },
    });

    res.json("Produto Atualizado");
    }
};

module.exports = produtoController;