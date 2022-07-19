const { Usuarios } = require('../models');

// importando o JWT
const jwt = require("jsonwebtoken");

// importando secret
const secret = require("../configs/secret");

// importando bcrypt para verificar a senha
const bcrypt = require('bcryptjs');

const AuthController = {

    async login(req, res){
        const { email, senha } = req.body;

        const usuario = await Usuarios.findOne({
            where:{
                email,
            },
        });

        if(!usuario){
            return res.status(400).json("Email não cadastrado!")
        }

        if(!bcrypt.compareSync(senha, usuario.senha)){
            return res.status(401).json("Senha invalida!")
        }

        const token = jwt.sign({
            id: usuario.id,
            email: usuario.email,
            nome: usuario.nome},
            secret.key
            );

        return res.json(token);
    }
}

module.exports = AuthController;