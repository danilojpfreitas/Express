const { Usuarios } = require("../models")
const bcrypt = require("bcryptjs");

const UsuariosController = {
    async registro(req,res) {
        const { nome, email, senha } = req.body;

        // aplicando o bcrypt para esconder a senha 
        const newSenha = bcrypt.hashSync(senha, 10);

        const newUsuario = await Usuarios.create({ nome, email, senha: newSenha})

        return res.status(201).json(newUsuario);
    }
};

module.exports = UsuariosController;