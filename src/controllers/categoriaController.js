const { Categorias } = require("../models")

const categoriaController = {
    async criarCategoria (req, res){
        //desestruturando
        const {nome} = req.body;

        // cadastrado pelo metodo create
        const novaCategoria = await Categorias.create({
            nome,
        });

        res.json(novaCategoria)
    }
}

module.exports = categoriaController;