// importando o fabricante
const { Fabricantes } = require("../models")

const fabricanteController = {
    async criarFabricante (req, res){
        // desestruturando
        const {nome} = req.body;

        // cadastrando pelo metodo create
        const novoFabricante = await Fabricantes.create({
            nome,
        });

        res.json(novoFabricante);
    }
}

module.exports = fabricanteController;