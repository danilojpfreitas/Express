// importando o modelo de produtos
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
        console.log(req.user);
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

        res.status(201).json(novoProduto);
    },
    async deletarProduto(req, res) {
        try {
            // recebendo o parametro id, desestruturacao
        const { id } = req.params;

        // metodo destroy
        await Produtos.destroy({
            where:{
                id,
            },
        });

        res.status(204);
        } catch(error) {
            return res.status(500).json("Ocorreu algum problema");
        }
    },
    async atualizarProduto(req, res) {
        // recebendo o parametro id, desestruturacao
        const { id } = req.params;
        const {nome, preco, quantidade} = req.body;

        if (!id) return res.status(400).json("id não enviado");

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